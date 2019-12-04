<template>
  <footer>
    <div class="footer-nav-btn">
      <div class="footer-nav-home">
        <router-link to="/">
          <i class="iconfont iconHomehomepagemenu"></i>
          <span>Home</span>
        </router-link>
      </div>
      <div class="footer-nav-shopping-cart">
        <router-link to="/">
          <i class="iconfont iconShoppingcartfinancebusiness"></i>
          <span>Shopping Cart</span>
        </router-link>
      </div>
      <div class="footer-shap-up">
        <router-link to="/">
          <p>Shap Up Now</p>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
  footer
    position:fixed
    left:0
    bottom:20px
    width:100%
    z-index:100
    .footer-nav-btn
      display:flex
      align-items center
      height:104px
      margin:0 20px
      max-width:100%
      overflow:hidden
      background:hsla(0,0%,100%,.96)
      border-radius:16px
      box-shadow:
      0 2px 4px -1px rgba(0,0,0,.2),
      0 4px 5px rgba(0,0,0,.14),
      0 1px 10px rgba(0,0,0,.12)
      > div
        margin-left:32px
        text-align:center
        span
          display:block
          margin-top:2px
          font-size:14px
          elipsis()
        i
          font-size:50px
          color:#f56600
      .footer-shap-up
        flex:1
        p
          font-size:28px
          color:#fff
          padding:48px 0
          background:#f56600
          elipsis()
</style>
