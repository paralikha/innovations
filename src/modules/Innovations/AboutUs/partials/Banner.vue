<template>
  <div>
    <div id="animation_container" style="background-color:rgba(51, 51, 51, 0.00); width:1920px; height:1080px">
      <canvas id="canvas" width="1920" height="1080" style="position: absolute; display: block; background-color:rgba(51, 51, 51, 0.00);"></canvas>
      <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1920px; height:1080px; position: absolute; left: 0px; top: 0px; display: block;">
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
require('./Website/cjs.js')()
require('./Website/About-Us-H.js')()
// import MeetTheTeamWeb from './Website/About-Us-H.html'
// import 'html-loader'

export default {
  store,

  name: 'Banner',

  components: {
    // thumbnail: MeetTheTeamWeb,

  },

  mounted () {
    let c = () => import('./Website/script.js')
    c.initCanvas()
  }
}
</script>
