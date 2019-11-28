<template>
  <div class="sort-box">
    <swiper :options="swiperOption">
         <swiper-slide v-for="(arr, index) of pages" :key="index">
            <div class="sort">
                <div class="child" v-for="items of arr" :key="items.id">
                  <div>
                    <a href="#">
                      <img :src="items.url" alt="">
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
    name: "NewSort",
    data (){
      return {
        swiperOption:{},
        List:[
          {
            id:"001",
            url:"https://cloud.wavlink.com/index.php?user/publicLink&fid=db70ClrOz6HxFlGnEYfY_ftbf_3_yeUb-q45U3bZsKvClmqpXZpAI5UrjxcTfq5fi3DPl8YX8H_qHT_LsOA1moSBPsXAD8m-dIq9wuluUv34Qbhy3NbTQPyvZz2a0hujZdstysI&file_name=/1.png",
            name:"Mesh"
          },
          {
            id:"002",
            url:"https://cloud.wavlink.com/index.php?user/publicLink&fid=1f1fMt2TuSLal5EokLe90iGHAzp3-fDzu5PDU43eXTPdHsnieaS_JAgSA-lfjtw-iJaMFsg_YDDezljoWCRgM5TP_MKKtSkXmMvImayAQ0EsV91VvZR4FKdYpcJ4KKqbBQhktWoTu3USGuym&file_name=/T3.png",
            name:"Thunderbolt"
          },
          {
            id:"003",
            url:"https://cloud.wavlink.com/index.php?user/publicLink&fid=7e61l6wI4yiKPzLq5OD22t8S5HydfpfGdnNcfBOUN05WtLVy8d6xWJvxe0jvj22GDAeVD90qoIHnIn0z47nH1LaE_1swtNBDaFN26JmZhxl8d3LgKAk_Wa81AduWqiA5hbiOZYHaY_eYpN4&file_name=/1.png",
            name:"USB-C Docking"
          },
          {
            id:"004",
            url:"https://cloud.wavlink.com/index.php?user/publicLink&fid=2129t_AL6BfQ9kc4u3PLEhY5B5i9RaDYqiLdBQeQl-REw6VhA-6oogfRRQW9UQoD7mLvPfKoxw4hHKtf9xgJxKOC_72eaqPDZvI9RbtnGVHqPP-hdq1u7IbSE2Z-VFwVcQIZUa87&file_name=/10.png",
            name:"LTE"
          },
          {
            id:"005",
            url:"https://cloud.wavlink.com/index.php?user/publicLink&fid=888525aiqz8aJNWNsbpEWCmlYvZkXXKRZ312kRlo7YA-WpE8KtbwgEouVedRAfDC458D0uQtqSyTjrDBdbGKeVruyzIi4GSLNVgy1liviZkZGzpWJBj6LbxWFxTVtpMTsggdcLg&file_name=/7.png",
            name:"Wireless AV"
          }
        ]
      }
    },
    computed:{
      pages (){
        const newArr = [];
        this.List.forEach((item, index) => {
          const value = Math.floor(index / 3);
          if(!newArr[value]){
            newArr[value] = [];
          }
          newArr[value].push(item)
        });
        return newArr;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/common.styl';
  .sort-box
    background:$bgColor;
  .sort
    display:flex;
    overflow:hidden;
    height:0;
    padding-bottom:50%;
    .child
      position:relative;
      width:33.333%;
      overflow:hidden;
      height:0;
      padding-bottom:50%;
      background:#fff;
      div
        position:absolute;
        left:50%;
        top:50%;
        width:80%;
        transform:translate(-50%, -50%);
        a img
          width:100%
        p
          margin-top:10px;
          text-align:center;
          font-size:16px;
          sub
            display:inline-block;
            transform:scale(0.4) translate(-15px, -15px);
</style>
