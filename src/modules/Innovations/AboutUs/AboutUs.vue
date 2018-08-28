<template>
  <section>
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,

  name: 'AboutUs',

  data () {
    return {
    }
  }
}
</script>
