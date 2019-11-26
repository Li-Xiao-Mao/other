<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-sort></home-sort>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import HomeBanner from '@/pages/home/components/Banner'
  import HomeSort from '@/pages/home/components/Sort'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner,
      HomeSort
    }
  }
</script>

<style>
</style>
