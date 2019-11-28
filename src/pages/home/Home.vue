<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-sort></home-sort>
    <home-new-sort></home-new-sort>
    <home-footer></home-footer>
    <home-recommend></home-recommend>
    <home-chosen></home-chosen>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import HomeBanner from '@/pages/home/components/Banner'
  import HomeSort from '@/pages/home/components/Sort'
  import HomeFooter from '@/pages/home/components/Footer'
  import HomeRecommend from '@/pages/home/components/Recommend'
  import HomeChosen from '@/pages/home/components/Chosen'
  import HomeNewSort from '@/pages/home/components/NewSort'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner,
      HomeSort,
      HomeFooter,
      HomeRecommend,
      HomeChosen,
      HomeNewSort
    }
  }
</script>

<style>
</style>
