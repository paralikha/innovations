<template>
  <section id="public">
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
          <v-layout align-center justify-center row fill-height>
            <v-card flat class="pt-4">
              <v-card-text>
                <p class="body-2 mb-2 primary--text text--lighten-2">
                  <strong v-html="item.category"></strong>
                </p>
                <h1
                  class="display-2 font__weight--bold"
                  v-html="item.title"
                  >
                </h1>
              </v-card-text>
              <!-- author -->
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title
                      class="mini__title"
                      v-html="item.author">
                    </v-list-tile-title>
                    <v-list-tile-sub-title
                      v-html="item.timestamp"
                      >
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <!-- author -->
            </v-card>
          </v-layout>
        </v-flex>

        <v-flex md6 offset-md1 xs12 order-md2 order-sm1 order-xs1  >
          <v-card class="hidden-sm-and-down">
            <v-card-media
              :src="item.thumbnail"
              height="500"
              >
            </v-card-media>
          </v-card>
          <v-card class="hidden-md-and-up">
            <v-card-media
              :src="item.thumbnail"
              height="300"
              >
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="py-5">
            <p v-html="item.body"></p>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- pre-next-article -->
      <prev-next-article></prev-next-article>
      <!-- pre-next-article -->
    </v-container>
    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import PrevNextArticle from './partials/PrevNextArticle'

export default {
  store,

  name: 'SingleBlog',

  components: {
    PrevNextArticle
  },

  data () {
    return {
      item: {
        thumbnail: 'http://cdn.dribbble.com/users/904433/screenshots/3884727/usage_dribbble.png',
        category: 'E-Learning',
        title: 'Extreme Athleticism Is the New Midlife Crisis',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque, non cupiditate veritatis minima vitae numquam, ducimus dicta deleniti perferendis aperiam! Debitis consequuntur amet ipsum? Eius odio dolore ab, deserunt. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        timestamp: '2 hours ago',
        author: 'Princess Alto',
        avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg'
      }
    }
  }
}
</script>
