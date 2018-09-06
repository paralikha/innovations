<template>
  <div class="scrolldown__wrapper">
    <v-toolbar
      id="toolbarMenu"
      class="pa-3 transparent"
      dark
      >
      <a href="/" class="my-3" @mouseleave="animateLogo($event, false)" @mouseover="animateLogo($event, true)">
        <logo-icon style="margin-left:25px" ref="brand"></logo-icon>
        <img id="animated-brand" class="hidden" width="100" height="100" :src="require('@/assets/images/innov-logomotion.gif')">
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
// import LogoMotion from '@/assets/images/innov-logomotion.gif'

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
    },

    animateLogo (e, hide = true) {
      if (hide) {
        // console.log(this.$refs['brand'])
        this.$refs['brand'].$el.classList.add('hidden')
        document.getElementById('animated-brand').classList.remove('hidden')
      } else {
        this.$refs['brand'].$el.classList.remove('hidden')
        document.getElementById('animated-brand').classList.add('hidden')
      }
    }
  }
}
</script>

<style>
.hidden {
  display: none;
  transition: all 0.3s ease-in;
}
</style>
