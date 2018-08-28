<template>
  <div id="footer">
    <v-container grid-list-lg>
      <v-card flat class="transparent py-4">
        <v-layout row wrap>
          <v-flex md5 xs12>
            <v-layout fill-height align-end>
              <v-flex>
                <v-card dark flat class="transparent">
                  <h3 class="subheading mb-3 font__weight--bold">
                    {{ trans('SIGN UP TO OUR NEWS LETTER') }}
                  </h3>
                  <v-text-field
                    label="Email Address"
                    dark
                    append-icon="alternate_email"
                    box
                    clearable
                    clear-icon="cancel"
                    hide-details
                  ></v-text-field>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm3 xs3>
            <list :items="footer.links"></list>
          </v-flex>
          <v-flex sm3 xs3>
            <list :items="footer.links"></list>
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
      footer: {
        links: {
          dense: true,
          listClass: 'mb-0 transparent',
          dark: true,
          headerTitle: 'Links',
          subheaderClass: 'secondary--text',
          items: [
            {
              title: 'About Us'
            },
            {
              title: 'Our Products'
            },
            // {
            //   title: 'Blog'
            // },
            // {
            //   title: 'Talk To Us'
            // }
          ]
        },
      }
    }
  },

  mounted () {
    this.dataset = Object.assign({}, this.footer, this.items)
  },
}
</script>
