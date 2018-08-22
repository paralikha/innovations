<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 600 600"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    >
    <defs>
    <linearGradient id="linear-gradient" x1="489.72" y1="41.63" x2="-94.03" y2="542.3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed2224"/><stop offset="0.21" stop-color="#d62a3a"/><stop offset="0.64" stop-color="#9a3f71"/><stop offset="1" stop-color="#6452a3"/></linearGradient><linearGradient id="linear-gradient-2" x1="172.88" y1="92.63" x2="102.71" y2="803.86" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#776fb3"/><stop offset="0.26" stop-color="#9d97c8"/><stop offset="0.76" stop-color="#e3e2ef"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="linear-gradient-3" x1="189.91" y1="208.47" x2="57.15" y2="642.79" xlink:href="#linear-gradient-2"/></defs><title>logo</title><g class="cls-1" isolation="isolate"><g id="Layer_1" data-name="Layer 1"><path class="cls-2" fill="url(#linear-gradient)" d="M511.33,213.81,175.53,22.3c-1.18-.67-2.37-1.32-3.56-1.94C88.51-23,4.79,79.32,62,154l81.57,106.43a65.09,65.09,0,0,1,0,79.18L62,446c-57.23,74.66,26.49,177,110,133.62,1.19-.62,2.38-1.27,3.56-1.94l335.8-191.51C578.08,348.12,578.08,251.88,511.33,213.81Z"/><path class="cls-3" fill="url(#linear-gradient-2)" mix-blend-mode="multiply" d="M143.59,260.41a65.09,65.09,0,0,1,0,79.18L62,446c-57.23,74.66,26.49,177,110,133.62,1.19-.62,2.38-1.27,3.56-1.94C307,430.3,143.59,260.41,143.59,260.41Z"/><path class="cls-4" mix-blend-mode="multiply" fill="url(#linear-gradient-3)" d="M100.8,584.1c163.94-190.37,42.79-323.69,42.79-323.69a65.09,65.09,0,0,1,0,79.18L62,446C21.9,498.35,51,564.29,100.8,584.1Z"/></g></g>
    </svg>
</template>

<script>
export default {
  name: 'LogoIcon',
  props: {
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
