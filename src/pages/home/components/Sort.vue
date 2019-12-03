<template>
  <div class="sort-box">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(arr, index) of pages" :key="index">
          <div class="sort clearfix">
            <div class="child" v-for="items of arr" :key="items.id">
              <div>
                <router-link :to="items.link">
                  <img class="swiper-img" :src="items.imgUrl" alt="55 x 55">
                </router-link>
                <p>{{items.name}}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  export default {
    name: "Sort",
    props:{
      SortInfo:{
        type: Array
      }
    },
    data (){
      return {
        swiperOption:{
          pagination: {
            el: ".swiper-pagination",
          }
        }
      }
    },
    computed:{
      pages () {
        let page = [];
        this.SortInfo.forEach((item, index) => {
          let n = Math.floor(index/8);
          if(!page[n]){
            page[n] = []
          };
          page[n].push(item);
        })
        return page;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
  .sort-box
    background: #3b6caa
  .sort-box >>> .swiper-pagination-bullet
    width:25px
    height:5px
    line-height:5px
    border-radius:0
    margin:0 5px 8px !important
  .sort-box >>> .swiper-pagination-bullet-active
    background: #fff
  .sort-box >>> .swiper-pagination
    position:static
  .sort
    overflow:hidden
    max-width:100%
    height: 0
    padding-bottom: 50%
    .child
      float: left
      position:relative
      width: 25%
      overflow:hidden
      height:0
      padding-bottom: 25%
      text-align: center
      div
        position:absolute
        left:50%
        top:50%
        width:100%
        transform:translate(-50%, -50%)
        a
          display:block
          width: 50%
          margin:0 auto
          overflow:hidden
          height:0
          padding-bottom:50%
          border-radius:15px
         .swiper-img
           width: 100%
        p
          font-size: 18px
          margin:10px 15px 0
          color: #fff
          elipsis()
</style>
