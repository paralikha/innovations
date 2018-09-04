<template>
  <div id="footer">
    <v-container grid-list-lg>
      <v-card flat class="transparent py-4">
        <v-layout row wrap>
          <v-flex md5 xs12>
            <v-layout fill-height align-end>
              <v-flex>
                <h3 class="subheading mb-3 white--text font__weight--bold">
                  {{ trans('SIGN UP TO OUR NEWS LETTER') }}
                </h3>
                <v-text-field
                  label="Email Address"
                  dark
                  box
                  clearable
                  clear-icon="cancel"
                  hide-details
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-slide-x-reverse-transition
                  mode="out-in"
                  >
                  <v-icon
                    color="secondary"
                    large
                    class="ml-2"
                    :key="`icon-${isEditing}`"
                    @click="isEditing = !isEditing"
                    v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                  ></v-icon>
                </v-slide-x-reverse-transition>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex offset-xs1 xs3>
            <div class="mb-3">
              <a class="white--text t__d--n" href="">{{ trans('Home') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="">{{ trans('About') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="">{{ trans('Blogs') }}</a>
            </div>
          </v-flex>
          <v-flex xs4>
            <div class="mb-3">
              <a class="white--text t__d--n" href="">{{ trans('Rippl3s') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="">{{ trans('E - Learning') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="">{{ trans('Mobile Application') }}</a>
            </div>
          </v-flex>
        </v-layout>
        <v-divider class="grey darken-1"></v-divider>
        <v-card dark flat class="transparent">
          <v-card-actions>
            <v-btn icon small>
              <v-icon small>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-instagram</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            &#169; 2018 Innovations.
          </v-card-actions>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'FooterComponent',

  props: {
    items: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },

  data () {
    return {
      dataset: {},
      isEditing: false,
      footer: {

      }
    }
  },

  mounted () {
    this.dataset = Object.assign({}, this.footer, this.items)
  },
}
</script>
