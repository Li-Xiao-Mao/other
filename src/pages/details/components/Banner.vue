<template>
  <div class="banner">
     <swiper :options="swiperOption">
        <swiper-slide>
          <img class="banner-img" src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_5.jpg" alt="">
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
        swiperOption:{}
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
