<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <particles>
        <!-- toolbar -->
        <home-toolbar></home-toolbar>
        <!-- toolbar -->

        <!-- banner -->
        <v-container grid-list-lg>
          <v-layout row wrap>
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
                    <v-btn color="secondary" v-html="item.bannerButton"></v-btn>
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

    <!-- content -->
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex lg10 md10 xs12>
          <div class="py-5">
            <v-layout row wrap>
              <v-flex sm3 xs12>
                <h1
                  class="primary--text"
                  v-html="trans('We design educational courses as interactive experiences')">
                </h1>
              </v-flex>
              <v-flex sm4 offset-sm1 xs12>
                <v-card flat class="py-3">
                  <e-learning-one-icon class="mb-3" width="50" height="50"></e-learning-one-icon>
                  <h1 class="title mb-3" v-html="trans('Captivating storylines')"></h1>
                  <p>{{ trans('Our coursewares are paired with intriguing scenarios relatable to a diverse audience.') }}</p>
                </v-card>
              </v-flex>
              <v-flex sm4 xs12>
                <v-card flat class="py-3">
                  <e-learning-three-icon class="mb-3" width="50" height="50"></e-learning-three-icon>
                  <h1 class="title mb-3" v-html="trans('Wide scope of curriculum')"></h1>
                  <p>{{ trans('Choose from a variety of relevant topics formed by SSA Academy’s league of trainers and subject matter experts.') }}</p>
                </v-card>
              </v-flex>
              <v-flex offset-sm4 sm4 xs12>
                <v-card flat class="py-3">
                  <e-learning-two-icon class="mb-3" width="50" height="50"></e-learning-two-icon>
                  <h1 class="title mb-3" v-html="trans('Adaptive degree of complexity')"></h1>
                  <p>{{ trans('Our courses can cater to different capacities and levels of readiness, from operational all the way to the managerial level.') }}</p>
                </v-card>
              </v-flex>
              <v-flex sm4 xs12>
                <v-card flat class="py-3">
                  <e-learning-four-icon class="mb-3" width="50" height="50"></e-learning-four-icon>
                  <h1 class="title mb-3" v-html="trans('In depth evaluations')"></h1>
                  <p>{{ trans('Validate your knowledge retention through comprehensive assessments and quizzes.') }}</p>
                </v-card>
              </v-flex>
            </v-layout>
          </div>

          <!-- video -->
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat class="text-xs-center py-5">
                <video loop width="100%" height="auto" controls>
                  <source :src="require('@/assets/videos/ELearning.mp4')" type="video/mp4">
                  {{ trans('Your browser does not support HTML5 video.') }}
                </video>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- video -->

          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat class="py-5 text-xs-center">
                <h1 class="mb-3">{{ trans('What would you like to learn today?') }}</h1>
                <v-btn color="secondary">{{ trans('View Courses') }}</v-btn>
              </v-card>
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
import ELearningBanner from '@/assets/images/ELearningBanner.png'

export default {
  store,
  name: 'ELearning',

  data () {
    return {
      bannerSubtitle: false,
      item: {
        thumbnail: ELearningBanner,
        bannerTitle: 'Let\'s Be Learning Partners',
        bannerDescription: 'As advocates of lifelong career progressions, our aim is to help anyone with the same purpose. For you who constantly seek to enhance efficiency and value, we will help fix performance gaps through relevant e-Learning programmes suited to meet the demands of today\'s economy.',
        bannerButton: 'Learn More'
      }
    }
  },
}
</script>
