<template>
  <div class="details">
    <details-nav-btn></details-nav-btn>
    <details-banner></details-banner>
    <!-- <details-activity></details-activity> -->
    <details-base-parameter></details-base-parameter>
    <details-key-parameter></details-key-parameter>
    <section-detail></section-detail>
    <details-footer></details-footer>
  </div>
</template>

<script>
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
    }
  }
</script>

<style lang="stylus" scoped>
  .details
    padding-bottom: 550px
</style>
