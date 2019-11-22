<template>
  <div id="app">
    <header-all></header-all>
    <router-view/>
  </div>
</template>

<script>
  import HeaderAll from '@/pages/header/Header'
export default {
  name: 'App',
  components: {
    HeaderAll
  }
}
</script>

<style></style>
