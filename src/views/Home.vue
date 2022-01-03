<template>
  <div class="home">
    <div class="head" :style="`zoom:${zoom}`">
      <!-- <img alt="bqkj" src="../assets/logo.png"> -->
      <h1>磅旗科技年会</h1>
    </div>
    <div class="tools">
      <Music :isOpen="isOpen"/>
    </div>
    <div class="main" :style="`zoom:${zoom}`">
      <Reward @openMusic="openMusic"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Music from '@/components/Music.vue'
import Reward from '@/components/Reward.vue'

export default {
  name: 'Home',
  components: {
    Music,
    Reward
  },
  data () {
    return {
      isOpen: false,
      zoom: 1,
      w: 2000
    }
  },
  mounted(){
    this.reportWindowSize()
    window.addEventListener('resize', this.reportWindowSize);
  },
  methods: {
    openMusic(v){
      this.isOpen = v
    },
    reportWindowSize(){
      this.zoom =  document.body.offsetWidth / this.w
    }
  }
}
</script>
<style lang="stylus" scoped>
.home{
  width: 100%
  height: 100vh
  background: url('../assets/bg.jpg')
  background-repeat: no-repeat
  background-size: cover
  .head{
    box-sizing: border-box
    width: 100%
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    h1{
      color: gold
      font-size: 6em
    }
  }
  .tools{
    width: 80%
    margin: auto
    display: flex
    flex-direction: row-reverse
  }
  .main{
    width: 80%
    margin: auto
  }
}
</style>
