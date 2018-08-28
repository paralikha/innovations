<template>
  <div id="form-container" class="form-wrap py-4">
    <v-form class="fs-form fs-form-full" autocomplete="off">
      <span class="steps text--disabled" v-html="currentStep"></span>
      <div class="form-fields slider">
        <!-- nav-container="#nav-container" -->
        <vue-tiny-slider
          :controls-container="false"
          :controls="false"
          :loop="false"
          :nav="false"
          arrow-keys
          auto-height
          axis="vertical"
          mouse-drag
          next-button="#next-button"
          prev-button="#prev-button"
          ref="contact-form"
          touch
        >
          <div class="tns-item section">
            <div class="field-group">
              <v-text-field
                :label="trans(`What's your name?`)"
                :hint="trans(`It can be your name or your company's.`)"
                v-focus
                @keydown.enter.prevent="goTo('next')"
                @keydown.tab.prevent="goTo('next')"
                ></v-text-field>
            </div>
            <v-btn outline large @click="goTo('next')" class="ma-0">{{ __('Next') }}</v-btn>
          </div>

          <div class="tns-item section">
            <div class="field-group">
              <v-text-field
                :label="trans(`How can we reach you?`)"
                :hint="trans(`Ideally an email will do, but feel free to use your business phone number as well.`)"
                @keydown.enter.prevent="goTo('next')"
                @keydown.tab.prevent="goTo('next')"
                ></v-text-field>
            </div>
            <v-btn outline large @click="goTo('prev')" class="ma-0 mr-2">{{ __('Previous') }}</v-btn>
            <v-btn outline large @click="goTo('next')" class="ma-0">{{ __('Next') }}</v-btn>
          </div>

          <div class="tns-item section">
            <div class="field-group">
              <v-text-field
                :label="trans(`What do you have in mind?`)"
                ></v-text-field>
            </div>
            <v-btn outline large @click="goTo('prev')" class="ma-0 mr-2">{{ __('Previous') }}</v-btn>
            <v-btn color="primary" large @click="goTo('next')" class="ma-0">{{ __('Submit') }}</v-btn>
          </div>
        </vue-tiny-slider>
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
import VueTinySlider from 'vue-tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'

export default {
  name: 'ContactForm',

  components: {
    VueTinySlider,
  },

  computed: {
    currentStep () {
      return `${this.steps.current}/${this.steps.total}`
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
    init () {
      this.instance = this.$refs['contact-form'].slider
      this.instance.rebuild()
      this.steps.total = this.instance.getInfo().slideItems.length
    },

    goTo (element) {
      let index = this.instance.getInfo().index
      this.instance.goTo(element)
      this.steps.current = element === 'next' ? index + 1 : index - 1
      this.instance.getInfo().slideItems[index].querySelector('input').focus()
    },
  },

  mounted () {
    this.init()
  },
}
</script>

<style lang="stylus" scoped>
.nav {
  &-wrap {
    position: relative;
  }

  &-container {
    position: absolute;
    top: 0;
    right: -2rem;
  }
}
.fs-form {
  overflow: hidden;
  // padding-top: 2em;
  &__actions {
    display: block;
    width: 100%;
  }
}
.form-wrap {
  .steps {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    font-weight: bold;
  }
}
.form-fields {
  // overflow: hidden;
  .section {
    // border: 1px solid red;
    // min-height: 544px;
  }

  .field-group {
    // min-height: 500px;
    // height: 400px;
    padding: 6em 0;
    // border: 1px solid red;
    // padding-top: 2em;
    // transform: scale(2.3);
    // transform-origin: 0 0;
    >>> .v-text-field .v-label--active {
      transform: translateY(-25px) scale(0.75);
    }

    >>> label {
      height: 4em;
    }

    >>> input, >>> label {
      font-size: 2em;
      max-height: 80px
      line-height: 1;
    }
  }
}
</style>
