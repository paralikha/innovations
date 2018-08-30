<template>
  <div class="scrolldown__wrapper">
    <v-toolbar
      id="toolbarMenu"
      class="pa-3 transparent"
      dark
      >
      <a href="/">
        <logo-icon></logo-icon>
      </a>

      <v-spacer></v-spacer>

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
  name: 'MainToolbar',

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

var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  let toolbarMenu = document.getElementById('toolbarMenu')
  if (toolbarMenu) {
    if (prevScrollpos > currentScrollPos) {
      toolbarMenu.style.top = '0'
    } else {
      toolbarMenu.style.top = '-112px'
    }
  }
  prevScrollpos = currentScrollPos
}
</script>
