<template>
  <v-card flat class="py-5 text-xs-center">
    <v-card-text>
      <h1 class="primary--text mb-3">{{ trans('How We Work') }}</h1>
      <p
        class="mb-3"
        v-html="trans('We go the extra mile to provide our clients with top notch creative services, by intertwining art with technology, <br/> mixing anchor points with css codes, and converting text manuals into interactive instructional designs.')"
        >
      </p>
    </v-card-text>

    <v-layout row fill-height align-center justify-center>
      <v-flex xs6>
        <step-one-icon></step-one-icon>
      </v-flex>
      <v-flex xs6>
        <v-card flat>
          <v-card-text>
            lorem ipsum dolor
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- <step-two-icon></step-two-icon>
      <step-three-icon></step-three-icon>
      <step-four-icon></step-four-icon>
      <step-five-icon></step-five-icon>
      <step-six-icon></step-six-icon>
      <step-seven-icon></step-seven-icon> -->
    </v-layout>
  </v-card>
</template>

<script>
import store from '@/store'

export default {
  store,

  name: 'HowWeWork',
}
</script>
