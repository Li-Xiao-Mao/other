<template>
  <div class="banner">
     <swiper :options="swiperOption">
        <swiper-slide>
          <div>
            <img class="banner-img" src="@/assets/img/Details/banner/banner01.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img class="banner-img" src="@/assets/img/Details/banner/banner02.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img class="banner-img" src="@/assets/img/Details/banner/banner03.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img class="banner-img" src="@/assets/img/Details/banner/banner04.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <img class="banner-img" src="@/assets/img/Details/banner/banner05.jpg" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data () {
      return {
        swiperOption:{
          loop:true,
          speed:1000,
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    width:100%
    height:0
    overflow:hidden
    padding-bottom:109.903382%
    // background:#007BFF
    .banner-img
      width:100%
</style>
