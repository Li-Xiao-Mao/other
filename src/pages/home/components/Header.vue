<template>
  <div class="header-all">
    <div class="header-navList">
      <i class="iconfont iconliebiao"></i>
    </div>
    <div class="header-logo">WINSTARS</div>
    <div class="header-search">
      <i class="iconfont iconsousuo"></i>
    </div>
  </div>
</template>

<script>
  import '@/assets/fonts/iconfont/iconfont.css'
  export default {
    name: "Header"
  }
</script>

<style lang="less" scoped>
  .header-all{
    display:flex;
    height: 86px;
    line-height: 86px;
    background: #3b6caa;
    .header-navList{
      margin:0 20px;
      color: #fff;
      text-align: center;
      i{
        font-size:56px
      }
    }
    .header-logo {
      flex: 1;
      color: #fff;
      text-align: center
    }
    .header-search {
      margin: 0 40px;
      color: #fff;
      text-align: center;
      i{
        font-size: 35px
      }
    }
  }
</style>
