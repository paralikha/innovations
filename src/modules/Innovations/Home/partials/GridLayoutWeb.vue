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
    </v-container>
  </div>
</template>

<style lang="stylus" scoped>
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

    preventRightClick () {
      return false
    }
  },
}
</script>
