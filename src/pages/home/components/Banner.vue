<template>
  <div class="banner">
    <div class="banner-container">
      <swiper :options="swiperOption">
          <swiper-slide v-for="items of BannerImg" :key="items.id">
            <a href="#">
              <img class="swiper-img" :src="items.url" alt="720 x 360">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    props:{
      BannerImg:{
        type:Array
      }
    },
    data() {
      return {
        swiperOption:{
          pagination: {
            el: ".swiper-pagination",
          },
          autoplay: {
            delay: 6000,
            disableOnInteraction: true
          },
          speed: 1000,
          loop: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner >>> .swiper-container
    overflow: hidden
    height:0
    padding-bottom: 50%
    .swiper-img
      display:block
      width: 100%
  .banner >>> .swiper-pagination-bullet
    width:15px
    height:15px
    margin:0 5px !important
  .banner >>> .swiper-pagination-bullet-active
    background: #fff
</style>
