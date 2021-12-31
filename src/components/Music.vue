<template>
  <div class="music">
    <audio ref="audio1" 
    @pause="onPause('audio1')"
    @play="onPlay('audio1')"
    :src="musicUrl1" controls="controls" loop></audio>
    <audio ref="audio2" 
    @pause="onPause('audio2')"
    @play="onPlay('audio2')"
    :src="musicUrl2" controls="controls" loop></audio>
    <!-- <audio ref="audio3" 
    @pause="onPause('audio3')"
    @play="onPlay('audio3')"
    :src="musicUrl3" controls="controls" loop></audio> -->

    <!-- 音频播放控件 -->
    <div class="but" @click="startPlayOrPause" :class="`${open ? 'but_rotate' : 'but'}`">
      <!-- <el-button type="text" @click="startPlayOrPause">{{audio.playing | transPlayPause}}</el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      musicUrl1: require('../assets/bg_music.mp3'),
      musicUrl2: require('../assets/lottery_music.mp3'),
      // musicUrl3: require('../assets/end_music.mp3'),
      audio: {
        audio1: false,
        audio2: false,
        // audio3: false
      }
    }
  },
  watch: {
    isOpen: function(){
        this.startPlayOrPause()
    }
  },
  computed: {
    open(){
      return this.audio.audio1 || this.audio.audio2
    }
  },
  created () {
    
  },
  mounted () {

  },
  methods:{
    // 控制音频的播放与暂停
    startPlayOrPause () {
      let a = ''
      a = Math.ceil(Math.random()*10) > 5 ? 'audio1' : 'audio2'
      if(this.open){
        this.pause('audio1')
        this.pause('audio2')
      }else{
        this.play(a)
      }
    },
    // 播放音频
    play (type) {
      this.$refs[type].play()
    },
    // 暂停音频
    pause (type) {
      this.$refs[type].pause()
    },
    // 当音频播放
    onPlay (type) {
      this.audio[type] = true
    },
    // 当音频暂停
    onPause (type) {
      this.audio[type] = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.music{
  audio{
    display: none
  }
  .but{
    display: none
    width: 90px
    height: 90px
    border-radius: 50%
    cursor: pointer
    background: url('../assets/music.png')
    background-position: 90px 0
  }
  .but_rotate{
    width: 90px
    height: 90px
    border-radius: 50%
    cursor: pointer
    background: url('../assets/music.png')
    animation: rotate 2s linear 0s infinite normal;
    background-position: 0 0
  }
  @keyframes rotate{
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }

  }
}
</style>
