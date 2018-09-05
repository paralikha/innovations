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

  mounted () {
    this.showToolbar()
  },

  methods: {
    toggle (item) {
      // this.$store.dispatch('mainmenu/toggle', item)
    },

    showToolbar () {
      var prevScrollpos = window.pageYOffset
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('toolbarMenu').style.top = '0'
        } else {
          document.getElementById('toolbarMenu').style.top = '-112px'
        }
        prevScrollpos = currentScrollPos
      }
    }
  }
}
</script>
