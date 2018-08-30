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
            exact to="/products/elearning">
            <v-img
              color="secondary"
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
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
import homepage1 from '@/assets/images/RipplesBanner.png'
import homepage2 from '@/assets/images/ELearningBanner.png'
import homepage3 from '@/assets/images/MobileAppBanner.png'

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
            thumbnail: homepage1,
            classMedia: 'first-child',
          },
          {
            title: 'Immersive and interactive courses for the modern student',
            subtitle: 'e-Learning',
            thumbnail: homepage2,
            classMedia: 'second-child',
          },
          {
            title: 'Learning and training made engaging and fun',
            subtitle: 'Training App',
            thumbnail: homepage3,
            classMedia: 'third-child',
          }
        ]
      }
    }
  },
}
</script>
