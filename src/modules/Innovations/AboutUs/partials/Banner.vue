<template>
  <section>
    <div class="hidden-sm-and-down">
      <iframe class="web" src="/frames/about/web/About-Us-H.html" frameborder="0"></iframe>
    </div>

    <div class="hidden-md-and-up">
      <iframe class="mobile" src="/frames/about/mobile/About-Us-M.html" frameborder="0"></iframe>
    </div>
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
</style>
