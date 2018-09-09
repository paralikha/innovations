<template>
  <section>
    <iframe src="/frames/about/About-Us-H.html" frameborder="0"></iframe>
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
iframe {
  width: 800px;
  height: 83vh;
}
</style>
