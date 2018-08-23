<template>
  <section>
    <!-- toolbar -->
    <v-toolbar
      id="blog"
      class="transparent pa-4 mb-4 sticky"
      dark
      flat
      >
      <logo-icon></logo-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template
          v-for="(item, i) in blog.menus"
          >
          <v-btn
            flat
            :key="i"
            v-html="trans(item)"
            >
          </v-btn>
        </template>
      </v-toolbar-items>

      <!-- mobile menu button -->
      <v-btn
        @click.stop="blog.drawer = !blog.drawer"
        icon
        dark
        color="secondary"
        class="hidden-md-and-up"
        >
        <v-icon>more_horiz</v-icon>
      </v-btn>
      <!-- mobile menu button -->
    </v-toolbar>
    <!-- toolbar -->

    <!-- mobile menus -->
    <v-navigation-drawer
      v-model="blog.drawer"
      absolute
      transition="dialog-bottom-transition"
      dark
      right
      width="3000"
      temporary
      >
      <v-toolbar
        flat
        class="transparent pa-4"
        >
        <logo-icon></logo-icon>
        <v-spacer></v-spacer>
        <v-btn
          dark
          icon
          color="secondary"
          @click.native="blog.drawer = !blog.drawer"
          >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list three-line class="transparent">
        <v-list-tile
          :key="i"
          v-for="(item, i) in blog.menus"
          href="#!"
          ripple
          >
          <v-list-tile-content>
            <v-list-tile-title>
              <strong class="title" v-html="trans(item)"></strong>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- mobile menus -->

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>{{ trans('What\'s Brewing') }}</h1>
          <p>{{ trans('Read some musings from our geniuses while caffeine is still kicking through their veins.') }}</p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex md3 xs12>
          <v-list class="transparent mb-3">
            <v-subheader class="secondary--text"><strong>{{ trans('Archive') }}</strong></v-subheader>
            <v-list-tile ripple href="blogs/show">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('October 2018') }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple href="blogs/show">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('September 2018') }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list class="transparent mb-3">
            <v-subheader class="secondary--text"><strong>{{ trans('Categories') }}</strong></v-subheader>
            <v-list-tile ripple href="blogs/show">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('E-Learning') }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple href="blogs/show">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ trans('Mobile Application') }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>

        <v-flex md9 xs12>
          <data-iterator class="mt-3" :items="blogs"></data-iterator>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,

  name: 'Blog',

  data () {
    return {
      null: null,
      blog: {
        drawer: null,
        menus: ['Our Products', 'About Us', 'Blog', 'Talk To Us'],
      },
      blogs: {
        selected: [],
        bulkDestroy: false,
        selectAll: true,
        search: '',
        cardLink: 'blogs/show',
        chip: true,
        hover: true,
        lg3: false,
        showMimetype: false,
        cardMediaHeight: '160',
        showToolbar: false,
        items: [
          {
            id: '1',
            title: 'Extreme Athleticism Is the New Midlife Crisis',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/3884727/usage_dribbble.png',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'People in middle age are flocking in record numbers to intense workouts and challenging races. What are they chasing?',
            author: 'Princess Alto',
            avatar: '//source.unsplash.com/random'
          },
          {
            id: '2',
            title: 'An Economy of Desire',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/3884768/conversion_dribbble.png',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'John Dionisio',
            avatar: '//source.unsplash.com/random'
          },
          {
            id: '3',
            title: 'Javascript Fundamentals',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/3884774/engagement_dribbble.png',
            category: 'Mobile Application',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'Sandy Duaso',
            avatar: '//source.unsplash.com/random'
          },
          {
            id: '4',
            title: 'Throw Your Stone in the Pond',
            thumbnail: '//cdn.dribbble.com/users/2559/screenshots/3145041/illushome_1x.png',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'Jane Doe',
            avatar: '//source.unsplash.com/random'
          },
        ]
      },
    }
  }
}
</script>
