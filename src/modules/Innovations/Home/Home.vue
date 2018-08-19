<template>
  <section>
    <div id="particles-js" class="gradient--dynamic">
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
      </v-toolbar>
      <!-- toolbar -->

      <!-- content description -->
      <!-- <div class="content text-xs-center">
        <h3 class="mb-4 title"><strong>{{ trans('Ready to move forward?') }}</strong></h3>
        <h1 class="mb-4 display-1">
          <strong>
            {{ trans('Lorem ipsum dolor cit amet') }}
          </strong>
        </h1>
        <v-card-text>
          <v-btn large color="accent">
            {{ trans('Talk Us Now') }}
          </v-btn>
        </v-card-text>
      </div> -->
      <!-- content description -->

      <!-- services -->
      <div class="grid__system">
        <v-layout row wrap>
          <v-flex md4 xs12>
            <v-card coor="cyan" height="200">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aliquam optio, odit nihil amet, facere delectus consequatur repudiandae perspiciatis ipsam consequuntur distinctio. Explicabo non nesciunt possimus qui nulla, consequuntur eveniet.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card coor="cyan" height="200">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aliquam optio, odit nihil amet, facere delectus consequatur repudiandae perspiciatis ipsam consequuntur distinctio. Explicabo non nesciunt possimus qui nulla, consequuntur eveniet.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card coor="cyan" height="200">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aliquam optio, odit nihil amet, facere delectus consequatur repudiandae perspiciatis ipsam consequuntur distinctio. Explicabo non nesciunt possimus qui nulla, consequuntur eveniet.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <!-- services -->
    </div>
  </section>
</template>

<style>
  /* reset */
  canvas {
    display: block;
    vertical-align: bottom;
  }

  /* particle.js container */
  #particles-js {
    position:absolute;
    width: 100%;
    height: 100%;
    /*background: linear-gradient(75deg, #150041 0%, #4e2762 100%) !important;*/
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .content {
    color: #ffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  .grid__system {
    position: absolute;
    bottom: 0;
  }
</style>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
import store from '@/store'

export default {
  store,
  name: 'HomePublic',

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
            'value': '#ffffff'
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
    }
  }
}
</script>
