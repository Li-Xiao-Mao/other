<template>
  <div class="recommend">
    <div class="recommend-left">
      <a href="#">
        <img class="recommend-img" :src="Recommend[0]" alt="358 x 508">
      </a>
    </div>
    <div class="recommend-right">
      <div class="recommend-top">
        <a href="#">
          <img class="recommend-img" :src="Recommend[1]" alt="358 x 252">
        </a>
      </div>
      <div class="recommend-bottom">
        <a href="#">
          <img class="recommend-img" :src="Recommend[2]" alt="358 x 252">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      Recommend: Array
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/common.styl'
  .recommend
    display:flex
    margin:20px 0
    // background:$bgColor
    >div
      width:50%
    .recommend-left
      overflow:hidden
      height:0
      padding-bottom:70.5531401%
      margin-right:5px
      background:#C1DDE9
      .recommend-img
        width:100%
    .recommend-right
      .recommend-top
        background:#EEEDF3
        margin-bottom:5px
      .recommend-bottom
        background:#EDFBFC
      div
        width:100%
        overflow:hidden
        height:0;
        padding-bottom:70.3910615%
        a .recommend-img
          width:100%
</style>
