<template>
  <div>
    <particles class="home-gradient">
      <!-- toolbar -->
      <home-toolbar></home-toolbar>
      <!-- <v-toolbar dark flat class="pa-4 transparent">
        <v-spacer></v-spacer>
        <v-toolbar-items>
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
          <v-btn large flat href="/about-us">About Us</v-btn>
          <v-btn large flat href="/blogs">Blog</v-btn>
        </v-toolbar-items>
      </v-toolbar> -->
      <!-- toolbar -->

      <!-- page title -->
      <div class="content text-xs-center">
        <v-container grid-list-lg>
          <p class="title font__weight--bold">
            {{ trans('Ready to move forward?') }}
          </p>
          <h1 v-html="trans('Explore our accessible and engaging innovations <br/> for learning and living.')">
          </h1>
        </v-container>
      </div>
      <!-- page title -->

      <!-- products -->
      <div class="hidden-sm-and-down">
        <grid-layout-web></grid-layout-web>
      </div>
      <div class="hidden-md-and-up">
        <grid-layout-app></grid-layout-app>
      </div>
      <!-- products -->
    </particles>
  </div>
</template>

<script>
import store from '@/store'
import LogoIcon from '@/components/Icons/LogoIcon'
import GridLayoutWeb from './partials/GridLayoutWeb'
import GridLayoutApp from './partials/GridLayoutApp'
// import FollowMouseButton from './partials/FollowMouseButton'

export default {
  store,

  name: 'Home',

  components: {
    LogoIcon,
    GridLayoutWeb,
    GridLayoutApp,
    // FollowMouseButton,
  },
}
</script>
