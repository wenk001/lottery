<template>
  <div class="reward">
    <div class="reward-list">
        <el-carousel ref="carousel" height="350px" indicator-position="none" arrow="always" :autoplay="false" @change="changeReward">
            <el-carousel-item v-for="(i,k) in rewardData" :key="k">
                <div class="reward-card">
                    <span class="level">红包</span>
                    <el-image 
                        style="width: 200px; height: 200px"
                        :src="hongbao" 
                        fit="cover"
                        :preview-src-list="[hongbao]">
                    </el-image>
                    <span class="name">{{i.name}}</span>
                    <span class="num">奖品剩余数量：
                        <b style="color:rgba(226,186,48,0.82)" @mouseenter="editNum = true">{{i.num}}</b>
                    </span>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="but but1" @click="addReward">添加奖品</div>
        <div class="but but2" @click="changeRewardInfo">修改奖品</div>
        <div class="but but3" @click="randomReward">随机选择</div>
    </div>
    <div class="reward-taget">
        <Lottery :reward="activeReward" :resetData="resetData" @openMusic="openMusic" @startEndMusic="startEndMusic" @changeNum="changeNum"/>
    </div>
    <el-dialog
    :title="title"
    :visible.sync="editCard"
    width="400px">
    <el-form ref="form" :model="form" label-width="80px">
        
        <el-form-item label="奖品等级">
            <el-select style="width:200px" v-model="form.level" disabled placeholder="请选择奖品等级">
            <el-option label="红包" value="一等奖"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="奖品名称">
            <el-input style="width:200px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="奖品数量">
            <el-input-number style="width:200px" v-model="form.num" controls-position="right" :min="0" :max="10"></el-input-number>
        </el-form-item>
        <!-- <el-form-item label="奖品图片">
            <input v-if="editCard" type='file' id="uploadBannerImage" @change="readURL" />
            <br>
            <img v-if="imgUrl" style="width:180px;height:180px" :src="imgUrl">
            <div class="hiddle">
                <img v-if="imgUrl" id="bannerImg" :src="imgUrl">
            </div>    
        </el-form-item> -->
        <el-form-item>
        <el-button size="mini" @click="editCard = false" type="warning" round>取 消</el-button>
        <el-button v-show="title === '修改奖品'" size="mini" @click="del" type="warning" round>删 除</el-button>
        <el-button size="mini" @click="save" type="warning" round>{{title !== '修改奖品' ? '添 加' : '确 定'}}</el-button>
        </el-form-item>
        </el-form>
    
    </el-dialog>
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
        // imgUrl:'',
        form: {
          name: '大吉大利',
          level: '一等奖',
          num: 1
        },
        resetData: true,
        title: '',
        editCard: false,
        activeReward:-1,
        editNum: false,
     rewardData:[],
     hongbao:require('../assets/红包.jpg')
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  created () {
    
  },
  mounted () {
      if(!JSON.parse(localStorage.getItem("rewardData"))){
      localStorage.setItem("rewardData",JSON.stringify([]))
      }
      if(localStorage.getItem("rewardData")){
          this.rewardData = JSON.parse(localStorage.getItem("rewardData"))
      }
      this.activeReward = this.rewardData.length > 0 ? 0 : -1
  },
  methods:{
      changeNum(){
          this.rewardData = JSON.parse(localStorage.getItem("rewardData"))
      },
      openMusic(v){
          this.$emit('openMusic',v)
      },
      startEndMusic(v){
          this.$emit('startEndMusic',v)
      },
    //   getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0);

    //     var dataURL = canvas.toDataURL("image/png");

    //     return dataURL
    // },
      save(){
        //   let bannerImage = document.getElementById('bannerImg');
        //   let imgData = ''
        //   if(bannerImage){
        //       imgData = this.getBase64Image(bannerImage);
        //   }
          if(this.title === '添加奖品'){
            // this.rewardData.push(Object.assign(this.form,{
            //     pic:imgData
            // }))
            this.rewardData.push(Object.assign(this.form))
          }else{
              this.rewardData[this.activeReward] = Object.assign(this.form)
          }
            this.activeReward = 0
            localStorage.setItem("rewardData", JSON.stringify(this.rewardData));
            this.resetData = !this.resetData
            this.editCard = false
           
      },
      del(){
          this.rewardData.splice(this.activeReward,1)
          localStorage.setItem("rewardData", JSON.stringify(this.rewardData));
          this.editCard = false
          if(this.rewardData.length > 0){
              this.activeReward = 0
          }else{
              this.activeReward = -1
          }
          
      },
    //   readURL() {
    //       let input = document.getElementById('uploadBannerImage')
    //       const that = this
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             that.imgUrl =  e.target.result;
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // },
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    },
    changeReward(newV){
        if(newV < 0){
            return
        }
        this.activeReward = newV
    },
    randomReward(){
        let index = this.getRandomInt(0,this.rewardData.length)
        if(index === this.activeReward){
            index = index === 0 ? index + 1 : index - 1
        }
        this.$refs['carousel'].setActiveItem(index)
    },
    changeRewardInfo(){
        this.title = '修改奖品'
        this.form = {
            level: this.rewardData[this.activeReward].level,
            name: this.rewardData[this.activeReward].name,
            num: this.rewardData[this.activeReward].num
        }
        // this.imgUrl = this.rewardData[this.activeReward].pic
        this.editCard = true
    },
    addReward(){
        this.title = '添加奖品'
        this.form = {
            name: '大吉大利',
            level: '一等奖',
            num: 1
        }
        // this.imgUrl = ''
        this.editCard = true
    }
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
                color:rgba(226,186,48,0.82)
                
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
        .but{
            user-select none
            float: left
            margin-top: 20px
            width: 45%
            height: 40px
            cursor pointer
            background-color: rgba(226,186,48,.9)
            border-radius: 20px
            text-align: center
            line-height 40px
            box-shadow: 0px 3px 5px #ffffff;
        }
        .but:hover{
            transform: scale(1.1)
        }
        .but1{
            margin-right: 10%
        }
        .but3{
            width:100%
        }
    }
    .reward-taget{
        width: 67%
    }
}    
/deep/.el-carousel__arrow{
    background-color: rgba(226,186,48,0.52)
}
/deep/.el-carousel__arrow:hover{
    background-color: rgba(226,186,48,0.92)
}
/deep/ .el-dialog{
    background-color: rgba(226,186,48,.7)
    border: 1px solid rgba(226,186,48,1)
}
/deep/  .el-dialog__title, /deep/ .el-form-item__label{
    color:#ffffff
}
/deep/ .el-input__inner{
    background: #684e2566
    color: #ffffff
}
/deep/ .el-input-number__increase, /deep/ .el-input-number__decrease{
    background: #dd9741
}
.hiddle{
    position: absolute
    height: 0
    overflow: hidden
}

</style>

