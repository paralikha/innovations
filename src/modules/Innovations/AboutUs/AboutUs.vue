<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <home-toolbar></home-toolbar>

      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <banner></banner>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <how-we-work></how-we-work>
          <core-values></core-values>
        </v-flex>
      </v-layout>
    </v-container>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import Banner from './partials/Banner'
import CoreValues from './partials/CoreValues'
import HowWeWork from './partials/HowWeWork'
// import MeetTheTeamWeb from './partials/Website/About-Us-H.html'

export default {
  store,

  name: 'AboutUs',

  components: {
    Banner,
    HowWeWork,
    CoreValues,
  },

  data () {
    return {
      item: {
        // thumbnail: MeetTheTeamWeb,
      }
    }
  }
}
</script>
