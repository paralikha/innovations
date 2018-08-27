<template>
  <div class="grid__layout">
    <v-container
      fluid
      grid-list-lg
      class="pa-3 follower-container"
      >
      <v-layout row wrap>
        <v-flex
          xs4
          :key="i"
          v-for="(item, i) in home.products">
          <v-card
            dark
            ripple
            class="transparent project-card"
            flat
            exact to="/products/elearning">
            <v-card-media
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
              >
              <v-layout
                fill-height
                justify-end
                align-end
                class="hidden-md-and-up"
                >
                <v-btn
                  small
                  dark
                  color="secondary"
                  icon
                  >
                  <v-icon small>add</v-icon>
                </v-btn>
              </v-layout>

              <v-layout
                class="hidden-sm-and-down grid__layout--text"
                >
                <v-card-text class="text-xs-center">
                  <h3
                    class="font__weight--bold"
                    v-html="trans(item.title)"
                    >
                  </h3>
                </v-card-text>
              </v-layout>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
      <div id="follower">
        <v-btn fab class="secondary elevation-5">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style>
  #follower {
    position: absolute;
    transform: rotate(90deg);
    /*transform-origin: 45px -5px;*/
  }
  .follower-container {
    width:100%;
  }
  .left {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  }
  .right {
    -moz-transform: scaleX(1);
    -o-transform: scaleX(1);
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  }
  #bee {transition: transform .1s}
</style>

<script>
import store from '@/store'

export default {
  store,

  name: 'Gridlayout',

  components: {
  },

  data () {
    return {
      home: {
        products: [
          {
            title: 'Learning Management System',
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4800893/isometric-01.jpg',
            classMedia: 'first-child',
          },
          {
            title: 'Mobile Application',
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4805755/isometric-02.jpg',
            classMedia: 'second-child',
          },
          {
            title: 'Computer-based Learning',
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4810861/isometric-03.jpg',
            classMedia: 'third-child',
          }
        ]
      }
    }
  },

  mounted () {
    this.followEase()
    // this.initMouseFollower()
  },

  methods: {
    followEase () {
      var bee = document.getElementById('follower')
      var container = document.querySelector('.follower-container')
      document.addEventListener('mousemove', getMouse)
      container.addEventListener('mouseleave', function () {
        bee.style.display = 'none'
      })
      container.addEventListener('mouseover', function (e) {
        bee.style.display = 'block'
        // let x = e.clientX
        // let y = e.clientY
        // // let elementMouseIsOver = document.elementFromPoint(x, y)
      })

      bee.style.position = 'absolute'
      var beepos = {x: 0, y: 0}

      setInterval(followMouse, 20)

      var mouse = {x: 0, y: 0} // mouse.x, mouse.y

      var dir = 'right'
      function getMouse (e) {
        mouse.x = e.pageX
        mouse.y = e.pageY - 400
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
  },
}
</script>
