<template>
  <v-card>
    <v-card-title>
      404
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: '404',
  mounted () {
    window.addEventListener('load', function (event) {
      document.getElementById('loader').style.display = 'none'
    })
  },
}
</script>
