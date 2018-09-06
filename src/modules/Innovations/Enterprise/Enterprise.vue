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
                    <p class="font__weight--bold mb-3" v-html="item.bannerDescription"></p>
                  </v-card-text>
                </v-card>
              </v-layout>
            </v-flex>

            <v-flex md6 offset-md1 xs12 order-md2 order-sm1 order-xs1>
              <v-card
                flat
                class="transparent mb-4"
                >
                <img :src="item.thumbnail" alt="" width="100%">
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- banner -->
      </particles>
    </v-card>

    <!-- content -->
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl8 lg9 md12 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="py-5 text-xs-center">
                <h2>{{ trans('Pioneering digital transformation and enterprise sustainability') }}</h2>
              </div>
              <div class="py-5">
                <v-layout row wrap>
                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <div class="mb-3">
                        <img width="250" :src="require('@/assets/images/ELearningBanner.png')" alt="">
                      </div>
                      <p class="mb-3">
                        <strong v-html="trans('Large scale workforce training')"></strong>
                      </p>
                      <p>{{ trans('We provide customised workplace learning on demand and we help design platforms that would allow organisations to maximise their fullest human capital potential.') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <div class="mb-3">
                        <img width="250" :src="require('@/assets/images/RipplesBanner.svg')" alt="">
                      </div>
                      <p class="mb-3">
                        <strong v-html="trans('Effective performance tracking')"></strong>
                      </p>
                      <p>{{ trans('Through a  combined dashboard channel, access valuable metrics on employee performance, revenue growth, production, and distribution.') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <div class="mb-3">
                        <img width="250" :src="require('@/assets/images/MobileAppBanner.svg')" alt="">
                      </div>
                      <p class="mb-3">
                        <strong v-html="trans('Accessible digital solutions')"></strong>
                      </p>
                      <p>{{ trans('Connect with various networks and utilise systems for collaboration as we innovate everyday operations, from content management to billing systems.') }}</p>
                    </v-card>
                  </v-flex>
                </v-layout>
              </div>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-card
                    flat
                    class="py-5 text-xs-center"
                    >
                    <h1 class="mb-3">{{ trans('Explore the infinite possibilities today.') }}</h1>
                    <v-btn
                      large
                      color="secondary"
                      >
                      {{ trans('Get Started') }}
                    </v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- content -->

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import EnterpriseBanner from '@/assets/images/EnterpriseBanner.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'Enterprise',

  components: {
    AOS
  },

  created () {
    AOS.init()
  },

  data () {
    return {
      bannerSubtitle: true,
      item: {
        thumbnail: EnterpriseBanner,
        bannerTitle: 'Is your business ready for the future?',
        bannerSubtitle: 'It’s an engaging learning experience right at your fingertips',
        bannerDescription: 'From streamlining business processes, automating tedious tasks, and enhancing employee performance through mobile productivity, we provide accessible and custom-built support to help drive organisations towards survival in the 21st century.',
        bannerButton: 'Try Now'
      }
    }
  },
}
</script>
