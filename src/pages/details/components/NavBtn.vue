<template>
  <div class="nav-btn">
    <p class="return"><router-link to="/"> <i class="iconfont iconjiantou2"></i> </router-link></p>
    <p class="share-it"><a href="#"> <i class="iconfont iconfenxiang"></i> </a></p>
  </div>
</template>

<script>
  export default {
    name: "NavBtn"
  }
</script>

<style lang="stylus" scoped>
  .nav-btn
    display:flex
    align-items center
    position:fixed
    left:0
    top:0
    width:100%
    height:86px
    z-index:100
    p
      i
        display:block
        width:65px
        height:65px
        line-height:65px
        text-align:center
        border-radius:50%
        background:rgba(0,0,0,.6)
        color:#fff
        font-size:40px
    .return
      flex:1
      margin-left:20px
    .share-it
      margin-right:20px
</style>
