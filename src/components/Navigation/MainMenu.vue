<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <template v-for="(menu, i) in menus">
      <template v-if="menu.meta.excludeInMenu"></template>
      <v-menu offset-y v-else-if="menu.meta.withSubmenu" :key="i">
        <v-btn slot="activator" flat large class="mx-1">{{ __(menu.meta.title) }} <v-icon right>keyboard_arrow_down</v-icon></v-btn>
        <v-list>
          <v-list-tile
            exact
            :key="j"
            :to="{name: submenu.name}"
            v-for="(submenu, j) in menu.children"
            >
            <v-list-tile-content>{{ submenu.meta.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn v-else flat large exact :to="{name: menu.name}" :key="i" class="mx-1">{{ __(menu.meta.title) }}</v-btn>
    </template>
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
