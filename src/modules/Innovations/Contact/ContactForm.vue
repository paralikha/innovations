<template>
  <div id="form-container" class="form-wrap py-4">
    <v-form class="fs-form fs-form-full" autocomplete="off">
      <span class="steps text--disabled" v-html="currentStep"></span>
      <div class="form-fields">
        <vue-tiny-slider :arrow-keys="true" ref="contact-form" touch :nav="true" :controls="false" :controls-container="false" next-button="#next-button" axis="vertical" :mouse-drag="true" :loop="false">
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
          </div>

          <div class="tns-item section">
            <div class="field-group">
              <v-text-field
                :label="trans(`What do you have in mind?`)"
                :hint="trans(`Anything under the sun (well, not everything).`)"
                ></v-text-field>
            </div>
          </div>
        </vue-tiny-slider>
      </div>

      <div class="fs-form__actions">
        <v-btn id="prev-button" @click="goTo('prev')" large outline>{{ __('Previous') }}</v-btn>
        <v-btn id="next-button" @click="goTo('next')" large outline>{{ __('Next') }}</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'

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
      page: null,
    }
  },

  methods: {
    init () {
      let instance = this.$refs['contact-form'].slider
      instance.rebuild()
      this.steps.total = instance.getInfo().slideItems.length
    },

    goTo (element) {
      let instance = this.$refs['contact-form'].slider
      instance.goTo(element)
      let index = JSON.parse(JSON.stringify(instance.getInfo().index))
      instance.getInfo().slideItems[index].querySelector('input').focus()
      this.steps.current = index + 1
    },
  },

  mounted () {
    this.init()
  },
}
</script>

<style lang="stylus" scoped>
.fs-form {
  overflow: hidden;
  padding-top: 2em;
  &__actions {
    // position: fixed;
    width: 100%;
    // left: 0;
    // bottom: 0;
    // padding: 2rem;
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
  .section {
    // border: 1px solid red;
    // min-height: 100vh;
    min-height: 300px;
  }

  .field-group {
    // padding-top: 2em;
    max-width: 100%;
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
  // -moz-transition: scale(1.5)
  // zoom: 2.5
}
</style>
