<template>
  <div class="home">
    <home-header></home-header>
    <home-banner :BannerImg="BannerImg"></home-banner>
    <home-sort :SortInfo="SortInfo"></home-sort>
    <home-recommend></home-recommend>
    <home-chosen></home-chosen>
    <!-- <home-new-sort></home-new-sort> -->
    <home-cells-recommend></home-cells-recommend>
    <home-chosen-one></home-chosen-one>
  </div>
</template>

<script>
  import axios from 'axios'
  import HomeHeader from '@/pages/home/components/Header'
  import HomeBanner from '@/pages/home/components/Banner'
  import HomeSort from '@/pages/home/components/Sort'
  import HomeRecommend from '@/pages/home/components/Recommend'
  import HomeChosen from '@/pages/home/components/Chosen'
  // import HomeNewSort from '@/pages/home/components/NewSort'
  import HomeCellsRecommend from '@/pages/home/components/CellsRecommend'
  import HomeChosenOne from '@/pages/home/components/ChosenOne'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeBanner,
      HomeSort,
      HomeRecommend,
      HomeChosen,
      // HomeNewSort
      HomeCellsRecommend,
      HomeChosenOne
    },
    data () {
      return {
        BannerImg:[],
        SortInfo:[]
      }
    },
    methods: {
      getDataInfo () {
        axios.get("/api/index.json")
          .then(this.datainfoSuccess)
      },
      datainfoSuccess (res) {
        let Res = res.data;
        if(Res.ret && res.data){
          let data = res.data;
          this.BannerImg = data.BannerImg;
          this.SortInfo = data.SortList
        }
      }
    },
    mounted () {
      this.getDataInfo()
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background:#F5F5F5
</style>
