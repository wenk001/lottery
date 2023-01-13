<template>
  <div id="root">
    <div id="main" :class="mask ? 'mask' : ''">
        <div id="tags">
            <ul v-for="(item,k) in allList" :key="k" :id="item.openid">
                <li>
                <a href="javascript:void(0);" :style="{color: item.win !=='无' ? '#FF1818' : '#F1C40F'}">
                    <span>{{item.nickname}}</span>
                    <img :width="item.win !=='无' ? 80 : 40" :height="item.win !=='无' ? 80 : 40" :src="item.imgurl" />
                </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="tool">
      <transition name="but">
         <Button v-show="!start1" @toggle="toggle" @winerList="winerList" :title="butTitle"></Button>
      </transition>
        <transition name="countd">
         <div v-show="start1" class="countd">
          <countDown 
          ref="countDown"
          :fire="fire"
          time="10"
          width= "280"
          height= "280"
          :tiping="tiping"
          :tipend="tipend"
          @onStatusChange="onStatusChange"
          @onEnd="onEnd"/>
        </div>
      </transition>
        
    </div>
    <transition name="winer">
      <Winer v-show="showWiner" @submit="submit"  @goon="goon" :winList="winList" :isList="isList" :url="url" :name="name"></Winer>
     </transition> 
  </div>
</template>

