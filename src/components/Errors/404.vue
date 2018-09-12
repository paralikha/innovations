<template>
  <body>
    <particles class="error-gradient">
      <!-- <section class="error--container">
        <v-layout row wrap justify-center align-center>
          <h1>404</h1>
        </v-layout>
      </section> -->
      <div class="wrapper">
        <div class="terminal">
          <div class="terminal__head">
            <div class="head__circle head__circle--close"></div>
            <div class="head__circle head__circle--turn"></div>
            <div class="head__circle head__circle--expand"></div>
          </div>
          <div class="terminal__text" id="typedtext"></div>
        </div>
      </div>
    </particles>
  </body>
</template>

<style lang="stylus" scoped>
  .error--container {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: block;
  }

  //terminalWindow
  .wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .terminal{
    width: 90%;
    max-width: 600px;
    height: 40%;
    min-height: 300px;
    background: #263238;
    border-radius: 7px 7px;
    transition: box-shadow .3s linear;
    backdrop-filter: blur(6px);
    z-index: 999;
    &:hover{
    }
    &:active{
      cursor:move;
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.05);
    }
    &__head{
      width: 100%;
      height: 1.875rem;
      background: #E0E8F0;
      border-radius: 7px 7px 0 0;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    &__text{
      padding: 20px 5%;
      line-height: 1.5;
      a{
        color: #52a563;
        text-decoration: none;
      }
      &__span:before{
        content: '$ ';
        color: #52a563;
      }
    }
  }

  .head{
    &__circle{
      position: relative;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-left: 4px;
      font-size: 0;
      font-weight: 700;
      border-radius: 10px;
      &--close{
        background: #3BB662;
        margin-left: 7px;
      }
      &--turn{
        background: #E5C30F;
      }
      &--expand{
        background: #E75448;
      }
    }
  }
</style>

<script>
import store from '@/store'
import 'jquery'

export default {
  store,

  name: 'Error',

  mounted () {
    this.terminalWindow()
  },

  methods: {
    terminalWindow () {
      /* eslint-disable */
      var aText = new Array(
        "<span class='terminal__text__span'>hi, i'm den</span>",
        "<span class='terminal__text__span'>a web developer</span>",
        "<span class='terminal__text__span'>based in russia</span>",
        "<span class='terminal__text__span'>i drink a lot of tea</span>",
        "<span class='terminal__text__span'>and build beautiful websites</span>",
        "<span class='terminal__text__span'># # # # # # #</span>",
        "<span class='terminal__text__span'>see my <a href='#'>portfolio</a> or profile on <a href='#'>github</a> / <a href='#'>codepen</a></span>",
        "<span class='terminal__text__span'>and</span>",
        "<span class='terminal__text__span'>read my <a href='#'>blog</a> and  <a href='#'>twitter</a></span>"
      );
      var iSpeed = 50;
      var iIndex = 0;
      var iArrLength = aText[0].length;
      var iScrollAt = 20;

      var iTextPos = 0;
      var sContents = '';
      var iRow;

      function typewriter()
      {
       sContents =  ' ';
       iRow = Math.max(0, iIndex-iScrollAt);
       var destination = document.getElementById("typedtext");

       while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
       }
       destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
       if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
         iArrLength = aText[iIndex].length;
         setTimeout("typewriter()", 200);
        }
       } else {
        setTimeout("typewriter()", iSpeed);
       }
      }

      $(function() {
        $( ".terminal" ).draggable();
      });
    }
  }
}
</script>
