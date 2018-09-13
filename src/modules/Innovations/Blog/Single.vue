<template>
  <section id="public">
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
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

            <!-- featured image -->
            <v-responsive :aspect-ratio="16/9">
              <v-img :src="item.thumbnail"></v-img>
            </v-responsive>
            <!-- featured image -->

            <v-card-text class="px-0">
              <p class="body-2 mb-2 primary--text text--lighten-2">
                <strong v-html="item.category"></strong>
              </p>
              <h1 class="display-2 mb-3">
                <strong v-html="item.title"></strong>
              </h1>
            </v-card-text>
          </v-card>

          <!-- body -->
          <v-card flat class="pb-5">
            <p v-html="item.body"></p>

            <p>
              {{ trans('Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.') }}
            </p>

            <blockquote>
              <p>{{ trans('The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.') }}</p>
            </blockquote>

            <p>
              {{ trans('When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.') }}
            </p>

            <h3 class="mb-3">{{ trans('On her way she met a copy') }}</h3>
            <ol class="mb-3">
              <li>{{ trans('Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.') }}</li>
              <li>{{ trans('A small river named Duden flows by their place and supplies it with the necessary regelialia.') }}</li>
              <li>{{ trans('And if she hasn’t been rewritten, then they are still using her.') }}</li>
            </ol>

            <p>{{ trans('On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.') }}</p>

            <ul class="mb-3">
              <li>{{ trans('Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.') }}</li>
              <li>{{ trans('A small river named Duden flows by their place and supplies it with the necessary regelialia.') }}</li>
              <li>{{ trans('And if she hasn’t been rewritten, then they are still using her.') }}</li>
            </ul>
          </v-card>
          <!-- body -->

          <!-- tags -->
          <v-card flat class="py-3">
            <v-chip label color="grey lighten-3">{{ trans('tags') }}</v-chip>
            <v-chip label color="grey lighten-3">{{ trans('tags') }}</v-chip>
            <v-chip label color="grey lighten-3">{{ trans('tags') }}</v-chip>
          </v-card>
          <!-- tags -->

          <!-- rating and socials-->
          <v-card-actions>
            <v-rating
              background-color="grey"
              class="mb-3"
              color="orange"
              v-model="item.rating"
            ></v-rating>
            <v-spacer></v-spacer>
            <socials></socials>
          </v-card-actions>
          <!-- rating and socials-->
        </v-flex>
      </v-layout>
    </v-container>

    <!-- recommended -->
    <recommended class="mt-4"></recommended>
    <!-- recommended -->

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import Recommended from './partials/Recommended'
import Socials from './partials/Socials'

export default {
  store,

  name: 'SingleBlog',

  components: {
    Recommended,
    Socials,
  },

  data () {
    return {
      report: false,
      item: {
        thumbnail: '//images.unsplash.com/photo-1530518309799-9db5fc42276b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b784735a7a03b5fee7bf5cc1150957ed&auto=format&fit=crop&w=1075&q=80',
        category: 'E-Learning',
        title: 'Extreme Athleticism Is the New Midlife Crisis',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque, non cupiditate veritatis minima vitae numquam, ducimus dicta deleniti perferendis aperiam! Debitis consequuntur amet ipsum? Eius odio dolore ab, deserunt. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        timestamp: '2 hours ago',
        author: 'Princess Alto',
        avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg',
        rating: 4.5
      }
    }
  },
}
</script>
