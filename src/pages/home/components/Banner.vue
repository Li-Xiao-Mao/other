<template>
  <div class="banner">
    <div class="banner-container">
      <swiper :options="swiperOption">
          <swiper-slide>
            <img class="swiper-img" src="" alt="720 x 360">
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="" alt="720 x 360">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
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
          loop: true,
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .swiper-img{
    display:block;
    width: 100%;
  }
  /deep/ .swiper-slide{
    overflow: hidden;
    height:0;
    padding-bottom: 50%;
  }
  /deep/ .swiper-pagination-bullet{
    width:15px;
    height:15px;
    margin:0 5px !important;
  }
  /deep/ .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
