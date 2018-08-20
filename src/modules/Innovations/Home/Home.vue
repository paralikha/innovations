<template>
  <section>
    <div id="particles-js">
      <!-- toolbar -->
      <v-toolbar absolute dark flat class="transparent">
        <v-toolbar-title>
          <v-btn icon>
            <v-icon>home</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>{{ trans('Our Products') }}</v-btn>
          <v-btn flat>{{ trans('About Us') }}</v-btn>
          <v-btn flat>{{ trans('Blog') }}</v-btn>
          <v-btn flat>{{ trans('Talk To Us') }}</v-btn>
        </v-toolbar-items>
        <v-btn
          @click="openDialogbox"
          icon
          class="hidden-md-and-up"><v-icon>menu</v-icon>
        </v-btn>
        <dialogbox :items="dialogbox"></dialogbox>
      </v-toolbar>
      <!-- toolbar -->

      <!-- description -->
      <div class="content text-xs-center">
        <h1 class="mb-4">
          {{ trans('Innovations.') }}
        </h1>
      </div>
      <!-- description -->

      <!-- services -->
      <div class="grid__system pt-3">
        <v-layout row wrap>
          <template v-for="item in home.services">
            <v-flex xs4>
              <v-card-media
                :src="item.thumbnail"
                class="ml-3 mb-3"
                :class="item.bindClass"
                height="200px">
                <v-layout
                  fill-height justify-end align-end
                  class="hidden-md-and-up"
                  >
                  <v-btn small color="cyan" icon>
                    <v-icon small>add</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-media>
            </v-flex>
          </template>
        </v-layout>
      </div>
      <!-- services -->
    </div>
  </section>
</template>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'HomePublic',

  data () {
    return {
      home: {
        services: [
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

    openDialogbox () {
      this.$store.dispatch(
        'dialogbox/PROMPT_DIALOG',
        Object.assign(
          this.dialogbox,
          {
            model: true,
            // icon: 'add',
            // iconColor: 'success--text',
            image: '//img.stackshare.io/stack/26394/laravel_logo-circle-tp-xs.png',
            title: 'Delete Resources',
            text: 'You are about to permanently delete those resources.This action is irreversible. Do you want to proceed?',
            persistent: true,
            fullscreen: true,
            width: '100%',
            alignedCenter: true,

            actionText: 'Delete',
            actionColor: 'error',
            actionCallback () {
              this.model = false
              // store.dispatch.saveUserOrSomeShitLikeThat
              // then...
              alert('test')
            },

            discard: false,
          }
        )
      )
    },
  },

  computed: {
    ...mapGetters({
      dialogbox: 'dialogbox/dialogbox',
    })
  },
}
</script>
