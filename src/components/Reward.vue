<template>
  <div class="reward">
    <div class="reward-list">
        <el-carousel height="350px" indicator-position="none">
            <el-carousel-item v-for="(i,k) in rewardData" :key="k">
                <div class="reward-card">
                    <span class="level">{{i.level}}</span>
                    <el-image 
                        style="width: 200px; height: 200px"
                        :src="i.pic" 
                        fit="cover"
                        :preview-src-list="[i.pic]">
                    </el-image>
                    <span class="name">{{i.name}}</span>
                    <span class="num">奖品剩余数量：<b>{{i.num}}</b></span>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="tip">抽奖参与人数</div>
    </div>
    <div class="reward-taget">
        <Lottery/>
    </div>
  </div>
</template>

<script>
import Lottery from '../components/Lottery'
export default {
  name: 'Reward',
  components: {
      Lottery
  },
  data () {
    return {
     rewardData:[{
         level: '一等奖',
         pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         name:'switch（国行版）',
         num: 10
     },
     {
         level: '二等奖',
         pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         name:'switch（日版）',
         num: 50
     },
     {
         level: '三等奖',
         pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         name:'华为最新款',
         num: 100
     }]
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  created () {
    
  },
  mounted () {

  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.reward {
    display: flex
    flex-direction: row
    justify-content: space-between
    .reward-list,.reward-taget{
        width: 30%
        height: 520px
        box-sizing: border-box
        padding: 30px
        box-sizing: border-box
        font-size: 20px
        color: #fffeee
        background: linear-gradient(180deg,rgba(31,29,44,.8),rgba(6,4,25,.8))
        border: 1px solid rgba(226,186,48,.52)
        box-shadow: 4px 10px 16px 0 rgb(10 8 23 / 50%), 0 13px 46px 0 rgb(10 8 23 / 84%), -1px 0 9px 0 rgb(93 86 114 / 34%), -1px 0 9px 0 rgb(93 86 114 / 34%)
        border-radius: 20px
        .reward-card{
            width: 100%
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            text-align: center
            .level{
                font-size: 26px
                font-weight: bold
                margin-bottom: 30px 
                
            }
            .name{
                font-size: 18px
                margin-top: 10px
                margin-bottom: 30px
            }
            .num{
                font-size: 16px
            }
        }
        .tip{
            margin: 50px auto 0
            width: 90%
            height: 62px
            background-color: rgba(255,255,255,.1)
            border-radius: 31px
            text-align: center
            line-height 62px
        }
    }
    .reward-taget{
        width: 67%
    }
}    
</style>
