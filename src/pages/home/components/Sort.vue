<template>
  <div class="sort-box">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(arr, index) of pages" :key="index">
          <div class="sort clearfix">
            <div class="child" v-for="items of arr" :key="items.id">
              <div>
                <a href="#">
                  <img class="swiper-img" src="@/assets/img/02.jpg" alt="">
                </a>
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
    data (){
      return {
        List:[
          {
            id:"001",
            imgUrl:"",
            name:"Mesh Router"
          },
          {
            id:"002",
            imgUrl:"",
            name:"Router"
          },
          {
            id:"003",
            imgUrl:"",
            name:"LTE"
          },
          {
            id:"004",
            imgUrl:"",
            name:"Repeater"
          },
          {
            id:"005",
            imgUrl:"",
            name:"Outdoor AP"
          },
          {
            id:"006",
            imgUrl:"",
            name:"Wireless AV"
          },
          {
            id:"007",
            imgUrl:"",
            name:"USB Adapter"
          },
          {
            id:"008",
            imgUrl:"",
            name:"Powerline Kit"
          },
          {
            id:"009",
            imgUrl:"",
            name:"Smart Light"
          }
        ],
        swiperOption:{
          pagination: {
            el: ".swiper-pagination",
          }
        }
      }
    },
    computed:{
      pages (){
        let newArr = [];
        this.List.forEach((item, index) => {
          // 返回小于或者等于指定值的最大整数
          let n = Math.floor( index / 8 );
          if(!newArr[n]){
            newArr[n] = []
          };
          newArr[n].push(item);
        })
        return newArr;
      }
    }
  }
</script>

<style lang="less" scoped>
  .sort-box{
    background: #3b6caa;
  }
  /deep/ .swiper-pagination-bullet{
    width:25px;
    height:5px;
    border-radius:0;
    margin:0 5px !important;
  }
  /deep/ .swiper-pagination-bullet-active{
    background: #fff;
  }
  .sort{
    overflow:hidden;
    max-width:100%;
    height: 0;
    padding-bottom: 50%;
    .child{
      float: left;
      position:relative;
      width: 25%;
      overflow:hidden;
      height:0;
      padding-bottom: 25%;
      text-align: center;
      div{
        position:absolute;
        left:50%;
        top:50%;
        width:100%;
        transform:translate(-50%, -50%);
        a{
          display:block;
          width: 50%;
          margin:0 auto;
          overflow:hidden;
          height:0;
          padding-bottom:50%;
          border-radius:15px;
         .swiper-img{
           width: 100%;
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
