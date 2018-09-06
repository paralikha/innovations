<template>
  <div>
    <v-toolbar
      class="pa-4 transparent"
      dark
      flat
      >
      <a href="/" class="my-3">
        <!-- <logo-icon></logo-icon> -->
        <img width="100" height="100" :src="require('@/assets/images/innov-logomotion.gif')" alt="">
      </a>

      <v-spacer></v-spacer>

      <!-- <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          large
          v-for="(menu, i) in menus"
          exact
          :to="menu.path"
          :key="i"
          class="mx-1">
          {{ __(menu.meta.title) }}
        </v-btn>
      </v-toolbar-items> -->
      <main-menu></main-menu>
      <!-- mobile menu button -->
      <mobile-nav></mobile-nav>
      <!-- mobile menu button -->
    </v-toolbar>
  </div>

</template>

<script>
import _public from '@/router/public'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeToolbar',

  computed: {
    ...mapGetters({
      mainmenu: 'mainmenu/mainmenu',
    }),
  },

  data () {
    return {
      menus: _public.children
    }
  },

  methods: {
    toggle (item) {
      // this.$store.dispatch('mainmenu/toggle', item)
    },
  }
}
</script>
