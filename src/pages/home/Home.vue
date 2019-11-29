<template>
  <div class="home">
    <home-header></home-header>
    <home-banner></home-banner>
    <home-sort></home-sort>
    <home-recommend></home-recommend>
    <home-chosen></home-chosen>
    <!-- <home-new-sort></home-new-sort> -->
    <home-cells-recommend></home-cells-recommend>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import HomeBanner from '@/pages/home/components/Banner'
  import HomeSort from '@/pages/home/components/Sort'
  import HomeRecommend from '@/pages/home/components/Recommend'
  import HomeChosen from '@/pages/home/components/Chosen'
  // import HomeNewSort from '@/pages/home/components/NewSort'
  import HomeCellsRecommend from '@/pages/home/components/CellsRecommend'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner,
      HomeSort,
      HomeRecommend,
      HomeChosen,
      // HomeNewSort
      HomeCellsRecommend
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background:#F5F5F5
</style>
