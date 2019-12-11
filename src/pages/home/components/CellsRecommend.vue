<template>
  <div class="cells-recommend">
    <a href="#">
      <img class="cells-recommend-img" :src="cellsRecommend" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name:"CellsRecommend",
    props: {
      cellsRecommend: String
    }
  }
</script>

<style lang="stylus" scoped>
  .cells-recommend
    overflow:hidden
    height:0
    padding-bottom:39.1304348%
    background:#E9EAFF
    margin:20px 0
    .cells-recommend-img
      width:100%
</style>
