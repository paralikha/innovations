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
                    <h3 class="mb-3" v-if="bannerSubtitle" v-html="item.bannerSubtitle"></h3>
                    <p class="font__weight--bold mb-3" v-html="item.bannerDescription">
                    </p>
                    <v-btn
                      large
                      color="secondary"
                      href="https://www.rippl3s.com/"
                      target="__blank"
                      v-html="item.bannerButton">
                    </v-btn>
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
              <div class="py-5">
                <v-layout row wrap>
                  <v-flex sm3 xs12>
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="primary--text"
                      v-html="trans('Interactive learning anytime, anywhere')">
                    </h1>
                  </v-flex>
                  <v-flex sm4 offset-sm1 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <ripples-one-icon
                        class="mb-3"
                        width="50"
                        height="50"
                        >
                      </ripples-one-icon>
                      <p class="mb-3">
                        <strong v-html="trans('Organised course content and analytics tools')"></strong>
                      </p>
                      <p>{{ trans('Easily keep track of your progress and milestones with just a click of a button') }}</p>
                    </v-card>
                  </v-flex>
                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <ripples-three-icon
                        class="mb-3"
                        width="50"
                        height="50"
                        >
                      </ripples-three-icon>
                      <p class="mb-3">
                        <strong v-html="trans('Collaborative and social learning')"></strong>
                      </p>
                      <p>{{ trans('Share videos and links, and even chat with classmates and trainers') }}</p>
                    </v-card>
                  </v-flex>
                  <v-flex offset-sm4 sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <ripples-two-icon
                        class="mb-3"
                        width="50"
                        height="50"
                        >
                      </ripples-two-icon>
                      <p class="mb-3">
                        <strong v-html="trans('Learner-centric platform')"></strong>
                      </p>
                      <p>{{ trans('Assess understanding with interactive online exams, quizzes, and simulations') }}</p>
                    </v-card>
                  </v-flex>
                  <v-flex sm4 xs12>
                    <v-card
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      flat
                      class="py-3"
                      >
                      <ripples-four-icon
                        class="mb-3"
                        width="50"
                        height="50"
                        >
                      </ripples-four-icon>
                      <p class="mb-3">
                        <strong v-html="trans('Portable and convenient')"></strong>
                      </p>
                      <p>{{ trans('Learn at your own pace on any electronic device of your choice') }}</p>
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
                    class="text-xs-center py-5 transparent"
                    >
                    <video loop width="100%" height="auto" controls>
                      <source :src="require('@/assets/videos/Ripples.mp4')" type="video/mp4">
                      {{ trans('Your browser does not support HTML5 video.') }}
                    </video>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- video -->

              <v-layout row wrap>
                <v-flex xs12>
                  <v-card
                    flat
                    class="py-5 text-xs-center"
                    >
                    <h1 class="mb-3">{{ trans('Make every Ripple count today') }}</h1>
                    <v-btn
                      large
                      color="secondary"
                      target="__blank"
                      href="https://www.rippl3s.com/"
                      >
                      {{ trans('Let\'s Start') }}
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
import RipplesBanner from '@/assets/images/RipplesBanner.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'Ripples',

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
        thumbnail: RipplesBanner,
        bannerTitle: 'Why Rippl3s?',
        bannerSubtitle: 'It’s an engaging learning experience right at your fingertips',
        bannerDescription: 'Through our focused responsive portal where technology and curriculum work seamlessly together, we deliver convenience on different devices, thus cutting down your learning time and keeping track of your milestones without having to leave the comforts of your home.',
        bannerButton: 'Try Now'
      }
    }
  },
}
</script>
