<template>
  <div class="all-header">
    <div class="header-logo">
      <router-link to="/">
        <i class="iconfont iconjiantou2"></i>
      </router-link>
    </div>
    <div class="header-title">
      <p>Sort</p>
    </div>
    <div class="header-search">
      <router-link to="">
        <i class="iconfont iconsousuo"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import '@/assets/fonts/iconfont/iconfont.css'
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" scoped>
  .all-header
    display:flex
    height: 86px
    line-height: 86px
    background: #3b6caa
    .header-logo
      color: #fff
      margin: 0 20px
      text-align:center
      a i
        font-size:55px
        color:#fff
    .header-title
      flex:1
      text-align:center;
      color:#fff
      font-size:30px
    .header-search
      i
        transform:translateY(-50%)
        font-size: 36px
        color:#fff
        margin:0 25px
</style>
