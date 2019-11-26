<template>
  <div class="sort clearfix">
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>Mesh</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>Router</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>LTE</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>Repeater</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>Outdoor AP</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>Wireless AV</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>USB Adapter</p>
      </div>
    </div>
    <div class="child">
      <div>
        <a href="#">
          <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
        </a>
        <p>Powerline Kit</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sort"
  }
</script>

<style lang="less" scoped>
  .sort{
    overflow:hidden;
    max-width:100%;
    height: 0;
    padding-bottom: 50%;
    // background:#008000;
    .child{
      float: left;
      position:relative;
      width: 25%;
      overflow:hidden;
      height:0;
      padding-bottom: 25%;
      text-align: center;
      background: #3b6caa;
      div{
        position:absolute;
        left:50%;
        top:50%;
        width:100%;
        transform:translate(-50%, -50%);
        a{
         .swiper-img{
           width: 50%;
         }
        }
        p{
          font-size: 18px;
          margin-top: 10px;
          color: #fff
        }
      }
    }
  }
</style>
