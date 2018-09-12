<template>
  <section>
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl10 lg10 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat>
                <v-card-text class="px-0 py-4">
                  <h1>{{ trans('What\'s Brewing') }}</h1>
                  <p>{{ trans('Read some musings from our geniuses while caffeine is still kicking through their veins.') }}</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center align-center>
        <v-flex xl10 lg10 xs12>
          <v-layout row wrap>
            <v-flex md3 xs12 order-md1 order-sm2 order-xs2>
              <list :items="archives"></list>
              <list :items="categories"></list>
            </v-flex>

            <v-flex md9 xs12 order-md2 order-sm1 order-xs1>
              <data-iterator class="mt-2" :items="blogs"></data-iterator>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-card height="100"></v-card>

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
      blogs: {
        selected: [],
        bulkDestroy: false,
        selectAll: true,
        search: '',
        cardLink: '/blogs/single',
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
            thumbnail: '//images.unsplash.com/photo-1523958359188-26c5f0d234ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d69506281c09af1fc68886c28d35f0c0&auto=format&fit=crop&w=957&q=80',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'People in middle age are flocking in record numbers to intense workouts and challenging races. What are they chasing?',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg',
            rating: 3.0,
            aosDelay: 400,
          },
          {
            id: '2',
            title: 'An Economy of Desire',
            thumbnail: '//images.unsplash.com/photo-1521510024457-e4a37f8abd33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea42eaa8f2c00f644fff2c9d29da9bc4&auto=format&fit=crop&w=1051&q=80',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'John Dionisio',
            avatar: '//cdn.dribbble.com/users/759083/screenshots/4891533/dribbble.gif',
            rating: 3.5,
            aosDelay: 500,
          },
          {
            id: '3',
            title: 'Javascript Fundamentals',
            thumbnail: '//images.unsplash.com/photo-1519377483941-d4c7ea7ae521?ixlib=rb-0.3.5&s=56987893d5b34445b86aaec9e484efde&auto=format&fit=crop&w=844&q=80',
            category: 'Mobile Application',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'Sandy Duaso',
            avatar: '//cdn.dribbble.com/users/2009763/screenshots/4304250/joel_signature.gif',
            rating: 4.0,
            aosDelay: 1000,
          },
          {
            id: '4',
            title: 'Throw Your Stone in the Pond',
            thumbnail: '//cdn.dribbble.com/users/2559/screenshots/3145041/illushome_1x.png',
            category: 'E-Learning',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            author: 'Jane Doe',
            avatar: '//source.unsplash.com/random',
            rating: 4.5,
            aosDelay: 2000,
          },
        ]
      },
      archives: {
        dense: true,
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
        dense: true,
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
</script>
