<template>
  <v-card flat class="py-5">
    <v-card-text class="py-5 text-xs-center">
      <h1 class="primary--text mb-3">{{ trans('How We Work') }}</h1>
      <p
        class="mb-3"
        v-html="trans('We go the extra mile to provide our clients with top notch creative services, by intertwining art with technology, <br/> mixing anchor points with css codes, and converting text manuals into interactive instructional designs.')"
        >
      </p>
    </v-card-text>

    <v-layout row wrap fill-height align-center justify-center>
      <v-flex xs12>
        <v-card flat class="py-5 text-xs-center">
          <h3 class="mb-3">{{ trans('Our Mission') }}</h3>
          <p>{{ trans('To provide accessible and engaging innovations that will positively impact people’s way of learning and living') }}</p>
        </v-card>

        <v-card flat class="text-xs-center py-5">
          <v-layout row wrap fill-height align-center justify-center>
            <v-flex lg6 md8 xs12>
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                >
                <img
                  @contextmenu.prevent="preventRightClick"
                  width="100%"
                  :src="require('@/assets/images/icons/missions/all.svg')"
                  alt=""
                  >
              </div>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card flat class="text-xs-center py-5">
          <h3 class="mb-3">{{ trans('Our Approach') }}</h3>

          <p><strong>Unrestricted:</strong> We ensure that our solutions can be accessed by individuals and communities globally.</p>
          <p><strong>Future-proofed:</strong> We utilise state-of-the-art technologies and up-to-date ideologies for our clients to get the most bang for their buck.</p>
          <p><strong>Human-centric:</strong>  We create learning paths where every stakeholder is at the centre of the experience, tailored specifically to suit each need.</p>
          <p><strong>Engagement value:</strong>  We want to help address life's complexities by crafting gamified experiences.</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import store from '@/store'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'HowWeWork',

  components: {
    AOS
  },

  created () {
    AOS.init()
  },

  mounted () {
    this.preventRightClick()
  },

  methods: {
    preventRightClick () {
      return false
    }
  }
}
</script>
