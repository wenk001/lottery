<template>
    <div class="main">
        <a href="javascript:void(0)" @click="start" class="but">{{title}}</a>
        <a href="javascript:void(0)" @click="winerList" class="but">获奖名单</a>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            default: '点击抽奖'
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
        start(){
            this.$emit('toggle')
        },
        winerList(){
            this.$emit('winerList')
        }
    }
}
</script>
<style lang="stylus" scoped>
.main{
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    display flex
    justify-content center
    align-items center
    .but{
        user-select none
        position: relative;
        color: rgba(255,255,255,1);
        text-decoration: none;
        background-color: #E6A23C;
        font-family: 'Yanone Kaffeesatz';
        font-weight: 700;
        font-size: 3em;
        display: block;
        padding: 4px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        box-shadow: 0px 9px 0px #c37503, 0px 9px 25px rgb(243 200 77 / 70%);
        margin: 100px auto;
        width: 160px;
        text-align: center;
        -webkit-transition: all .1s ease;
        -moz-transition: all .1s ease;
        -ms-transition: all .1s ease;
        -o-transition: all .1s ease;
        transition: all .1s ease;
    }
    .but:active {
    box-shadow: 0px 3px 0px #c37503, 0px 3px 6px rgba(0,0,0,.9);
    position: relative;
    top: 6px;
    }
}
</style>