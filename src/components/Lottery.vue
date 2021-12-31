<template>
  <div id="root">
    <div id="main" :class="mask ? 'mask' : ''">
        <div id="tags">
            <ul v-for="(item,k) in datas" :key="k" :id="item.openid">
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
        <el-button v-show="!start1" type="warning" round @click="toggle">开始抽奖</el-button>
        <el-button v-show="start2" type="warning" round @click="reset">洗牌</el-button>
        <div v-show="start1" class="countd">
          <countDown 
          ref="countDown"
          :fire="fire"
          time="10"
          width= "250"
          height= "250"
          :tiping="tiping"
          :tipend="tipend"
          @onStatusChange="onStatusChange"
          @onEnd="onEnd"/>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import countDown from 'vue-canvas-countdown'
export default {
  name: 'Lottery',
  components: {
    countDown
  },
  props:{
    reward:{
      type:Number,
      default:-1
    }
  },
  data () {
    return {
        mask:false,
        start1: false,
        start2: false,
        winList:[],
        datas:[],
        fire: 10,
        tiping: {
          text: '正在抽奖',
          color: 'gold'
        },
        tipend: {
          text: '恭喜',
          color: 'gold'
        }
    }
  },
 watch: {
   reward(){
     //console.log(newV)
   }
  },
  computed: {

  },
  created() {
    
  },
   mounted() {
     this.getDatas()
     window.addEventListener('resize', this.reportWindowSize);
    
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reportWindowSize);
  },
    methods: {
      onStatusChange (payload) {
      console.log('倒计时状态改变：', payload)
    },
    onEnd () {
      console.log('倒计时结束的回调函数')
    },
      getDatas(reset){
        this.mask = true
        const that = this
        axios.get('/api/luckyList')
        .then(function (response) {
          that.winList = response.data.data
        })
        .catch(function (error) {
          console.log(error);
        })
        axios.get('/api/userList')
        .then(function (response) {
          response.data.data.forEach((v)=>{
            v.win = '无'
          })
          that.datas = response.data.data
          console.log(that.datas)
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
            })
            setTimeout(()=>{
            window.TagCanvas.SetSpeed('rootcanvas', that.speed());
            that.start1 = false
          },2000)
          }else{
            that.startTagCanvas();
          }
          that.mask = false
        });  
      },
       getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
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
    },
    saveWiner(openid,type){
      axios.get('/api/win',{
        params:{
          openid: openid,
          prizeType: type === '一等奖' ? 'prize1' : type === '二等奖' ? 'prize2' : 'prize3'
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    toggle() {
      let reward = JSON.parse(localStorage.getItem("rewardData"))
      if(this.reward < 0){
        return
      }
      if(reward[this.reward].num === 0){
        return
      }
      this.start1 = true
      this.$refs.countDown.startCd()
      this.$emit('openMusic',true)
      window.TagCanvas.SetSpeed('rootcanvas', [2, 2]);
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
        let a = this.getRandomInt(0,this.datas.length)
        console.log(a)
        this.datas[a].win = reward[this.reward].level
        this.saveWiner(this.datas[a].openid,reward[this.reward].level)
        const that = this
        setTimeout(()=>{
            window.TagCanvas.TagToFront('rootcanvas', { index : a  })
            window.TagCanvas.Reload('rootcanvas')
            that.$emit('openMusic',false)
            reward[this.reward].num -=1
            localStorage.setItem("rewardData",JSON.stringify(reward))
            that.$emit('changeNum')
            that.start2 = true
        },10000)
    },
    // clearData(){
    //   const that = this
    //   this.winList.forEach((v)=>{
    //     console.log(v)
    //     let index = that.datas.findIndex((a)=>{return a.openid === v.openid})
    //     console.log(index)
    //     if(index > -1){
    //       that.datas.splice(index,1)
    //     }
    //   })
    // },
    reset(){
      this.start2 = false
      this.getDatas(true)
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
</style>
