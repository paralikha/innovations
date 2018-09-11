<template>
  <div id="form-container" class="py-4">
    <v-form class="fs-form fs-form-full" autocomplete="off">
      <span class="steps text--disabled" v-html="currentStep"></span>
      <scrollactive
        class="scrollactive__nav"
        :offset="80"
        :duration="800"
        bezier-easing-value=".5,0,.35,1"
        @itemchanged="scrollActiveChanged">
        <a href="#scroll-1" class="scrollactive-item scrollactive__nav__button"></a>
        <a href="#scroll-2" class="scrollactive-item scrollactive__nav__button"></a>
        <a href="#scroll-3" class="scrollactive-item scrollactive__nav__button"></a>
      </scrollactive>
      <div id="scroller" class="form-fields slider">
        <!-- nav-container="#nav-container" -->
        <div id="scroll-1" class="scrollactive__slide">
          <div>
            <div class="field-group">
              <v-text-field
                :label="trans(`What's your name?`)"
                :hint="trans(`It can be your name or your company's.`)"
                v-focus
                @keydown.enter.prevent="goTo('next')"
                @keydown.tab.prevent="goTo('next')"
                ></v-text-field>
            </div>
            <v-btn outline large @click="scrollTo('#scroll-2')" class="ma-0">{{ __('Next') }}</v-btn>
          </div>
        </div>

        <div id="scroll-2" class="scrollactive__slide">
          <div>
            <div class="field-group">
              <v-text-field
                :label="trans(`How can we reach you?`)"
                :hint="trans(`Ideally an email will do, but feel free to use your business phone number as well.`)"
                @keydown.enter.prevent="goTo('next')"
                @keydown.tab.prevent="goTo('next')"
                ></v-text-field>
            </div>
            <v-btn outline large @click="scrollTo('#scroll-1')" class="ma-0 mr-2">{{ __('Previous') }}</v-btn>
            <v-btn outline large @click="scrollTo('#scroll-3')" class="ma-0">{{ __('Next') }}</v-btn>
          </div>
        </div>

        <div id="scroll-3" class="scrollactive__slide">
          <div>
            <div class="field-group">
              <v-text-field
                :label="trans(`What do you have in mind?`)"
                ></v-text-field>
            </div>
            <v-btn outline large @click="scrollTo('#scroll-2')" class="ma-0 mr-2">{{ __('Previous') }}</v-btn>
            <v-btn color="primary" large class="ma-0">{{ __('Submit') }}</v-btn>
          </div>
        </div>
      </div>
      <!-- <div class="fs-form__actions mt-4">
        <v-btn id="prev-button" @click="goTo('prev')" large outline>{{ __('Previous') }}</v-btn>
        <v-btn id="next-button" @click="goTo('next')" large outline>{{ __('Submit') }}</v-btn>
      </div> -->
    </v-form>
    <!-- <div class="nav-wrap">
      <nav id="nav-container" class="nav-container">
        <v-btn v-for="i in steps.total" :key="i" icon @click="goTo(i-1)">{{ i }}</v-btn>
      </nav>
    </div> -->
  </div>
</template>

<script>
import { scrollIt } from './js/scrollIt.js'
import Vue from 'vue'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive)

export default {
  name: 'ContactForm',

  computed: {
    currentStep () {
      return 0 // `${this.steps.current}/${this.steps.total}`
    },
  },

  data () {
    return {
      steps: {
        total: 1,
        current: 1,
      },
      instance: null,
      page: null,
    }
  },

  methods: {
    scrollActiveChanged (event, currentItem, lastActiveItem) {
      console.log('changeds')
    },
    scrollTo (el) {
      let element = document.querySelector(el)
      scrollIt(element)
    },

    goTo (element) {
      let index = this.instance.getInfo().index
      this.instance.goTo(element)
      this.steps.current = element === 'next' ? index + 1 : index - 1
      this.instance.getInfo().slideItems[index].querySelector('input').focus()
    },

    onScroll (e) {
      console.log(e)
    }
  },

  mounted () {
    // snapScroll('#scroller', document)
    // this.init()
  },
}
</script>

<style lang="stylus" scoped>
body {
  scroll-behavior: smooth;
}
.scrollactive {
  &__nav {
    position: fixed;
    top: 1em;
    right: 1em;
  }
  &__nav__button {
    display: block;
    width: 1.2em;
    height: 1.2em;
    background-color: rgba(0,0,0,0.4);
    border-radius: 50%;
    margin: 0.5em;
  }

  &__slide {
    min-height: 100vh;
  }
}
</style>
