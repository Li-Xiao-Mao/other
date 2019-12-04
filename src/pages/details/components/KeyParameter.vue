<template>
  <div class="key-parameter">
    <swiper :options="swiperOption">
      <swiper-slide v-for="items of keyParameter">
        <div class="parameter-content">
          <img class="key-parameter-img" :src="items.imgUrl" alt="">
          <div class="key-parameter-name">{{items.name}}</div>
          <div class="key-parameter-value">{{items.value}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "KeyParameter",
    data () {
      return {
        swiperOption: {
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },
          slidesPerView: 5,
          spaceBetween: 50,
          // init: false,
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // },
          breakpoints: {
            // 1024: {
            //   slidesPerView: 4,
            //   spaceBetween: 40
            // },
            // 768: {
            //   slidesPerView: 3,
            //   spaceBetween: 30
            // },
            640: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }
        },
        keyParameter: [
          {
            id:"001",
            imgUrl:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
            name: "CPU",
            value: "高通骁龙845"
          },
          {
            id:"002",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
            name: "高清拍摄",
            value: "1200万像素"
          },
          {
            id:"003",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
            name: "超大屏",
            value: "6.22英寸"
          },
          {
            id:"004",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png",
            name: "网络模式",
            value: "双卡双待"
          },
          {
            id:"005",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
            name: "屏幕分辨率",
            value: "1520×720"
          },
          {
            id:"006",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
            name: "高速",
            value: "4GB"
          },
          {
            id:"007",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
            name: "存储容量",
            value: "64GB"
          },
          {
            id:"008",
            imgUrl:"https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
            name: "运营商网络",
            value: "4G全网通"
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
  .parameter-content
    text-align:center
    box-sizing:border-bo
    padding:20px
    > div
      font-size:12px
    .key-parameter-img
      width:35%
      padding:0
    .key-parameter-name
      padding:10px 0
      elipsis()
    .key-parameter-value
      elipsis()
</style>
