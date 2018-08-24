<template>
  <section>
    <!-- toolbar -->
    <div class="scrolldown__wrapper">
      <v-toolbar
        id="toolbarMenu"
        class="pa-4 transparent"
        dark
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
    </div>
    <!-- toolbar -->

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="transparent">
            <v-card-text class="px-0 py-4">
              <h1>{{ trans('What\'s Brewing') }}</h1>
              <p>{{ trans('Read some musings from our geniuses while caffeine is still kicking through their veins.') }}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex md3 xs12 order-md1 order-sm2 order-xs2>
          <list :items="archives"></list>
          <list :items="categories"></list>
        </v-flex>

        <v-flex md9 xs12 order-md2 order-sm1 order-xs1>
          <data-iterator class="mt-2" :items="blogs"></data-iterator>
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

  name: 'AllBlog',

  data () {
    return {
      blog: {
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
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg'
          },
          {
            id: '2',
            title: 'An Economy of Desire',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/3884768/conversion_dribbble.png',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'John Dionisio',
            avatar: '//cdn.dribbble.com/users/759083/screenshots/4891533/dribbble.gif'
          },
          {
            id: '3',
            title: 'Javascript Fundamentals',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/3884774/engagement_dribbble.png',
            category: 'Mobile Application',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'Sandy Duaso',
            avatar: '//cdn.dribbble.com/users/2009763/screenshots/4304250/joel_signature.gif'
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
      archives: {
        subheaderClass: 'secondary--text grey lighten-4',
        link: 'archives',
        headerTitle: 'Archives',
        items: [
          {
            title: 'November 2018'
          },
          {
            title: 'October 2018'
          },
          {
            title: 'September 2018'
          }
        ]
      },
      categories: {
        subheaderClass: 'secondary--text grey lighten-4',
        link: 'categories',
        headerTitle: 'Categories',
        items: [
          {
            title: 'E-Learning'
          },
          {
            title: 'Mobile Application'
          },
          {
            title: 'Web Design and Animation'
          }
        ]
      }
    }
  }
}

var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('toolbarMenu').style.top = '0'
  } else {
    document.getElementById('toolbarMenu').style.top = '-112px'
  }
  prevScrollpos = currentScrollPos
}
</script>
