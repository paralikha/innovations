<template>
  <div class="grid__layout">
    <v-container
      fluid
      grid-list-lg
      class="pa-3"
      >
      <v-layout row wrap>
        <v-flex
         xs4
         :key="i"
         v-for="(item, i) in home.products">
          <v-card
            class="transparent"
            flat
            href="https://www.google.com">
            <v-card-media
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
              >
              <v-layout
                fill-height
                justify-end
                align-end
                class="hidden-md-and-up"
                >
                <v-btn
                  small
                  dark
                  color="secondary"
                  icon
                  >
                  <v-icon small>add</v-icon>
                </v-btn>
              </v-layout>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .left {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  }
  .right {
    -moz-transform: scaleX(1);
    -o-transform: scaleX(1);
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  }
  #bee {transition: transform .1s}
</style>

<script>
import store from '@/store'

export default {
  store,

  name: 'Gridlayout',

  data () {
    return {
      home: {
        products: [
          {
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4800893/isometric-01.jpg'
          },
          {
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4805755/isometric-02.jpg'
          },
          {
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4810861/isometric-03.jpg',
          }
        ]
      }
    }
  }
}
</script>
