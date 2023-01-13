<template>
    <div class="main">
        <div class="fff"></div>
        <div v-if="!isList">
            <div class="tip">
                <h1 style="font-size: 50px;color: red;font-weight: 400;margin:0 0 20px 0;">恭喜</h1>
                <div class="tip-div">
                    <div class="tip-div-avatar" v-for="(i,k) in nameUrlList" :key="k">
                        <el-avatar :size="90" fit="cover" :src="i.url"></el-avatar>
                        <h2 style="color: red;margin:20px 0;">{{ i.name }}</h2>
                    </div>
                </div>
                <h1 style="color: red;font-weight: 400;font-size: 60px;margin:0 0 30px 0;">获得<span style="font-style: italic;color:red;font-weight: bold;">奖品</span></h1>
                <div style="width:80%;margin-top: 50px;">
                    <div class="but" @click="submit">获得奖品</div>
                </div>
            </div>
        </div>
        <div v-if="isList">
            <div class="tip1">
                <h2 style="color: red;">特等奖</h2>
                <div v-if="prize.length > 0" class="avatar">
                    <div class="avatar-item" v-for="(i,k) in prize" :key="k + 'x'">
                        <el-avatar size="large" fit="cover" :src="i.imgurl"></el-avatar>
                        <span style="color: #ffffff;font-size: 10px;">{{i.nickname}}</span>
                    </div>
                </div>
                <div v-else style="height: 30px;">
                    <span style="color: #ffffff;font-size: 10px;"></span>
                </div>
                <h2 style="color: red;">一等奖</h2>
                <div v-if="prize1.length > 0" class="avatar">
                    <div class="avatar-item" v-for="(i,k) in prize1" :key="k + 'x'">
                        <el-avatar size="large" fit="cover" :src="i.imgurl"></el-avatar>
                        <span style="color: #ffffff;font-size: 10px;">{{i.nickname}}</span>
                    </div>
                </div>
                <div v-else style="height: 30px;">
                    <span style="color: #ffffff;font-size: 10px;"></span>
                </div>
                <h2 style="color: red;">二等奖</h2>
                <div v-if="prize2.length > 0" class="avatar">
                    <div class="avatar-item" v-for="(i,k) in prize2" :key="k + 'y'">
                        <el-avatar size="large" fit="cover" :src="i.imgurl"></el-avatar>
                        <span style="color: #ffffff;font-size: 10px;">{{i.nickname}}</span>
                    </div>
                </div>
                <div v-else style="height: 30px;">
                    <span style="color: #ffffff;font-size: 10px;"></span>
                </div>
                <h2 style="color: red;">三等奖</h2>
               <div v-if="prize3.length > 0" class="avatar">
                    <div class="avatar-item" v-for="(i,k) in prize3" :key="k + 'z'">
                        <el-avatar size="large" fit="cover" :src="i.imgurl"></el-avatar>
                        <span style="color: #ffffff;font-size: 10px;">{{i.nickname}}</span>
                    </div>
                </div>
                <div v-else style="height: 30px;">
                    <span style="color: #ffffff;font-size: 10px;"></span>
                </div>
                <div style="width:100%;position: absolute;left: 0;bottom: 15px;">
                    <div class="but2" @click="goon">关闭</div>
                </div>
            </div>
        </div>
        <div class="firework-grp firework-grp2">
            <div class="firework size05 pos1 ">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework size08 pos2 delay1">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework pos3 delay2">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework size15 pos4 ">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework size18 pos5 delay1">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework size20 pos6 delay2">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework size13 pos7">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
            <div class="firework size05 pos8">
                <div class="drops-grp">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
                <div class="drops-grp drops-grp2">
                    <span class="drop drop-1"></span>
                    <span class="drop drop-2"></span>
                    <span class="drop drop-3"></span>
                    <span class="drop drop-4"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        nameUrlList: {
            type: Array,
            default: function(){
                return []
            }
        },
        isList:{
            type: Boolean,
            default: false
        },
        winList:{
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    watch: {
        winList:{
            immediate:true,
            handler(newV){ 
                console.log(newV)
                this.prize = newV.prize
                this.prize1 = newV.prize1
                this.prize2 = newV.prize2
                this.prize3 = newV.prize3
            }
        }
    },
    data () {
        return {
            prize:[],
            prize1:[],
            prize2:[],
            prize3:[]
        }
    },
    methods:{
        submit(){
            this.$emit('submit')
        },
        goon(){
            this.$emit('goon')
        },
    }
}
</script>
<style lang="stylus" scoped>

