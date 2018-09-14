<template>
  <body>
    <particles class="error__page--gradient">
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
    font-family: 'Poppins', sans-serif;
    max-width: 900px;
    height: 40%;
    min-height: 400px;
    background: #263238;
    border-radius: 7px 7px;
    transition: box-shadow .3s linear;
    backdrop-filter: blur(6px);
    z-index: 999;
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
        content: '$ ' !important;
        color: #52a563;
        margin-right: 10px;
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
export default {
  store,

  name: 'Error404',
}
</script>
