<template>
  <div class="reward">
    <div class="reward-list">
        <el-carousel ref="carousel" height="350px" indicator-position="none" arrow="never" :autoplay="false">
            <el-carousel-item v-for="(i,k) in rewardData" :key="k">
                <div class="reward-card">
                    <span class="level">{{ ['特等奖','一等奖','二等奖','三等奖'][i.level] }}</span>
                    <el-image 
                        style="width: 200px; height: 200px"
                        :src="hongbao" 
                        fit="cover"
                        :preview-src-list="[hongbao]">
                    </el-image>
                    <span class="num">奖品剩余数量：
                        <b style="color:rgba(226,186,48,0.82)">{{i.num}}</b>
                    </span>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="but but3" @click="changeRewardInfo">修改奖品</div>
    </div>
    <div class="reward-taget">
        <Lottery :resetData="resetData" @openMusic="openMusic" @startEndMusic="startEndMusic" @changeNum="changeNum"/>
    </div>
    <el-dialog
    :title="title"
    :visible.sync="editCard"
    :close-on-click-modal="false"
    width="400px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="奖品等级">
                <el-select style="width:200px" v-model="form.level" popper-class="select" placeholder="请选择奖品等级" :popper-append-to-body="false">
                    <el-option label="特等奖" :value="0"></el-option>
                    <el-option label="一等奖" :value="1"></el-option>
                    <el-option label="二等奖" :value="2"></el-option>
                    <el-option label="三等奖" :value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="奖品数量">
                <el-input-number style="width:200px" v-model="form.num" controls-position="right" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button size="mini" @click="editCard = false" type="warning" round>取 消</el-button>
                <!-- <el-button v-show="title === '修改奖品'" size="mini" @click="del" type="warning" round>删 除</el-button> -->
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
        form: {
            level: 3,
            num: 0
        },
        resetData: true,
        title: '',
        editCard: false,
        activeReward:0,
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
    if(sessionStorage.getItem("rewardData") == null){
        console.log('1')
        this.rewardData=[{level: 3, num: 0}]
        sessionStorage.setItem("rewardData",JSON.stringify(this.rewardData))
    }else{
        console.log('2')
        this.rewardData= JSON.parse(sessionStorage.getItem("rewardData"))
    }
},
methods:{
    changeNum(){
        this.rewardData[0].num = this.rewardData[0].num - 1
    },
    openMusic(v){
        this.$emit('openMusic',v)
    },
    startEndMusic(v){
        this.$emit('startEndMusic',v)
    },
    save(){
        this.rewardData = [this.form]
        sessionStorage.setItem("rewardData", JSON.stringify(this.rewardData));
        this.resetData = !this.resetData
        this.editCard = false
    },
    changeRewardInfo(){
        this.title = '修改奖品'
        this.form = {
            level: this.rewardData[0].level,
            num: this.rewardData[0].num
        }
        this.editCard = true
    },
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
                font-size: 20px
                margin-top: 10px
                margin-bottom: 30px
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
/deep/ .select{
    min-width: auto !important;
    position: absolute !important;
}
/deep/ .el-input__inner{
    background: #684e2566
    color: #ffffff
}
/deep/ .el-input-number__increase, /deep/ .el-input-number__decrease{
    background: #dd9741
}

</style>

