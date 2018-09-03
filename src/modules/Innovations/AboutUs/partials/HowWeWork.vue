<template>
  <v-card flat class="py-5">
    <v-card-text class="text-xs-center">
      <h1 class="primary--text mb-3">{{ trans('How We Work') }}</h1>
      <p
        class="mb-3"
        v-html="trans('We go the extra mile to provide our clients with top notch creative services, by intertwining art with technology, <br/> mixing anchor points with css codes, and converting text manuals into interactive instructional designs.')"
        >
      </p>
    </v-card-text>

    <div class="to-left hidden-md-and-down">
      <arrow-left-icon></arrow-left-icon>
    </div>

    <v-layout row wrap fill-height align-center justify-center>
      <v-flex md6 xs12>
        <v-layout>
          <v-card-actions class="my-3">
            <step-one-icon class="mr-4"></step-one-icon>
            <v-card flat>
              <h4>{{ trans('Step 1') }}</h4>
              <div>{{ trans('We brainstorm') }}</div>
            </v-card>
          </v-card-actions>
        </v-layout>

        <!-- <v-card class="ml-3" flat>
          <arrow-down-icon></arrow-down-icon>
        </v-card> -->

        <v-layout>
          <v-card-actions class="my-3">
              <step-two-icon class="mr-4"></step-two-icon>
            <v-card flat>
              <h4>{{ trans('Step 2') }}</h4>
              <div v-html="trans('Our writers write <br> the script <br> and storyboard, <br> while our designer <br> start world building')"></div>
            </v-card>
          </v-card-actions>
        </v-layout>

        <v-card class="ml-3" flat>
          <arrow-down-icon></arrow-down-icon>
        </v-card>

        <v-layout>
          <v-card-actions class="my-3">
              <step-three-icon class="mr-4"></step-three-icon>
            <v-card flat>
              <h4>{{ trans('Step 3') }}</h4>
              <div v-html="trans('Our designers start <br> to bring the storyboard <br> to their world through <br> dope animation')"></div>
            </v-card>
          </v-card-actions>
        </v-layout>

        <v-card class="ml-3" flat>
          <arrow-down-icon></arrow-down-icon>
        </v-card>

        <v-layout>
          <v-card-actions class="my-3">
              <step-four-icon class="mr-4"></step-four-icon>
            <v-card flat>
              <h4>{{ trans('Step 4') }}</h4>
              <div v-html="trans('Our developers <br> start to do some <br> mad coding magic')"></div>
            </v-card>
          </v-card-actions>
        </v-layout>

        <v-card class="ml-3" flat>
          <arrow-down-icon></arrow-down-icon>
        </v-card>

        <v-layout>
          <v-card-actions class="my-3">
              <step-five-icon class="mr-4"></step-five-icon>
            <v-card flat>
              <h4>{{ trans('Step 5') }}</h4>
              <div v-html="trans('We mix them up <br> in our patented <br> Cement Mixer 9000 tm')"></div>
            </v-card>
          </v-card-actions>
        </v-layout>

        <v-card class="ml-3" flat>
          <arrow-down-icon></arrow-down-icon>
        </v-card>

        <v-layout>
          <v-card-actions class="my-3">
              <step-six-icon class="mr-4"></step-six-icon>
            <v-card flat>
              <h4>{{ trans('Step 6') }}</h4>
              <div v-html="trans('We test it and <br> make sure it\'s <br> 101% awesome')"></div>
            </v-card>
          </v-card-actions>
        </v-layout>

        <v-card class="ml-3" flat>
          <arrow-down-icon></arrow-down-icon>
        </v-card>

        <v-layout>
          <v-card-actions class="my-3">
              <step-seven-icon class="mr-4"></step-seven-icon>
            <v-card flat>
              <h4>{{ trans('Step 7') }}</h4>
              <div v-html="trans('After making sure <br> that it\'s 101% awesome, <br> we unleash it, <br> to the world')"></div>
            </v-card>
          </v-card-actions>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'HowWeWork',

  data () {
    return {
      item: {
      }
    }
  }
}
</script>
