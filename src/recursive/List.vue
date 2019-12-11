<template>
  <div class="recursive-list">
    <div class="recursive-item" v-for="(items, index) of List" :key="index">

      <div class="recursive-cont border-bottom">
        <i class="iconfont iconrexiao"></i>
        <span>{{items.title}}</span>
      </div>

      <div v-if="items.children" class="recursive-child">
        <recursive-list :List="items.children"></recursive-list>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "RecursiveList",
    props: {
      List: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .recursive-cont
    line-height:72px
    padding: 0 32px
    span
      font-size: 24px
      color: #666
    i
      font-size:24px
      color:#ea625b
  .recursive-child
    padding-left: 32px
</style>
