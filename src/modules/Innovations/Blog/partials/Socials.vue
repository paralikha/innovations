<template>
  <div>
    <v-btn icon>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bookmark-outline</v-icon>
    </v-btn>
    <v-menu offset-y>
      <v-btn icon slot="activator">
        <v-icon>more_horiz</v-icon>
      </v-btn>
      <v-list desnse>
        <v-list-tile @click="item.link">
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('Report Story') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'Socials',

  data () {
    return {
      item: {
        link: false,
      }
    }
  }
}
</script>
