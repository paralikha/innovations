<template>
  <section id="home">
    <div id="particles-js">
      <!-- toolbar -->
      <v-toolbar
        absolute
        class="transparent pa-4"
        dark
        flat
        >
        <logo-icon></logo-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <template
            v-for="(item, i) in home.menus"
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
          @click.stop="home.drawer = !home.drawer"
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
        v-model="home.drawer"
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
            @click.native="home.drawer = !home.drawer"
            >
            <v-icon>remove</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list three-line class="transparent">
          <v-list-tile
            :key="i"
            v-for="(item, i) in home.menus"
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

      <!-- description -->
      <div class="content text-xs-center">
        <h1 class="mb-4">
          {{ trans('Innovations.') }}
        </h1>
      </div>
      <!-- description -->

      <!-- products -->
      <!-- follow mouse button -->
      <!-- <div id="bee">
        <v-btn fab dark color="secondary">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div> -->
      <!-- follow mouse button -->
      <grid-layout></grid-layout>
      <div class="grow"></div>
      <!-- products -->
    </div>
  </section>
</template>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
import store from '@/store'
import LogoIcon from '@/components/Icons/LogoIcon'
import GridLayout from './partials/GridLayout'
import 'particles.js/particles.js'
// import './js/ButtonMouseDirection.js'

export default {
  store,
  name: 'Home',

  components: {
    LogoIcon,
    GridLayout,
  },

  data () {
    return {
      home: {
        drawer: null,
        menus: ['Our Products', 'About Us', 'Blog', 'Talk To Us'],
      }
    }
  },

  mounted () {
    this.initParticleJS()
  },

  methods: {
    initParticleJS () {
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 80,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': ['#aa73ff', '#f8c210', '#83d238', '#33b1f8']
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 3,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 400,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 8,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            },
            'mode': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    },
  },
}
</script>
