<template>
  <div class="header-all">
    <div class="header-logo">
      <a href="#">
        W
      </a>
    </div>
    <div class="header-search">
      <a href="#">
        <i class="iconfont iconsousuo"> Search Product Name</i>
      </a>
    </div>
    <div class="header-login">
      <a href="#">
        <i class="iconfont icontouxiang"></i>
      </a>
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
  .header-all
    display:flex
    height: 86px
    line-height: 86px
    background: #3b6caa
    .header-logo
      color: #fff
      margin: 0 20px
      text-align: center
      a
        font-size:46px
        color:#fff
    .header-search
      flex: 1
      position:relative
      background:#fff
      height:66px
      line-height:66px
      margin-top:10px
      margin-right:20px
      border-radius:5px
      i
        position:absolute;
        left:15px;
        top:50%;
        transform:translateY(-50%);
        font-size: 30px;
        color:rgba(0,0,0,.3)
    .header-login
      margin-right:20px
      i
        font-size:46px
        color:#fff
</style>
