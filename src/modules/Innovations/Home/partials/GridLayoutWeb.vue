<template>
  <div class="grid__layout">
    <v-container
      fluid
      grid-list-lg
      class="pa-2 follower-container"
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
            color="primary"
            exact
            :to="item.link">
            <v-img
              color="secondary"
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
              >
              <v-layout
                class="justify-end align-end fill-height grid__layout--text"
                >
                <v-card-text class="fade__gradient--overlay">
                  <p class="mb-2 body-2" v-html="trans(item.subtitle)"></p>
                  <h3
                    class="font__weight--bold"
                    v-html="trans(item.title)"
                    >
                  </h3>
                </v-card-text>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- mouseover -->
      <div>
        <div id="follower">
          <v-btn fab class="secondary elevation-5">
            <v-icon>add</v-icon>
          </v-btn>
        </div>
      </div>
      <!-- mouseover -->
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
  }
  .right {
    -moz-transform: scaleX(1);
    -o-transform: scaleX(1);
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  #bee {transition: transform .1s}
</style>

<script>
import store from '@/store'
import Ripples from '@/assets/images/RipplesBanner.svg'
import ELearning from '@/assets/images/ELearningBanner.png'
import Application from '@/assets/images/MobileAppBanner.svg'

export default {
  store,

  name: 'GridLayoutWeb',

  components: {
  },

  data () {
    return {
      home: {
        products: [
          {
            title: 'Customisable platform for collaborative learning anytime, anywhere',
            subtitle: 'Rippl3s',
            thumbnail: Ripples,
            classMedia: 'first-child',
            link: '/products/ripples',
          },
          {
            title: 'Immersive and interactive courses for the modern student',
            subtitle: 'e-Learning',
            thumbnail: ELearning,
            classMedia: 'second-child',
            link: '/products/elearning',
          },
          {
            title: 'Learning and training made engaging and fun',
            subtitle: 'Training App',
            thumbnail: Application,
            classMedia: 'third-child',
            link: '/products/application',
          }
        ]
      }
    }
  },

  mounted () {
    this.followEase()
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
      })

      bee.style.position = 'absolute'
      var beepos = { x: 0, y: 0 }

      setInterval(followMouse, 20)

      var mouse = { x: 0, y: 0 } // mouse.x, mouse.y

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

        // Apply css to class
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
