<template>
  <section>
    <v-toolbar
      flat
      color="transparent"
      >
      <v-icon v-if="page.icon">{{ page.icon }}</v-icon>
      <v-toolbar-title>{{ __(page.title) }}</v-toolbar-title>
    </v-toolbar>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius natus ea est nesciunt, sint harum quod saepe iusto, nostrum ad voluptas sunt magni iure quibusdam esse ipsa asperiores debitis incidunt.
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Create',

  computed: {
    page: function () {
      return this.$route.meta
    },
  },
}
</script>
