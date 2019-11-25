<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import HomeBanner from '@/pages/home/components/Banner'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner
    }
  }
</script>

<style>
</style>
