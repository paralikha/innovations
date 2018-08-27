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
      <grid-layout></grid-layout>
      <!-- products -->
    </particles>
  </section>
</template>

<script>
import store from '@/store'
import LogoIcon from '@/components/Icons/LogoIcon'
import GridLayout from './partials/GridLayout'
// import FollowMouseButton from './partials/FollowMouseButton'

export default {
  store,

  name: 'Home',

  components: {
    LogoIcon,
    GridLayout,
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
