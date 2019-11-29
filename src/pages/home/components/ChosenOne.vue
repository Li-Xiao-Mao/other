<template>
  <div class="chosen">
    <div class="chosen-title">
      <a href="#">
        <img class="chosen-img" src="@/assets/img/chosen/daily-picks.jpg" alt="">
      </a>
    </div>
    <div class="chosen-list">
      <ul>
      	<li v-for="(items, index) of priceList" :key="index">
          <div class="clearfix">
            <div class="img">
              <a href="#">
                <img class="chosen-img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/739c1321d2a05d48c0b8b86cd459c4d4.jpg?thumb=1&w=360&h=360" alt="344 x 280">
              </a>
            </div>
            <div class="desc">
              <div class="desc-title">{{items[0].title}}</div>
              <div class="desc-container">{{items[0].desc}}</div>
              <div class="desc-price">
                {{items[0].price}}
                <span>from</span>
                <span class="original-price"><s>1299</s></span>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="desc">
              <div class="desc-title">{{items[1].title}}</div>
              <div class="desc-container">{{items[1].desc}}</div>
              <div class="desc-price">
                {{items[1].price}}
                <span>from</span>
                <span class="original-price"><s>1299</s></span>
              </div>
            </div>
            <div class="img">
              <a href="#">
                <img class="chosen-img" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/739c1321d2a05d48c0b8b86cd459c4d4.jpg?thumb=1&w=360&h=360" alt="344 x 280">
              </a>
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
    data (){
      return {
        priceList:[
          [
            {
              id:"001",
              title:"Product Title Name",
              desc:"Selling Point Description",
              price:"2400"
            },
            {
              id:"002",
              title:"Product Title Name",
              desc:"Selling Point Description",
              price:"1999"
            }
          ],
          [
            {
              id:"003",
              title:"Product Title Name",
              desc:"Selling Point Description",
              price:"999"
            },
            {
              id:"004",
              title:"Product Title Name",
              desc:"Selling Point Description",
              price:"788"
            }
          ]
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
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
              padding:76px 20px 0 64px
              .desc-title
                font-size:30px
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
