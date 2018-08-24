<template>
  <div class="scrolldown__wrapper">
    <v-toolbar
      id="toolbarMenu"
      class="pa-4 transparent"
      dark
      >
      <logo-icon></logo-icon>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
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
      </v-toolbar-items>
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
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('toolbarMenu').style.top = '0'
  } else {
    document.getElementById('toolbarMenu').style.top = '-112px'
  }
  prevScrollpos = currentScrollPos
}
</script>