<script>
import axios from 'axios'
import countDown from 'vue-canvas-countdown'
import Button from '../components/Button.vue'
import Winer from '../components/Winer.vue'
export default {
  name: 'Lottery',
  components: {
    countDown,Button,Winer
  },
  props:{
    resetData:{
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
        mask:false,
        start1: false,
        showWiner: false,
        winList: {},
        allList: [],
        a:-1,
        name: '',
        url: '',
        isList: false,
        butTitle: '点击抽奖',
        datas:[],
        fire: 10,
        tiping: {
          text: '正在抽奖',
          color: 'gold'
        },
        tipend: {
          text: '恭喜中奖',
          color: 'gold'
        }
    }
  },
 watch: {
   resetData:{
    immediate:true,
     handler(){
      this.butTitle = JSON.parse(sessionStorage.getItem("rewardData"))[0].num > 0 ? '点击抽奖' : '已无奖品' 
    }
   }
  },
  computed: {

  },
  created() {
    
  },
   mounted() {
     this.getAllData()
     window.addEventListener('resize', this.reportWindowSize);
    
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reportWindowSize);
  },
    methods: {
      //倒计时组件
      onStatusChange (payload) {
        console.log('倒计时状态改变：', payload)
      },
      onEnd () {
        console.log('倒计时结束的回调函数')
      },
      //获取所有名单
      async getAllData(reset){
        this.mask = true
        const that = this
        axios.get('/api/allList')
        .then(function (response) {
          response.data.data.forEach((v)=>{
            v.win = '无'
          })
          console.log(response.data.data)
          that.allList = response.data.data
          
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
          if(reset){
            that.$nextTick(()=>{
              window.TagCanvas.Reload('rootcanvas')
              window.TagCanvas.SetSpeed('rootcanvas', [5, 0]);
              that.start1 = false
            })
            setTimeout(()=>{
              window.TagCanvas.SetSpeed('rootcanvas', that.speed());
            },500)
          }else{
            that.startTagCanvas();
          }
          that.mask = false
        });  
        await this.getUserList()
        if(this.datas.length === 0){
          this.butTitle = '已无奖品'
          return
        }
      },
      // 获取获奖名单
      async getLuckyList(){
        const that = this
        let {data} = await axios.get('/api/luckyList')
        that.winList = data.data
        console.log(that.winList)
      },
      // 获取可抽奖名单
      async getUserList(){
        const that = this
        let {data} = await axios.get('/api/userList')
        that.datas = data.data
          console.log(that.datas)
      },
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
      },
    async winerList(){
      await this.getLuckyList()
      this.showWiner = true
      this.isList = true
    },
    async toggle() {
      
      let reward = JSON.parse(sessionStorage.getItem("rewardData"))
      this.start1 = true
      this.showWiner = false
      this.isList = false
      this.$refs.countDown.startCd()
      this.$emit('openMusic',true)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [2, 2]);
      },500)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [3, 2]);
      },2000)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [0, 4]);
      },4000)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [5, 0]);
      },6000)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [2, 6]);
      },6000)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [10, 1]);
      },8000)
      const that = this
      setTimeout(()=>{
          window.TagCanvas.TagToFront('rootcanvas', { index : ind  })
          window.TagCanvas.Reload('rootcanvas')
          that.$emit('openMusic',false)
          that.$emit('startEndMusic',true)
          that.name = this.datas[this.a].nickname
          that.url = this.datas[this.a].imgurl
          that.showWiner = true
      },9500)
      await this.getUserList()
      this.a = this.getRandomInt(0,this.datas.length)
      console.log(this.a)
      let ind = this.allList.findIndex((v) => {
        return v.openid === this.datas[this.a].openid
      })
      this.allList[ind].win = ['特等奖','一等奖','二等奖','三等奖'][reward[0].level]
    },
    reset(){
      this.getAllData(true)
      this.$emit('startEndMusic',false)
      this.showWiner = false
    },
    submit(){
      let reward = JSON.parse(sessionStorage.getItem("rewardData"))
      this.saveWiner(this.datas[this.a].openid,reward[0].level)
      if(reward[0].num > 0){
        reward[0].num = reward[0].num - 1
        sessionStorage.setItem("rewardData",JSON.stringify(reward))
        this.butTitle = JSON.parse(sessionStorage.getItem("rewardData"))[0].num > 0 ? '点击抽奖' : '已无奖品' 
        this.$emit('changeNum')
      }
    },
    saveWiner(openid,type){
      const that = this
      axios.get('/api/win',{
        params:{
          openid: openid,
          prizeType: ['prize','prize1','prize2','prize3'][type]
        }
      })
        .then(function (response) {
          console.log(response)
          that.reset()
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    goon(){
      this.showWiner = false
    },
    reportWindowSize() {
      const AppCanvas = this.$el.querySelector('#rootcanvas');
      if (AppCanvas.parentElement) {
        AppCanvas.parentElement.removeChild(AppCanvas);
      }
      this.startTagCanvas();
    },
    speed() {
      return [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)];
    },
    createCanvas() {
      const canvas = document.createElement('canvas');
    //   canvas.width = document.getElementById('root').offsetWidth * 0.8;
    canvas.width = 450;
      canvas.height = 450;
      canvas.id = 'rootcanvas';
      this.$el.querySelector('#main').appendChild(canvas);
    },
    startTagCanvas() {
      this.createCanvas();
      const { speed } = this;
      window.TagCanvas.Start('rootcanvas', 'tags', {
        initial: speed(),
        dragControl: false,
        imageRadius: '50%',
        noSelect: true,
        imageMode: 'both',
        imagePosition: 'top',
        shape: "sphere",
        textColour: null,
        lock: 'xy',
        noMouse: true
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#root {
    width: 100%
    height: 100%
    
    position: relative
    display: flex
}
#main {
    width: 450px
    height: 100%
    border-radius: 50%
    background:linear-gradient(180deg,rgba(31,29,44,.8),rgba(6,4,25,.8))
    box-shadow: 1px 1px 7px 0 #6e6134, 0 0px 9px 0 #e3bf43, -1px 0 9px 0 #e1e0d1, -1px 0 9px 0 #000000
    #tags{
        height: 0  
        overflow: hidden
    }
}
.tool{
  width: calc(100% - 450px)  
  position: relative
}
.countd{
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
}
.mask{
    animation: spin 2s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    transition: all 2s;
  }
}
.but-enter-active,  .but-leave-active {
    transition: all 0.3s linear;
    transform: translateY(0);
  }
.but-enter,  .but-leave {
    transform: translateY(-50%);
}
.but-leave-to{
     transform: translateY(-50%);
     opacity: 0;
  }
  .countd-enter-active,  .countd-leave-active {
    transition: all 0.3s linear;
    transform: translateY(0);
  }
.countd-enter,  .countd-leave {
    transform: translateY(50%);
}
.countd-leave-to{
     transform: translateY(50%);
     opacity: 0;
  }
.winer-leave-active {
    transition: all 0.2s linear;
    transform: scale(0,0);
  }
.winer-leave{
    transform: scale(1,1);
}
.winer-enter-active {
    transition: all 0.2s linear;
    transform: scale(1,1);
  }
.winer-enter{
    transform: scale(0,0);
}
</style>
