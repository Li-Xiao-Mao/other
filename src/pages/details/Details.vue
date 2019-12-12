<template>
  <div class="details">
    <details-nav-btn></details-nav-btn>
    <details-banner :detailsBanner="detailsBanner"></details-banner>
    <!-- <details-activity></details-activity> -->
    <details-base-parameter></details-base-parameter>
    <details-key-parameter></details-key-parameter>
    <section-detail></section-detail>
    <details-footer></details-footer>
  </div>
</template>

<script>
  import axios from "axios"
  import DetailsNavBtn from '@/pages/details/components/NavBtn'
  import DetailsBanner from '@/pages/details/components/Banner'
  // import DetailsActivity from '@/pages/details/components/Activity'
  import DetailsBaseParameter from '@/pages/details/components/BaseParameter'
  import DetailsKeyParameter from '@/pages/details/components/KeyParameter'
  import DetailsFooter from '@/pages/details/components/Footer'
  import SectionDetail from '@/pages/details/components/SectionDetail'
  export default {
    name: "Details",
    components: {
      DetailsNavBtn,
      DetailsBanner,
      // DetailsActivity,
      DetailsBaseParameter,
      DetailsKeyParameter,
      DetailsFooter,
      SectionDetail
    },
    data () {
      return {
        detailsBanner: []
      }
    },
    methods: {
      getDataInfo () {
        axios.get("/api/details.json")
        .then(this.getDataInfoSuccess)
      },
      getDataInfoSuccess (res) {
        res = res.data
        if(res.ret && res.data){
          let data = res.data
          this.detailsBanner = data.detailsBanner
        }
      }
    },
    mounted () {
      this.getDataInfo()
    }
  }
</script>

<style lang="stylus" scoped>
  .details
    padding-bottom: 150px
</style>
