<template>
  <section id="public">
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout justify-center align-center row wrap>
        <v-flex xl7 lg8 md9 xs12>
          <v-card flat class="pt-4">
            <!-- author -->
            <v-list three-line>
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title
                    class="mini__title font-weight--bold"
                    v-html="item.author"
                    >
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ trans('Developer') }}
                  </v-list-tile-sub-title>
                  <v-list-tile-sub-title>
                    {{ trans('Published') }}
                    <span v-html="item.timestamp"></span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <!-- author -->

            <v-card class="mx-3 mb-3">
              <v-img
                :src="item.thumbnail"
                height="260"
                >
              </v-img>
            </v-card>

            <v-card-text>
              <p class="body-2 mb-2 primary--text text--lighten-2">
                <strong v-html="item.category"></strong>
              </p>
              <h1
                class="display-2 mb-3"
                >
                <strong v-html="item.title"></strong>
              </h1>
            </v-card-text>
          </v-card>

          <v-card flat class="pb-5 px-3">
            <p v-html="item.body"></p>
          </v-card>

          <!-- pre-next-article -->
          <prev-next-article></prev-next-article>
          <!-- pre-next-article -->
        </v-flex>
      </v-layout>
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
