<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-sort></home-sort>
    <home-recommend></home-recommend>
    <!-- <home-new-sort></home-new-sort> -->
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import HomeBanner from '@/pages/home/components/Banner'
  import HomeSort from '@/pages/home/components/Sort'
  import HomeRecommend from '@/pages/home/components/Recommend'
  // import HomeNewSort from '@/pages/home/components/NewSort'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner,
      HomeSort,
      HomeRecommend
      // HomeNewSort
    }
  }
</script>

<style>
</style>
