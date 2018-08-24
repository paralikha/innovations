<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat large v-for="(menu, i) in menus" exact :to="menu.path" :key="i" class="mx-1">{{ __(menu.meta.title) }}</v-btn>
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
