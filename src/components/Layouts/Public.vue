<template>
  <v-app v-cloak toolbar footer :dark="app.dark">
    <!-- Main Content -->
    <v-content>
      <!-- Main -->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
      <!-- Main -->
    </v-content>
    <!-- Main Content -->

    <progressbar></progressbar>
  </v-app>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },
}
</script>
