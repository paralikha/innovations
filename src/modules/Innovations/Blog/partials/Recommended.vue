<template>
  <v-card color="grey lighten-4" class="py-5">
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl7 lg8 md9 xs12>
          <v-layout row wrap>
            <template v-for="(item, i) in recommended.items">
              <v-flex sm4 xs12 :key="i">
                  <v-card hover>
                      <v-img :src="item.thumbnail" height="100"></v-img>
                    <v-tooltip bottom>
                      <v-card-text slot="activator">
                        <p
                          class="body-2 mb-2 grey--text">
                          <span class="body-1">{{ trans('More from ') }}</span>
                          <strong class="body-2" v-html="trans(item.category)"></strong>
                        </p>
                        <h3
                          slot="activator"
                          class="subheading font__weight--bold mb-3 title__text--ellipsis"
                          v-html="trans(item.title)"
                          >
                        </h3>
                      </v-card-text>
                      <span v-html="trans(item.title)"></span>
                    </v-tooltip>
                    <!-- author -->
                    <v-list>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item.author"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="item.timestamp"></v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                          <v-tooltip bottom>
                            <v-icon slot="activator">mdi-bookmark-outline</v-icon>
                            <span>{{ trans('Bookmark this story to read later') }}</span>
                          </v-tooltip>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list>
                    <!-- author -->
                  </v-card>
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Recommended',

  data () {
    return {
      recommended: {
        items: [
          {
            thumbnail: 'https://cdn.dribbble.com/users/969366/screenshots/4670006/secured-payment.jpg',
            category: 'Random',
            title: 'On 9/11, All My Plans Went Up in Smoke',
            timestamp: '2 hours ago',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg'
          },
          {
            thumbnail: 'https://cdn.dribbble.com/users/969366/screenshots/4661818/3b.jpg',
            category: 'Random',
            title: 'What Do We Really Mean by ‘Quality Journalism’?',
            timestamp: '2 hours ago',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg'
          },
          {
            thumbnail: 'https://cdn.dribbble.com/users/969366/screenshots/4634604/under-construction.jpg',
            category: 'Random',
            title: 'Why Willpower Is Powerless When It Comes to Dieting',
            timestamp: '2 hours ago',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg'
          },
        ]
      }
    }
  }
}
</script>
