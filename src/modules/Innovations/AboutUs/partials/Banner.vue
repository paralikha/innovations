<template>
  <div class="text-xs-center">
    <!-- <iframe
      width="100%"
      height="300px"
      :src="item.thumbnail"
      frameborder="0"
      name="MeetTheTeamWeb"
      >
    </iframe> -->
  </div>
</template>

<script>
import store from '@/store'
// import MeetTheTeamWeb from './Website/About-Us-H.html'
// import 'html-loader'

export default {
  store,

  name: 'Banner',

  components: {
    // thumbnail: MeetTheTeamWeb,

  }
}
</script>
