<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="$store.commit('add')"> + </button>
      <button @click="$store.commit('reduce')"> - </button>
    </div>
  </div>
</template>

<script>
  import store from '@/store/store.js'
  export default {
    name: "Count",
    data () {
      return {
        msg: "Hello World!"
      }
    },
    store
  }
</script>

<style>
</style>
