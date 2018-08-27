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
    <v-dialog
      v-model="mainmenu.model"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      >
      <v-card dark>
        <v-toolbar
          flat
          class="transparent pa-4"
          >
          <!-- <logo-icon></logo-icon> -->
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
        <v-divider dark></v-divider>
        <!-- <v-list three-line>
          <v-list-tile
            :key="i"
            v-for="(item, i) in menus"
            href=""
            ripple
            >
            <v-list-tile-content>
              <v-list-tile-title>
                <strong class="title" v-html="trans(item.meta.title)"></strong>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> -->
        <main-menu></main-menu>
      </v-card>
    </v-dialog>
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
