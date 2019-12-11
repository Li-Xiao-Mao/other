<template>
  <div class="recursive">
    <div class="recursive-content">
      <recursive-list :List="List"></recursive-list>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import RecursiveList from '@/recursive/List'
  export default {
    name: "Recursive",
    components: {
      RecursiveList
    },
    data () {
      return {
        List: []
      }
    },
    methods: {
      getDataInfo () {
        axios.get('/api/recursive.json')
        .then(this.getDataInfoSuccess)
      },
      getDataInfoSuccess (res) {
        res = res.data
        if(res.ret && res.data){
          let data = res.data
          this.List = data.recursive
        }
      }
    },
    mounted () {
      this.getDataInfo()
    }
  }
</script>

<style lang="stylus" scoped></style>
