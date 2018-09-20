<template>
  <section>
    <v-card flat class="transparent hidden-sm-and-down">
      <v-responsive :aspect-ratio="16/9">
        <iframe class="web" src="/frames/about/web/About-Us-H.html" frameborder="0"></iframe>
      </v-responsive>
    </v-card>

    <v-card flat class="transparent hidden-md-and-up">
      <v-responsive :aspect-ratio="16/9">
        <!-- <iframe class="mobile" src="/frames/about/mobile/About-Us-M.html" frameborder="0"></iframe> -->
      </v-responsive>
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

<style lang="stylus" scoped>
iframe.web {
  width: 800px;
  height: 83vh;
}
iframe.mobile {
  width: 100%;
  height: 1425px;
}
#canvas {
  width: 100% !important;
}
</style>
