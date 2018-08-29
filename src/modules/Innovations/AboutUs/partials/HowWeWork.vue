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
  </v-card>
</template>

<script>
import store from '@/store'

export default {
  store,

  name: 'HowWeWork',
}
</script>
