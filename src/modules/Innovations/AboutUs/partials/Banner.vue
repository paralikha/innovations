<template>
  <div class="text-xs-center">
    <!-- <iframe
      height="100%"
      width="100%"
      :src="item.thumbnail"
      frameborder="0"
      name="MeetTheTeam"
      >
    </iframe> -->
    <vue-friendly-iframe
      width="400px"
      height="400px"
      src="require('./partials/Website/images/About_Us_atlas_.png')"
      >
    </vue-friendly-iframe>
  </div>
</template>

<script>
import store from '@/store'
import VueFriendlyIframe from 'vue-friendly-iframe'
// import MeetTheTeamWeb from './partials/Website/About-Us-H.html'

export default {
  store,

  name: 'Banner',

  components: {
    VueFriendlyIframe,
    // thumbnail: MeetTheTeamWeb,

  }
}
</script>
