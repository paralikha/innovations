<template>
  <section id="home">
    <particles>
      <!-- toolbar -->
      <home-toolbar></home-toolbar>
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
  </section>
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

  data () {
    return {
    }
  },

  mounted () {
    //
  },

  methods: {
    //
  },
}
</script>
