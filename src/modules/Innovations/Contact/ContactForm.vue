<template>
  <div id="form-container" class="py-4">
    <v-form class="fs-form fs-form-full" autocomplete="off">
      <!-- <scrollactive
        class="scrollactive__nav sticky"
        :offset="80"
        :duration="800"
        bezier-easing-value=".5,0,.35,1"
        @itemchanged="scrollActiveChanged">
        <a href="#scroll-1" class="scrollactive-item scrollactive__nav__button"></a>
        <a href="#scroll-2" class="scrollactive-item scrollactive__nav__button"></a>
        <a href="#scroll-3" class="scrollactive-item scrollactive__nav__button"></a>
      </scrollactive> -->
      <div class="scrollactive__nav sticky">
        <a @click.prevent="scrollTo('#scroll-1')" href="#scroll-1" class="scrollactive-item scrollactive__nav__button"></a>
        <a @click.prevent="scrollTo('#scroll-2')" href="#scroll-2" class="scrollactive-item scrollactive__nav__button"></a>
        <a @click.prevent="scrollTo('#scroll-3')" href="#scroll-3" class="scrollactive-item scrollactive__nav__button"></a>
      </div>
      <div id="scroller-container" class="form-fields slider">
        <div id="scroll-1" class="page scrollactive__slide">
          <div>
            <div class="field-group">
              <v-text-field
                class="text-field--large"
                :label="trans(`What's your name?`)"
                :hint="trans(`It can be your name or your company's.`)"
                v-focus
                @keyup.enter.prevent="scrollTo('#scroll-2')"
                @keyup.tab.prevent="scrollTo('#scroll-2')"
                ></v-text-field>
            </div>
            <!-- <v-btn outline large @click="scrollTo('#scroll-2')" class="ma-0">{{ __('Next') }}</v-btn> -->
          </div>
        </div>

        <div id="scroll-2" class="page scrollactive__slide">
          <div>
            <div class="field-group">
              <v-text-field
                class="text-field--large"
                :label="trans(`How can we reach you?`)"
                :hint="trans(`Ideally an email will do, but feel free to use your business phone number as well.`)"
                @keyup.enter.prevent="scrollTo('#scroll-3')"
                @keyup.tab.prevent="scrollTo('#scroll-3')"
                ></v-text-field>
            </div>
            <!-- <v-btn outline large @click="scrollTo('#scroll-1')" class="ma-0 mr-2">{{ __('Previous') }}</v-btn>
            <v-btn outline large @click="scrollTo('#scroll-3')" class="ma-0">{{ __('Next') }}</v-btn> -->
          </div>
        </div>

        <div id="scroll-3" class="page scrollactive__slide">
          <div>
            <div class="field-group">
              <v-text-field
                class="text-field--large"
                :label="trans(`What do you have in mind?`)"
                ></v-text-field>
            </div>
            <!-- <v-btn outline large @click="scrollTo('#scroll-2')" class="ma-0 mr-2">{{ __('Previous') }}</v-btn> -->
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
import Vue from 'vue'
import VueScrollactive from 'vue-scrollactive'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)
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
    scrollTo (element) {
      // document.querySelector(element).focus()
      // document.querySelector(element + ' input').focus()
      VueScrollTo.scrollTo(element, 500, { easing: 'ease-in-out' })
    },

    scrollActiveChanged (event, currentItem, lastActiveItem) {
      // console.log('changeds')
      // let activeClass = 'scrollactive__nav__button--active'
      // lastActiveItem.classList.remove(activeClass)
      // console.log(currentItem)
      // currentItem.classList.add(activeClass)
    },

    goTo (element) {
      let el = document.querySelector(element)
      el.click()
    },
  },

  mounted () {
    //
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/theme.styl'

body {
  scroll-behavior: smooth;
}

.form-fields.slider {
  -webkit-scroll-snap-type: mandatory;
  -webkit-scroll-snap-destination: 50% 50%;
  .page:not(:first) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    color: blue;
    -webkit-scroll-snap-coordinate: 50% 50%;
  }
}

.scrollactive {
  &__nav {
    // position: fixed;
    position: absolute;
    top: 1em;
    right: 1em;
    margin-left: -4rem;
  }
  &__nav__button {
    display: block;
    width: 1em;
    height: 1em;
    background-color: rgba(0,0,0,0.4);
    border-radius: 50%;
    margin: 0.5em;

    &--active {
      background-color: $theme.primary;
    }
  }

  &__slide {
    min-height: 100vh;
  }
}

.text-field {
  &--large {
    >>> input {
      font-size: 3rem;
      max-height: 3.5rem;
    }
  }
}
</style>
