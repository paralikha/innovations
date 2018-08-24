<template>
  <div>
    <v-btn
      @click="toggle(!mainmenu.model)"
      v-model="mainmenu.model"
      icon
      dark
      color="secondary"
      class="hidden-md-and-up"
      >
      <v-icon>more_horiz</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="mainmenu.model"
      absolute
      dark
      right
      width="3000"
      temporary
      >
      <v-toolbar
        flat
        class="transparent pa-4"
        >
        <logo-icon></logo-icon>
        <v-spacer></v-spacer>
        <v-btn
          dark
          icon
          color="secondary"
          @click.native="toggle(!mainmenu.model)"
          >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <span v-html="menus"></span>
      <v-list three-line class="transparent">
        <v-list-tile
          :key="i"
          v-for="(item, i) in menus"
          href="#!"
          ripple
          >
          <v-list-tile-content>
            <v-list-tile-title>
              <strong class="title" v-html="trans(item.meta.title)"></strong>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import _public from '@/router/public'
import { mapGetters } from 'vuex'

export default {
  name: 'MobileNav',

  computed: {
    ...mapGetters({
      'mainmenu': 'mainmenu/mainmenu',
    }),
  },

  data () {
    return {
      navmodel: true,
      menus: _public.children
    }
  },

  methods: {
    toggle (model) {
      this.$store.dispatch('mainmenu/toggle', {model: model})
    },
  }
}
</script>
