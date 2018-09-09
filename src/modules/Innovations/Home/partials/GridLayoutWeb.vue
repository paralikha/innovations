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
            @mouseover.native="cardHover"
            @mouseleave.native="cardLeave"
            dark
            ripple
            class="transparent project-card"
            flat
            color="primary"
            exact
            :href="item.link">
            <v-img
              color="secondary"
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
              :class="item.classMedia"
              @contextmenu.prevent="preventRightClick"
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
      <!-- <div>
        <div id="follower">
          <v-btn fab class="secondary elevation-5">
            <v-icon>add</v-icon>
          </v-btn>
        </div>
      </div> -->

      <!-- <div id="followmouse">
        <v-btn fab class="secondary" href="https://www.google.com">
          <v-icon>add</v-icon>
        </v-btn>
      </div> -->
      <!-- mouseover -->
    </v-container>
  </div>
</template>

<style>
 /* #follower {
    position: absolute;
    transform: rotate(90deg);
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
  #bee {
    transition: transform .1s
  }*/

  #followmouse {
    transition: transform .3s;
    position: absolute;
    border-radius: 20px;
    transform: translateY(-30px) translateX(-30px);
    transform-origin: 50% 50%;
    opacity: 1;
    z-index: 999;
  }
  #followmouse.linkHover {
    transform: scale(2) translateX(-5px) translateY(-5px);
  }
</style>

<script>
import store from '@/store'
import Ripples from '@/assets/images/RipplesBannerWithBG.png'
import ELearning from '@/assets/images/ELearningBannerWithBG.png'
import Application from '@/assets/images/MobileAppBannerWithBG.png'

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
            link: '/products/rippl3s',
          },
          {
            title: 'Immersive and interactive courses for learners around the world',
            subtitle: 'e-Learning',
            thumbnail: ELearning,
            classMedia: 'second-child',
            link: '/products/e-learning',
          },
          {
            title: 'Learning and training made engaging and fun',
            subtitle: 'Mobile Apps',
            thumbnail: Application,
            classMedia: 'third-child',
            link: '/products/mobile-apps',
          }
        ]
      }
    }
  },

  mounted () {
    // this.followEase()
    // this.followMouse()
    this.preventRightClick()
  },

  methods: {
    cardHover () {
      let invisible = document.querySelector('.hide-on-hover')
      invisible.classList.add('hide-on-hover--active')
    },
    cardLeave () {
      let invisible = document.querySelector('.hide-on-hover')
      invisible.classList.remove('hide-on-hover--active')
    },
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
    },

    followMouse () {
      /* eslint-disable */
      function addClass(el, className)
      {
        if (el.classList)
        el.classList.add(className);
        else
          el.className += ' ' + className;
      }

      function removeClass(el, className)
      {
        if (el.classList)
          el.classList.remove(className);
        else
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }

      var followmouse = document.getElementById("followmouse");
      document.addEventListener("mousemove", getMouse);

      var followmousepos = {x:0, y:0};

      setInterval(followMouse, 30);

      var mouse = {x:0, y:0}; //mouse.x, mouse.y

      function getMouse(e){
        mouse.x = e.pageX;
        mouse.y = e.pageY;
      }

      function followMouse(){
        //1. find distance X , distance Y
        var distX = mouse.x - followmousepos.x;
        var distY = mouse.y - followmousepos.y;
        //Easing motion
        //Progressive reduction of distance
        followmousepos.x += distX/5;
        followmousepos.y += distY/3;

        followmouse.style.left = followmousepos.x + "px";
        followmouse.style.top = followmousepos.y + "px";
      }


      var links = document.getElementsByClassName("link");
      for(let i = 0; i < links.length; i++)
      {
        links[i].addEventListener("mouseover", addMouseLinkHover);
        links[i].addEventListener("mouseout", removeMouseLinkHover);
      }

      function addMouseLinkHover()
      {
        var followmouse = document.getElementById("followmouse");
        addClass(followmouse, "linkHover");
      }

      function removeMouseLinkHover()
      {
        var followmouse = document.getElementById("followmouse");
        removeClass(followmouse, "linkHover");
      }
    },

    preventRightClick () {
      return false
    }
  },
}
</script>
