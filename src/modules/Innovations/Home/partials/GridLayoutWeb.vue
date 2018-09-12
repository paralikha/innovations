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
                  <p class="mb-2 body-2">
                    <strong v-html="trans(item.category)"></strong>
                  </p>
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
import Rippl3s from '@/assets/images/Rippl3sBannerWithBG.png'
import eLearning from '@/assets/images/eLearningBannerWithBG.png'
import MobileApp from '@/assets/images/MobileAppBannerWithBG.png'

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
            title: 'Immersive and interactive courses for learners around the world',
            category: 'e-Learning',
            thumbnail: eLearning,
            classMedia: 'second-child',
            link: '/products/e-learning',
          },
          {
            title: 'Customisable platform for collaborative learning anytime, anywhere',
            category: 'Rippl3s',
            thumbnail: Rippl3s,
            classMedia: 'first-child',
            link: '/products/rippl3s',
          },
          {
            title: 'Learning and training made engaging and fun',
            category: 'Mobile Apps',
            thumbnail: MobileApp,
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
