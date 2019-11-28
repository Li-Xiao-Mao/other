<template>
  <div class="banner">
    <div class="banner-container">
      <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img class="swiper-img" src="@/assets/img/01.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
    <div class="banner-main">
      <ul>
        <li>
          <a href="#">
            <img class="swiper-img" src="@/assets/img/01.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img class="swiper-img" src="@/assets/img/01.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img class="swiper-img" src="@/assets/img/01.jpg" alt="">
          </a>
        </li>
      </ul>
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
  /deep/ .swiper-pagination-bullet{
    width:15px;
    height:15px;
    margin:0 5px !important;
  }
  /deep/ .swiper-pagination-bullet-active{
    background: #fff;
  }
  .banner{
    position:relative;
    width:100%;
    overflow: hidden;
    height:0;
    padding-bottom: 106.666667%;
    .banner-main{
      display:none;
      position:absolute;
      left:0;
      bottom:-50px;
      width:100%;
      z-index: 10;
      ul{
        display: flex;
        align-items: center;
        justify-content: center;
        li{
          width: 25%;
          margin:0 15px;
          // box-shadow:0 5px 8px #6C757D;
          a{
            i{
              color:#fff;
              font-size:64px
            }
          }
        }
      }
    }
  }
</style>
