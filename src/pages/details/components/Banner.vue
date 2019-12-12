<template>
  <div class="banner">
    <div @click="handleBannerBtn">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(items, index) of detailsBanner" :key="index">
          <div>
            <img class="banner-img" :src="items" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <common-gallary v-show="bannerShow" @clos="handleBannerClick" :bannerList="detailsBanner"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from '@/pages/common/gallary/Gallary'
  export default {
    name: "Banner",
    props: {
      detailsBanner: {
        type: Array,
        default: ["/static/img/details/002/02.jpg","/static/img/details/002/03.jpg"]
      }
    },
    components: {
      CommonGallary
    },
    data () {
      return {
        swiperOption:{
          loop:true,
          speed:1000,
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {}
        },
        bannerShow: false
      }
    },
    methods: {
      handleBannerBtn () {
        this.bannerShow = true
      },
      handleBannerClick () {
        this.bannerShow = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    width:100%
    height:0
    // overflow:hidden
    padding-bottom:109.903382%
    // background:#007BFF
    .banner-img
      width:100%
</style>
