<template>
  <div class="footer">
    <ul class="clearfix">
      <li>
        <div class="icons">
          <a href="#">
            <img class="footer-img" src="@/assets/img/footer/home.png" alt="">
          </a>
        </div>
        <p>首页</p>
      </li>
      <li>
        <div class="icons">
          <a href="#">
            <img class="footer-img" src="@/assets/img/footer/home.png" alt="">
          </a>
        </div>
        <p>分类</p>
      </li>
      <li>
        <div class="icons">
          <a href="#">
            <img class="footer-img" src="@/assets/img/footer/home.png" alt="">
          </a>
        </div>
        <p>通知</p>
      </li>
      <li>
        <div class="icons">
          <a href="#">
            <img class="footer-img" src="@/assets/img/footer/home.png" alt="">
          </a>
        </div>
        <p>购物车</p>
      </li>
      <li>
        <div class="icons">
          <a href="#">
            <img class="footer-img" src="@/assets/img/footer/home.png" alt="">
          </a>
        </div>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/common.styl'
  .footer
    position:fixed
    left:0
    bottom:0
    width:100%
    background:$bgColor
    z-index:9999
    ul
      li
        float:left
        width:20%
        text-align:center
        padding:15px 0 10px
        .icons
          width:55px
          height:55px
          margin:0 auto
          a >.footer-img
            display:block
            width:100%
        p
          font-size:12px
          color:#fff
          margin-top:15px
</style>
