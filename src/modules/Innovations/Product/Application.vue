<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <particles>
        <!-- toolbar -->
        <home-toolbar></home-toolbar>
        <!-- toolbar -->

        <!-- banner -->
        <v-container grid-list-lg>
          <v-layout row wrap justify-center align-center>
            <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
              <v-layout align-center justify-center row fill-height>
                <v-card flat class="pt-4 transparent">
                  <v-card-text>
                    <h1 class="display-1 mb-3">
                      <strong v-html="item.bannerTitle"></strong>
                    </h1>
                    <h3 v-if="bannerSubtitle" v-html="item.bannerSubtitle"></h3>
                    <p class="font__weight--bold mb-3" v-html="item.bannerDescription">
                    </p>
                    <v-btn large color="secondary" v-html="item.bannerButton"></v-btn>
                  </v-card-text>
                </v-card>
              </v-layout>
            </v-flex>

            <v-flex md6 offset-md1 xs12 order-md2 order-sm1 order-xs1>
              <v-card flat class="transparent mb-4">
                <img :src="item.thumbnail" alt="" width="100%">
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- banner -->
      </particles>
    </v-card>

    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl8 lg9 md12 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="py-5">
                <v-layout row wrap>
                  <v-flex sm3 xs12>
                    <h1
                      class="primary--text"
                      v-html="trans('Function better in a technological-driven society')">
                    </h1>
                  </v-flex>
                  <v-flex sm4 offset-sm1 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <application-one-icon class="mb-3" width="60" height="60"></application-one-icon>
                      <p class="mb-3"><strong v-html="trans('Real-life simulations')"></strong></p>
                      <p>{{ trans('Familiarise with everyday hustles, without the worries of committing real errors') }}</p>
                    </v-card>
                  </v-flex>
                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <application-three-icon class="mb-3" width="60" height="60"></application-three-icon>
                      <p class="mb-3"><strong v-html="trans('Integrated gamification')"></strong>
                      <p>{{ trans('Acquiring knowledge can still be fun') }}</p>
                    </v-card>
                  </v-flex>
                  <v-flex offset-sm4 sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <application-two-icon class="mb-3" width="60" height="60"></application-two-icon>
                      <p class="mb-3"><strong v-html="trans('Life-centric applications')"></strong></p>
                      <p>{{ trans('Equip yourself with essential life skills and knowledge for your professional growth') }}</p>
                    </v-card>
                  </v-flex>
                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <application-four-icon class="mb-3" width="60" height="60"></application-four-icon>
                      <p class="mb-3"><strong v-html="trans('Digitised lifestyle toolkits')"></strong></p>
                      <p>{{ trans('Instantly available solutions whenever you need them') }}</p>
                    </v-card>
                  </v-flex>
                </v-layout>
              </div>

              <!-- video -->
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    flat
                    class="text-xs-center"
                    >
                    <video loop width="100%" height="auto" controls>
                      <!-- <source :src="require('@/assets/videos/HirApp.mp4')" type="video/mp4"> -->
                      {{ trans('Your browser does not support HTML5 video.') }}
                    </video>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- video -->

              <v-layout row wrap>
                <v-flex xs12>
                  <v-card flat class="py-5 text-xs-center">
                    <h1 class="mb-3">{{ trans('Try the future now!') }}</h1>
                    <v-btn color="secondary">{{ trans('Play Me') }}</v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import MobileAppBanner from '@/assets/images/MobileAppBanner.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'Application',

  components: {
    AOS
  },

  created () {
    AOS.init()
  },

  data () {
    return {
      bannerSubtitle: false,
      item: {
        thumbnail: MobileAppBanner,
        bannerTitle: 'Mobile Solutions on Your Hands',
        bannerDescription: 'Forged from the depths of  our innovative minds, we offer cutting edge apps for the modern learner.',
        bannerButton: 'Discover'
      }
    }
  },
}
</script>
