<template>
  <div>
    <v-btn
      @click="toggle(!navmodel)"
      icon
      dark
      color="secondary"
      class="hidden-md-and-up"
      >
      <v-icon>more_horiz</v-icon>
    </v-btn>
    <v-dialog
      v-model="navmodel"
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
            @click.native="toggle(!navmodel)"
            >
            <v-icon>remove</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider dark></v-divider>

        <!-- mobile-menu -->
        <!-- <main-menu></main-menu> -->
        <v-list two-line>
          <template
            v-for="(menu, i) in menus"
            >
            <template v-if="menu.meta.excludeInMenu"></template>

            <v-list-group
              :key="i"
              no-action
              ripple
              v-else-if="menu.meta.withSubmenu"
              >
              <v-list-tile
                ripple
                slot="activator"
                >
                <v-list-tile-content>
                  <v-list-tile-title>{{ __(menu.meta.title) }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile
                :key="j"
                :to="{name: submenu.name}"
                exact
                ripple
                v-for="(submenu, j) in menu.children"
                >
                <v-list-tile-content>
                  <v-list-tile-title>{{ __(submenu.meta.title) }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>

            <v-list-tile
              v-else-if="!menu.name"
              ripple
              exact
              :to="menu.path"
              :key="i"
              >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ __(menu.meta.title) }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              :key="i"
              :to="{name: menu.name}"
              exact
              ripple
              v-else
              >
              <v-list-tile-content>
                <v-list-tile-title>{{ __(menu.meta.title) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <!-- mobile-menu -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import _public from '@/router/public'

export default {
  name: 'MobileNav',

  data () {
    return {
      navmodel: false,
      menus: _public.children
    }
  },

  methods: {
    toggle (model) {
      this.navmodel = model
    },
  }
}
</script>
