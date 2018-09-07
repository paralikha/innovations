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
            class="transparent"
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
              >
              <v-layout
                fill-height
                justify-end
                align-end
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
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import store from '@/store'
import Ripples from '@/assets/images/RipplesBannerWithBG.png'
import ELearning from '@/assets/images/ELearningBannerWithBG.png'
import Application from '@/assets/images/MobileAppBannerWithBG.png'

export default {
  store,

  name: 'GridLayoutApp',

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
            title: 'Immersive and interactive courses for the modern student',
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
}
</script>
