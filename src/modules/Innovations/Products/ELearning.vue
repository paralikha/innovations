<template>
  <section id="home">
    <particles>
      <!-- toolbar -->
      <main-toolbar></main-toolbar>
      <!-- toolbar -->

      <!-- description -->
      <div>
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
              <v-layout align-center justify-center row fill-height>
                <v-card dark flat class="pt-4 transparent">
                  <v-card-text>
                    <h1 v-html="item.title"></h1>
                    <h3>It’s an engaging learning experience right at your fingertips</h3>
                    <p>Through our focused responsive portal where technology and
                    curriculum work seamlessly together, we deliver convenience on
                    different devices, thus cutting down your learning time and keeping
                    track of your milestones without having to leave the comforts of your
                    home.</p>
                  </v-card-text>
                </v-card>
              </v-layout>
            </v-flex>

            <v-flex md6 offset-md1 xs12 order-md2 order-sm1 order-xs1>
              <v-card flat class="transparent">
                <img :src="item.thumbnail" alt="" width="100%">
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <!-- description -->
    </particles>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="300">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ex rem sapiente neque magnam facere nisi omnis nam expedita consequatur, sunt excepturi  consequuntur commodi quaerat laudantium quasi odio totam dolorum.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'ELearning',

  data () {
    return {
      item: {
        thumbnail: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/people-hero2@2x.png',
        title: 'Why Rippl3s\'?',
      }
    }
  }
}
</script>
