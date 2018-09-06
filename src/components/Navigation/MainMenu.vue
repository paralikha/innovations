<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <!-- <template v-for="(menu, i) in menus">
      <template v-if="menu.meta.excludeInMenu"></template>
      <v-menu offset-y v-else-if="menu.meta.withSubmenu" :key="i">
        <v-btn slot="activator" flat large class="mx-1">{{ __(menu.meta.title) }} <v-icon right>keyboard_arrow_down</v-icon></v-btn>
        <v-list light>
          <v-list-tile
            exact
            :key="j"
            :href="products/submenu.path"
            v-for="(submenu, j) in menu.children"
            >
            <v-list-tile-content>{{ submenu.meta.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn v-else flat large exact :href="menu.path" :key="i" class="mx-1">{{ __(menu.meta.title) }}</v-btn>
    </template> -->

    <v-menu offset-y>
      <v-btn large flat slot="activator">Our Products <v-icon right>keyboard_arrow_down</v-icon></v-btn>
      <v-list light>
        <v-list-tile href="/products/e-learning">
          <v-list-tile-title>E - Learning</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/products/rippl3s">
          <v-list-tile-title>Rippl3s</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/products/mobile-apps">
          <v-list-tile-title>Mobile Apps</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <!-- <router-link
      tag="v-btn"
      class="v-btn--flat v-btn--large"
      active-class="v-btn--active"
      to="/enterprise">
      Enterprise
    </router-link> -->
    <v-btn large flat href="/enterprise">Enterprise</v-btn>
    <router-link
      tag="v-btn"
      class="v-btn--flat v-btn--large"
      active-class="v-btn--active"
      to="/about-us">
      About Us
    </router-link>
    <!-- <v-btn large flat href="/blogs">Blog</v-btn> -->
  </v-toolbar-items>
</template>

<script>
import _public from '@/router/public'

export default {
  name: 'MainMenu',

  data () {
    return {
      menus: _public.children
    }
  },

  mounted () {
    //
  }
}
</script>
