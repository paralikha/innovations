<template>
  <section>
    <v-card flat class="transparent hidden-sm-and-down">
      <div class="iframe__container">
        <iframe class="web" src="/frames/about/web/About-Us-H(Version2).html" frameborder="0"></iframe>
      </div>
    </v-card>

    <v-card flat class="transparent hidden-md-and-up">
      <div class="iframe__container">
        <iframe class="mobile" src="/frames/about/mobile/About-Us-M(Version2).html" frameborder="0"></iframe>
      </div>
    </v-card>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Banner',
}
</script>
