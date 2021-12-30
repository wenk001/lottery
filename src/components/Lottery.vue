<template>
  <div id="root">
    <div id="main" :class="{ mask: false }">
        <div id="tags">
            <ul v-for="(item,k) in datas" :key="k" :id="item.openid">
                <li>
                <a href="javascript:void(0);" :style="{color: item.win > 0 ? 'red' : 'yellow'}">
                    <span>{{item.nickname}}</span>
                    <img :width="item.win > 0 ? 80 : 40" :height="item.win ? 80 : 40" :src="item.headimgurl" />
                </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="tool">
        <el-button @click="toggle">开始</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lottery',
  props:{
    reward:{
      type:Number,
      default:-1
    }
  },
  data () {
    return {
        winList:[],
        datas:[
          {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as",
              nickname:"樊克胜11111",
              sex:0,
              language:"",
              city:"",
              province:"",
              country:"",
              win: -1,
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as2",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              province:"",
              country:"",
              win: -1,
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as3",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              province:"",
              win: -1,
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as4",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as5",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as6",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as7",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              province:"",
              win: -1,
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as8",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as9",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as10",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as11",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as12",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as13",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as14",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as15",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as16",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as17",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as18",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              },
              {
              openid:"o--r46qza6siOqOQEkc9IF5jS5as19",
              nickname:"樊克胜",
              sex:0,
              language:"",
              city:"",
              win: -1,
              province:"",
              country:"",
              headimgurl:"https://thirdwx.qlogo.cn/mmopen/vi_32/0Fy8TXqU2Oxb7GEblR070Ly7D92zibGiav2yzUQZKzMDRCnoKoEZdvRWNtP2zp6DibiafKKYkzU1eOCibD7cd8icVrJg/132",
              privilege:[]
              }
        ]
    }
  },
 watch: {
   reward(newV){
     console.log(newV)
   }
  },
  computed: {

  },
  created() {
    
  },
   mounted() {
    this.startTagCanvas();
    window.addEventListener('resize', this.reportWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reportWindowSize);
  },
    methods: {
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
    toggle() {
      window.TagCanvas.SetSpeed('rootcanvas', [2, 2]);
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [3, 2]);
      },1000)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [0, 4]);
      },2000)
      setTimeout(()=>{
        window.TagCanvas.SetSpeed('rootcanvas', [5, 0]);
      },3000)
        let a = this.getRandomInt(0,this.datas.length)
        this.datas[a].win = 1
        console.log(a)
        setTimeout(()=>{
            window.TagCanvas.TagToFront('rootcanvas', { index : a  });
            window.TagCanvas.Reload('rootcanvas');
        },4000)
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
</style>
