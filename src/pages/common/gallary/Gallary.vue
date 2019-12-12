<template>
  <div class="gallary" @click="handleGallaryClick">
    <div class="gallary-banner">
       <swiper :options="swiperOption">
           <swiper-slide v-for="(items, index) of bannerList" :key="index">
             <a href="#">
               <img class="gallary-img" :src="items" alt="720 x 360">
             </a>
           </swiper-slide>
           <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    props: ["bannerList"],
    data () {
      return {
        swiperOption:{
          pagination: {
            el: ".swiper-pagination",
            type: 'fraction'
          },
          observer:true,
          observeParents:true
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit("clos")
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallary >>> .swiper-container
    overflow:inherit
  .gallary >>> .swiper-pagination-fraction
    bottom: -50px
    color:#fff
  .gallary
    display:flex
    // flex-direction:colum
    justify-content center
    align-items center
    position:fixed
    left:0
    right:0
    bottom:0
    top:0
    z-index:10
    background:rgba(0, 0, 0, 1)
    .gallary-banner
      width:100%
      .gallary-img
        width:100%
</style>
