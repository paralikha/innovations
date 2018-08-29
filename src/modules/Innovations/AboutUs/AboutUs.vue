<template>
  <section>
    <v-card dark class="products__gradient">
      <!-- toolbar -->
      <home-toolbar></home-toolbar>
      <!-- toolbar -->

      <!-- banner -->
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="text-xs-center">
              <img height="500"
              src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/segmentation-hero@2x-1.png" alt="">
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- banner -->
    </v-card>

    <!-- content -->
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <!-- infographics -->
          <v-card flat class="py-5 text-xs-center">
            <v-card-text>
              <h1 class="primary--text mb-3">{{ trans('How We Work') }}</h1>
              <p
                class="mb-3"
                v-html="trans('We go the extra mile to provide our clients with top notch creative services, by intertwining art with technology, <br/> mixing anchor points with css codes, and converting text manuals into interactive instructional designs.')"
                >
              </p>
            </v-card-text>
          </v-card>
          <!-- infographics -->

          <!-- core values -->
          <v-card flat class="py-5 text-xs-center">
            <v-layout justify-center align-center row wrap>
              <v-flex lg9 md10 xs12>
                <v-card-text class="mb-4">
                  <h1 class="primary--text mb-3">
                    {{ trans('Our Core Values') }}
                  </h1>
                </v-card-text>
                <v-layout row wrap>
                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-one-icon class="mb-3" width="50" height="50"></core-values-one-icon>
                      <p>
                        <strong v-html="trans('Creativity')"></strong>
                      </p>
                      <p>{{ trans('"Think outside the box"') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-two-icon class="mb-3" width="50" height="50"></core-values-two-icon>
                      <p>
                        <strong v-html="trans('Teamwork')"></strong>
                      </p>
                      <p>{{ trans('"No \'I\' in Team"') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-three-icon class="mb-3" width="50" height="50"></core-values-three-icon>
                      <p>
                        <strong v-html="trans('Fun')"></strong>
                      </p>
                      <p>{{ trans('"Don\'t 4get to fun"') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-four-icon class="mb-3" width="50" height="50"></core-values-four-icon>
                      <p>
                        <strong v-html="trans('Communication')"></strong>
                      </p>
                      <p>{{ trans('"Reach out"') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-five-icon class="mb-3" width="50" height="50"></core-values-five-icon>
                      <p>
                        <strong v-html="trans('Quality')"></strong>
                      </p>
                      <p>{{ trans('"Be an 11"') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-six-icon class="mb-3" width="50" height="50"></core-values-six-icon>
                      <p>
                        <strong v-html="trans('Mutual Respect')"></strong>
                      </p>
                      <p>{{ trans('Listening > Hearing"') }}</p>
                    </v-card>
                  </v-flex>

                  <v-flex sm4 xs6>
                    <v-card flat class="py-3">
                      <core-values-seven-icon class="mb-3" width="50" height="50"></core-values-seven-icon>
                      <p>
                        <strong v-html="trans('Mutual Trust')"></strong>
                      </p>
                      <p>{{ trans('"U Got Dis"') }}</p>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
          <!-- core values -->
        </v-flex>
      </v-layout>
    </v-container>
    <!-- content -->

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,

  name: 'AboutUs',

  data () {
    return {
    }
  }
}
</script>
