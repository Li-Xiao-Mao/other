<template>
  <div class="footer">
    <ul>
      <li class="clearfix">
        <p>Home</p>
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
  @import '~@/assets/css/common.styl';
  .footer
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:86px;
    background:#000;
    z-index:9999;
    ul
      li
        position:relative;
        float:left;
        width:20%;
        height:100%;
        text-align:center;
        p
          font-size:12px;
          color:#fff;
</style>
