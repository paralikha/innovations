<template>
  <div id="form-container" class="form-wrap py-4">
    <v-form class="fs-form fs-form-full" autocomplete="off">
      <span class="steps text--disabled" v-html="currentStep"></span>
      <div class="form-fields slider">
        <vue-tiny-slider
          :controls="false"
          :controls-container="false"
          :loop="false"
          mouse-drag
          :nav="false"
          auto-height
          nav-container="#nav-container"
          arrow-keys
          axis="vertical"
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
            <!-- <div class="field-group">
              <v-text-field
                :label="trans(`How can we reach you?`)"
                :hint="trans(`Ideally an email will do, but feel free to use your business phone number as well.`)"
                @keydown.enter.prevent="goTo('next')"
                @keydown.tab.prevent="goTo('next')"
                ></v-text-field>
            </div> -->
            <v-btn outline large @click="goTo('next')" class="ma-0">{{ __('Next') }}</v-btn>
          </div>

          <div class="tns-item section">
            <!-- <div class="field-group">
              <v-text-field
                :label="trans(`What do you have in mind?`)"
                :hint="trans(`Anything under the sun (well, not everything).`)"
                ></v-text-field>
            </div> -->
            <v-btn color="primary" large @click="goTo('next')" class="ma-0">{{ __('Submit') }}</v-btn>
          </div>
        </vue-tiny-slider>
      </div>
      <!-- <div class="fs-form__actions mt-4">
        <v-btn id="prev-button" @click="goTo('prev')" large outline>{{ __('Previous') }}</v-btn>
        <v-btn id="next-button" @click="goTo('next')" large outline>{{ __('Submit') }}</v-btn>
      </div> -->
    </v-form>
    <div class="nav-wrap">
      <nav id="nav-container" class="nav-container">
        <v-btn v-for="i in steps.total" :key="i" icon @click="goTo(i-1)">{{ i }}</v-btn>
      </nav>
    </div>
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
      this.instance.goTo(element)
      let index = JSON.parse(JSON.stringify(this.instance.getInfo().index))
      this.instance.getInfo().slideItems[index].querySelector('input').focus()
      this.steps.current = index + 1
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
    // min-height: 100vh;
    min-height: 500px;
    height: 500px;
  }

  .field-group {
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
