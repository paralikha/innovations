<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus, nobis? Excepturi omnis adipisci facere quos iste aspernatur recusandae voluptatum quas. Sit in debitis consequuntur dolore iure quibusdam, voluptatem voluptas.
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- for bottom page -->
    <v-card flat class="transparent" height="80"></v-card>
    <!-- for bottom page -->
    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,

  name: 'SingleBlog',

  data () {
    return {

    }
  }
}
</script>
