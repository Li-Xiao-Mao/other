<template>
  <div class="chosen">
    <div class="chosen-title">
      <router-link to="/details">
        <img class="chosen-img" :src="chosenTitle" alt="">
      </router-link>
    </div>
    <div class="chosen-list">
      <ul class="clearfix">
      	<li v-for="items of chosenList" :key="items.id">
          <div>
            <div class="img">
              <router-link to="/details">
                <img class="chosen-img" :src="items.url" alt="344 x 280">
              </router-link>
            </div>
            <div class="desc">
              <div class="desc-title">{{items.title}}</div>
              <div class="desc-container">{{items.desc}}</div>
              <div class="desc-price">
                {{items.price}}
                <span>from</span>
                <span class="original-price"><s>{{items.orig}}</s></span>
              </div>
              <div class="desc-buybtn">
                <router-link to="/details">Buybtn Mauto</router-link>
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
      chosenTitle: String,
      chosenList: Array
    }
    // data (){
    //   return {
    //     priceList:[
    //       {
    //         id:"001",
    //         title:"Product Title Name",
    //         desc:"Selling Point Description",
    //         price:"2400"
    //       },
    //       {
    //         id:"002",
    //         title:"Product Title Name",
    //         desc:"Selling Point Description",
    //         price:"1299"
    //       },
    //       {
    //         id:"003",
    //         title:"Product Title Name",
    //         desc:"Selling Point Description",
    //         price:"999"
    //       },
    //       {
    //         id:"004",
    //         title:"Product Title Name",
    //         desc:"Selling Point Description",
    //         price:"780"
    //       }
    //     ]
    //   }
    // }
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
          float:left
          width:50%
          box-sizing:border-box
          background:#fff
          &:nth-child(odd)
            >div
              padding-right:5px
          &:nth-child(even)
            >div
              padding-left:5px
          >div
            padding:10px
            .img
              overflow:hidden
              height:0
              padding-bottom:81.3953488%
              background:#F5F5F5
              .chosen-img
                width:100%
            .desc
              text-align:center
              padding:15px 20px
              .desc-title
                font-size:30px
                elipsis()
              .desc-container
                font-size:20px
                margin:10px 0
                color: rgba(0,0,0,.54)
                elipsis()
              .desc-price
                font-size:30px
                color:red
                elipsis()
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
              .desc-buybtn
                font-size:26px
                background:#ea625b
                padding:15px
                margin:10px 14%
                border-radius:5px
                a
                  color:#fff
    .chosen-more
      line-height:86px
      text-align:center
      background:#fff
</style>
