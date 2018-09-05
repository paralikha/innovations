<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <v-list two-line>
          <v-list-tile ripple avatar @click="test">
            <v-list-tile-avatar>
              <v-icon>arrow_back</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
            <v-list-tile-sub-title>Previous</v-list-tile-sub-title>
            <v-list-tile-title>The Long and Winding Road</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs6>
        <v-list two-line>
          <v-list-tile ripple avatar @click="test">
            <v-list-tile-content>
            <v-list-tile-sub-title class="text-xs-right">Next</v-list-tile-sub-title>
            <v-list-tile-title class="text-xs-right">The Long and Winding Road</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <v-icon>arrow_forward</v-icon>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'PrevNextArticle',

  data () {
    return {
      test: false,
    }
  }
}
</script>
