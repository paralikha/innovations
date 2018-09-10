<template>
  <div>
    <particles class="home-gradient">
      <home-toolbar></home-toolbar>

      <div class="content text-xs-center hide-on-hover">
        <v-container grid-list-lg>
          <p class="title font__weight--bold">
            {{ trans('Ready to move forward?') }}
          </p>
          <h2 v-html="trans('Explore our accessible and engaging innovations <br/> for learning and living.')">
          </h2>
        </v-container>
      </div>

      <div class="hidden-sm-and-down">
        <grid-layout-web></grid-layout-web>
      </div>
      <div class="hidden-md-and-up">
        <grid-layout-app></grid-layout-app>
      </div>
    </particles>
  </div>
</template>

<script>
import store from '@/store'
import LogoIcon from '@/components/Icons/LogoIcon'
import GridLayoutWeb from './partials/GridLayoutWeb'
import GridLayoutApp from './partials/GridLayoutApp'

export default {
  store,

  name: 'Home',

  components: {
    LogoIcon,
    GridLayoutWeb,
    GridLayoutApp,
  },
}
</script>

<style lang="stylus" scoped>
.hide-on-hover {
  transition: all 0.3s ease-in-out;

  &--active {
    opacity: 0;
  }
}
</style>
