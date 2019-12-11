<template>
  <div class="home">
    <home-header></home-header>
    <home-banner :bannerImg="bannerImg"></home-banner>
    <home-sort :SortInfo="SortInfo"></home-sort>
    <home-recommend :Recommend="Recommend"></home-recommend>
    <home-chosen
      :chosenTitle="chosenTitle"
      :chosenList="chosenList"
    >
    </home-chosen>
    <!-- <home-new-sort></home-new-sort> -->
    <home-cells-recommend :cellsRecommend="cellsRecommend"></home-cells-recommend>
    <home-chosen-one 
      :chosenTitleOne="chosenTitleOne" 
      :chosenListOne="chosenListOne"
    >
    </home-chosen-one>
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
        bannerImg: [],
        Recommend: [],
        chosenTitle: "",
        chosenList: [],
        cellsRecommend: "",
        chosenTitleOne: "",
        chosenListOne: []
      }
    },
    methods: {
      getDataInfo () {
        axios.get("/api/home.json")
          .then(this.getDataInfoSuccess)
      },
      getDataInfoSuccess (res) {
        res = res.data
        if(res.ret && res.data){
          let data = res.data
          this.bannerImg = data.bannerImg
          this.Recommend = data.Recommend
          this.chosenTitle = data.chosenTitle
          this.chosenList = data.chosenList
          this.cellsRecommend = data.cellsRecommend
          this.chosenTitleOne = data.chosenTitleOne
          this.chosenListOne = data.chosenListOne
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
