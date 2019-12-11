<template>
  <div class="chosen">
    <div class="chosen-title">
      <a href="#">
        <img class="chosen-img" :src="chosenTitleOne" alt="">
      </a>
    </div>
    <div class="chosen-list">
      <ul>
      	<li v-for="(items, index) of chosenListOne" :key="index">
          <div class="clearfix">
            <div class="img">
              <a href="#">
                <img class="chosen-img" :src="items.url" alt="344 x 280">
              </a>
            </div>
            <div class="desc">
              <div class="desc-title">{{items.title}}</div>
              <div class="desc-container">{{items.desc}}</div>
              <div class="desc-price">
                {{items.price}}
                <span>from</span>
                <span class="original-price"><s>{{items.orig}}</s></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chosen-more border-top">
      <a href="#">
        <p>More Featured Products<i> > </i></p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Chosen",
    props: {
      chosenTitleOne: String,
      chosenListOne: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
  .chosen .chosen-list ul li:nth-child(odd) > div .img
    float:right
  .chosen
    .chosen-title
      overflow:hidden
      height:0
      padding-bottom:61.1111111%
      background:#6F42C1
      .chosen-img
        width:100%
    .chosen-list
      ul
        li
          box-sizing:border-box
          background:#fff
          > div
            > div
              float:left
              width:50%
            .img
              overflow:hidden
              height:0
              padding-bottom:50%
              background:#F5F5F5
              .chosen-img
                width:100%
            .desc
              box-sizing:border-box
              padding:76px 20px 0 32px
              .desc-title
                font-size:30px
                elipsis()
              .desc-container
                font-size:22px
                margin:10px 0
                color: rgba(0,0,0,.54)
                elipsis()
              .desc-price
                font-size:30px
                color:#ea625b
                margin-top:30px
                margin-left:15px
                text-indent:-15px
                span
                  font-size:12px
                .original-price
                  color:#ccc
                .original-price::before
                  content:"￥"
                  display:inline-block;
                  font-size:12px
                  transform:translateX(5px)
              .desc-price::before
                content:"￥"
                display:inline-block;
                font-size:12px
                transform:translateX(12px)
    .chosen-more
      line-height:86px
      text-align:center
      background:#fff
</style>
