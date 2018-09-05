<template>
  <div id="bee">
    <v-btn large icon class="secondary">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<style>
.left {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

.right {
  -moz-transform: scaleX(1);
  -o-transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

#bee {
  transition: transform .1s
}
</style>

<script>
import store from '@/store'

export default {
  store,

  name: 'FollowMouseButton',

  data () {
    return {
    }
  },

  mounted () {
    this.initMouseHover()
  },

  methods: {
    initMouseHover () {
      var bee = document.getElementById('bee')
      console.log(bee)
      document.addEventListener('mousemove', getMouse)

      bee.style.position = 'absolute' // css
      var beepos = { x: 0, y: 0 }

      setInterval(followMouse, 50)

      var mouse = { x: 0, y: 0 } // mouse.x, mouse.y

      var dir = 'right'
      function getMouse (e) {
        mouse.x = e.pageX
        mouse.y = e.pageY
        // Checking directional change
        if (mouse.x > beepos.x) {
          dir = 'right'
        } else {
          dir = 'left'
        }
      }

      function followMouse () {
        // 1. find distance X , distance Y
        var distX = mouse.x - beepos.x
        var distY = mouse.y - beepos.y
        // Easing motion
        // Progressive reduction of distance
        beepos.x += distX / 5
        beepos.y += distY / 2

        bee.style.left = beepos.x + 'px'
        bee.style.top = beepos.y + 'px'

        // Apply css class
        if (dir === 'right') {
          bee.setAttribute('class', 'right')
        } else {
          bee.setAttribute('class', 'left')
        }
      }
    }
  }
}


</script>
