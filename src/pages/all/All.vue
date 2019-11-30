<template>
  <div class="all">
    <all-header></all-header>
    <all-nav-bar></all-nav-bar>
  </div>
</template>

<script>
  import AllHeader from '@/pages/all/components/Header'
  import AllNavBar from '@/pages/all/components/NavBar'
  export default {
    name:"All",
    components:{
      AllHeader,
      AllNavBar
    }
  }
</script>

<style>
</style>
