<template>
  <section>
    <v-card dark color="primary">
      <particles>
        <!-- toolbar -->
        <home-toolbar></home-toolbar>

        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
              <v-layout align-center justify-center row fill-height>
                <h1 class="display-2 mb-3">{{ __(`Let’s grab some imaginary coffee and talk!`) }}</h1>
              </v-layout>
            </v-flex>
            <v-flex md7 xs12 order-md2 order-sm1 order-xs1>
              <v-layout align-center justify-center row fill-height>
                coffee svg here
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sm4>
              <div v-html="contacts.mainline"></div>
              <div><a class="white--text" :href="`mailto:${contacts.email}`" v-html="contacts.email"></a></div>
            </v-flex>
            <v-flex sm4>
              <div v-html="contacts.address"></div>
            </v-flex>
          </v-layout>
        </v-container>
      </particles>
    </v-card>
    <v-card tile flat>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs8>
            <contact-form></contact-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </section>
</template>

<script>
import ContactForm from './ContactForm'

export default {
  name: 'Contact',

  components: {
    ContactForm,
  },

  data () {
    return {
      contacts: {
        mainline: `+63 905 528 8590`,
        email: 'innovations@ssagroup.com',
        address: `Pearl Drive, San Antonio<br>Ortigas, Philippines`,
      }
    }
  }
}
</script>