.main{
    position: absolute
    width: 650px
    height: 650px
    background: rgba(255, 188, 0, 0.95)
    border-radius: 24px
    border: 3px solid rgba(226,186,48,0.52)
    top: -150px
    left: -100px
    z-index: 10000
    .fff{
        position: absolute
        top:-147px;
        left: -365px;
        width: 100vw
        height: 100vh
        z-index: 999
        display: flex
        justify-content: center
        align-items: center
    }
    .tip{
        width: 100%
        height: 100%
        position: absolute
        top 0px
        z-index 99999
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        .tip-div{
            display flex
            .tip-div-avatar{
                display: flex
                justify-content: center
                align-items: center
                flex-direction: column
                box-sizing border-box
                padding 0 10px
                h2{
                    text-align center
                    overflow: hidden;//隐藏文字
                    text-overflow: ellipsis;//显示...
                    white-space: nowrap; //不换行
                    max-width:100px;//超过100px就截取
                }
            }
        }
    }
    .tip1{
        width: 100%
        height: 100%
        box-sizing: border-box
        padding: 0 30px
        position: absolute
        top 0px
        z-index 99999
        h2{
            margin 10px 0
        }
        .avatar{
            width: 100%
            // height: 280px
            display: flex
            flex-wrap: wrap
            align-content: space-between
            .avatar-item{
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                box-sizing: border-box
                padding 0 10px
                span{
                    display inline-block
                    text-align center
                    overflow: hidden;//隐藏文字
                    text-overflow: ellipsis;//显示...
                    white-space: nowrap; //不换行
                    max-width:60px;//超过100px就截取

                }
            }
        }
    }
    .but2{
        user-select none
        margin: auto
        width: 80%
        height: 40px
        cursor pointer
        background-color: rgb(226, 56, 48, 0.9);
        border-radius: 20px
        text-align: center
        line-height 40px
        box-shadow: 0px 3px 5px #ffffff;
    }
    .but2:hover{
        transform: scale(1.1)
    }
    .but{
        user-select none
        float: left
        width: 100%
        height: 50px
        cursor pointer
        background-color: rgb(226, 56, 48, 0.9);
        border-radius: 20px
        text-align: center
        line-height 50px
        box-shadow: 0px 3px 5px #ffffff;
    }
    .but:hover{
        transform: scale(1.1)
    }
}
.firework-grp {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top 0px
            color: white;
        }
        .firework-grp2{
            color: red;
            z-index: 6;
        }
        .firework {
            font-size: 10px;
            display: block;
            width: 8.5em;
            height: 8.5em;
            position: absolute;
        }

        /* SIZES
        ------------------------------------*/
        .size05 {
            transform: scale(0.5);
        }
        .size08 {
            transform: scale(0.8);
        }
        .size13 {
            transform: scale(1.3);
        }
        .size15 {
            transform: scale(1.5);
        }
        .size18 {
            transform: scale(1.8);
        }
        .size20 {
            transform: scale(2);
        }

        /* POSITION
        ------------------------------------*/
        .pos1 {
            color: #FF69B4;
            left: 25%;
            top: 0%;
        }
        .pos2 {
            left: 0%;
            top: 0%;
        }
        .pos3 {
            color: #FF69B4;
            left: 50%;
            top: 5%;
        }
        .pos4 {
            left: 90%;
            top: 10%;
        }
        .pos5 {
            color: #FF69B4;
            left: 0%;
            top: 10%;
        }
        .pos6 {
            left: 10%;
            top: 0%;
        }
        .pos7 {
            color: #FF69B4;
            left: 35%;
            top: 5%;
        }
        .pos8 {
            left: 70%;
            top: 15%;
        }



        /* FIREWORK
        ------------------------------------*/
        .drops-grp {
            display: block;
            width: 8.5em;
            height: 8.5em;
            position: absolute;
        }
        .drops-grp2 {
            display: block;
            width: 8.5em;
            height: 8.5em;
            position: absolute;
            transform: rotate(45deg);
        }
        .drop {
            display: block;
            width: 1em;
            height: 2em;
            overflow: hidden;
            position: absolute;
            opacity: 0;
        }
        .drop:before {
            content: "";
            display: block;
            width: 1em;
            height: 1em;
            background: currentColor;
            border-radius: 50%;
        }
        .drop:after {
            content: "";
            display: block;
            position: relative;
            top: -0.4em;
            width: 0;
            height: 0;
            border-top: 1.4em solid currentColor;
            border-left: 0.5em solid transparent;
            border-right: 0.5em solid transparent;
        }
        .drop-1 {
            left:3.75em;
            top: 0;
            animation: drop1anim 1s ease-in-out infinite;
        }
        .drop-2 {
            top: 3.25em;
            right: 0;
            animation: drop2anim 1s ease-in-out infinite;
        }
        .drop-3 {
            left:3.75em;
            bottom: 0;
            animation: drop3anim 1s ease-in-out infinite;
        }
        .drop-4 {
            top: 3.25em;
            left: 0;
            animation: drop4anim 1s ease-in-out infinite;
        }
        .firework-2 .drop-1 {
            animation-delay: 0.5s
        }
        .firework-2 .drop-2 {
            animation-delay: 0.5s
        }
        .firework-2 .drop-3 {
            animation-delay: 0.5s
        }
        .firework-2 .drop-4 {
            animation-delay: 0.5s
        }

        /* FIREWORK DELAY
        ------------------------------------*/
        .delay1 .drop-1 {
            animation-delay: 0.25s
        }
        .delay1 .drop-2 {
            animation-delay: 0.25s
        }
        .delay1 .drop-3 {
            animation-delay: 0.25s
        }
        .delay1 .drop-4 {
            animation-delay: 0.25s
        }

        .delay2 .drop-1 {
            animation-delay: 0.75s
        }
        .delay2 .drop-2 {
            animation-delay: 0.75s
        }
        .delay2 .drop-3 {
            animation-delay: 0.75s
        }
        .delay2 .drop-4 {
            animation-delay: 0.75s
        }

        /* keyframes
        ------------------------------------*/
        @keyframes drop1anim {
            0% {
                top:3.25em;
                opacity: 0;
                transform: scale(0.3);
            }
            25% {
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                top: -0.75em;
                opacity: 0;
                transform: scale(0.3);
            }
        }
        @keyframes drop2anim {
            0% {
                right:3.75em;
                opacity: 0;
                transform: scale(0.3) rotate(90deg);
            }
            25% {
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(90deg);
            }
            100% {
                right: -0.25em;
                opacity: 0;
                transform: scale(0.3) rotate(90deg);
            }
        }
        @keyframes drop3anim {
            0% {
                bottom:3.25em;
                opacity: 0;
                transform: scale(0.3) rotate(180deg);
            }
            25% {
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                bottom: -0.75em;
                opacity: 0;
                transform: scale(0.3) rotate(180deg);
            }
        }
        @keyframes drop4anim {
            0% {
                left:3.75em;
                opacity: 0;
                transform: scale(0.3) rotate(-90deg);
            }
            25% {
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(-90deg);
            }
            100% {
                left: -0.25em;
                opacity: 0;
                transform: scale(0.3) rotate(-90deg);
            }
        }
</style>