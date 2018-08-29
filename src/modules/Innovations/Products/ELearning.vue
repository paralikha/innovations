<template>
  <section>
    <v-card dark color="primary">
      <particles>
        <!-- toolbar -->
        <home-toolbar></home-toolbar>
        <!-- toolbar -->

        <!-- content -->
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
              <v-layout align-center justify-center row fill-height>
                <v-card flat class="pt-4 transparent">
                  <v-card-text>
                    <h1 class="display-1 font__weight--bold mb-3" v-html="item.title"></h1>
                    <h3 class="title font__weight--bold mb-3">
                      {{ trans('It’s an engaging learning experience right at your fingertips') }}
                    </h3>
                    <p>{{ trans('Through our focused responsive portal where technology and                    curriculum work seamlessly together, we deliver convenience on different devices, thus cutting down your learning time and keeping track of your milestones without having to leave the comforts of your home.') }}</p>
                    <v-btn color="secondary">{{ trans('Try Now') }}</v-btn>
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
        <!-- content -->
      </particles>
    </v-card>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="py-5">
            <v-card-text class="text-xs-center">
              <h1 class="display-2 pb-3 font__weight--bold">
                {{ trans('The Rippl3s\' Effect') }}
              </h1>
              <h3 class="subheading">{{ trans('Interactive learning anytime, anywhere.') }}</h3>
            </v-card-text>
          </v-card>
          <!-- <v-container> -->
            <v-card flat class="py-5">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sunt, reiciendis dolores pariatur repellendus odio unde veniam quae sed repellat dolor blanditiis quis est ullam tempore possimus? Illo, tempora porro.
              </v-card-text>
            </v-card>
          <!-- </v-container> -->
        </v-flex>
      </v-layout>
    </v-container>
    <footer-component></footer-component>
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
        title: 'Why Rippl3s?',
      }
    }
  }
}
</script>
