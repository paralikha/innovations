<template>
  <section>
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

        <!-- fullscreen menu dialog -->
        <v-dialog
          v-model="home.menuDialog"
          fullscreen
          hide-overlay
          transition="dialog-transition"
          >
          <v-btn
            slot="activator"
            icon
            dark
            color="secondary"
            class="hidden-md-and-up"
            >
            <v-icon v-html="trans('more_horiz')"></v-icon>
          </v-btn>
          <v-card dark color="blue-grey darken-4">
            <v-toolbar
              flat
              class="transparent pa-4"
              >
              <!-- <logo-icon></logo-icon> -->
              <v-spacer></v-spacer>
              <v-btn
                dark
                icon
                color="secondary"
                @click.native="home.menuDialog = false"
                >
                <v-icon v-html="trans('remove')"></v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dark three-line class="transparent">
              <v-list-tile
                :key="i"
                v-for="(item, i) in home.menus"
                href="#!"
                ripple
                >
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong v-html="trans(item)"></strong>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-dialog>
        <!-- fullscreen menu dialog -->
      </v-toolbar>
      <!-- toolbar -->

      <!-- description -->
      <div class="content text-xs-center">
        <h1 class="mb-4">
          {{ trans('Innovations.') }}
        </h1>
      </div>
      <!-- description -->

      <!-- products -->
      <div class="grid__system pt-3">
        <v-layout row wrap>
          <v-flex
           xs4
           :key="i"
           v-for="(item, i) in home.products">
            <v-card-media
              :src="item.thumbnail"
              class="ml-3 mb-3"
              :class="item.bindClass"
              height="200px">
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
                  <v-icon small v-html="trans('add')"></v-icon>
                </v-btn>
              </v-layout>
            </v-card-media>
          </v-flex>
        </v-layout>
      </div>
      <!-- products -->
    </div>
  </section>
</template>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import LogoIcon from '@/components/Icons/LogoIcon'

export default {
  store,
  name: 'HomePublic',

  components: {
    LogoIcon,
  },

  data () {
    return {
      home: {
        menuDialog: false,
        menus: ['Our Products', 'About Us', 'Blog', 'Talk To Us'],
        products: [
          {
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4800893/isometric-01.jpg'
          },
          {
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4805755/isometric-02.jpg'
          },
          {
            thumbnail: '//cdn.dribbble.com/users/969366/screenshots/4810861/isometric-03.jpg',
            bindClass: 'mr-3'
          }
        ]
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
            'value': ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
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
