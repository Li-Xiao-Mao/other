<template>
  <div class="navbar clearfix">
    <div class="navbar-child border-right">
      <ul>
        <li class="" v-for="items of navList" :key="items.id">
          <p>{{items.name}}</p>
        </li>
      </ul>
    </div>
    <div class="navbar-wrap">
      <ul>
      	<li>
          <ul class="clearfix">
          	<li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
            <li>
              <div class="img">
                <router-link to="">
                  <img src="//files.win-star.com/images/2019/10/11/WN551K1-K2-K3_4.jpg" alt="">
                </router-link>
              </div>
              <p class="desc">产品名称</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:"NavBar",
    data () {
      return {
        navList: [
          {
            id:"01",
            name:"New"
          },
          {
            id:"02",
            name:"Wireless"
          },
          {
            id:"03",
            name:"PC Peripherals"
          },
          {
            id:"04",
            name:"IOT"
          },
          {
            id:"05",
            name:"Old Products"
          },
          {
            id:"06",
            name:"Other"
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .navbar
    > div
      float:left
    .navbar-child
      width:25%
      background:#fefefe
      li
        position:relative
        height:0
        overflow:hidden
        font-size:30px;
        padding:0 0 59.8994822% 0
        p
          position:absolute;
          left:50%
          top:50%
          font-size:28px
          text-align:center
          transform:translate(-50%, -50%)
    .navbar-wrap
      width:75%
      ul
        li
          ul
            li
              float:left
              width:33.333%
              text-align:center
              margin:20px 0
              .img
                width:56%;
                background:#fff
                margin:0 auto
                a img
                  width:100%
              .desc
                font-size:23px
                margin-top:20px
</style>
