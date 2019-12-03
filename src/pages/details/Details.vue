<template>
  <div class="details">
    <details-nav-btn></details-nav-btn>
    <details-banner></details-banner>
    <!-- <details-activity></details-activity> -->
    <details-base-parameter></details-base-parameter>
  </div>
</template>

<script>
  import DetailsNavBtn from '@/pages/details/components/NavBtn'
  import DetailsBanner from '@/pages/details/components/Banner'
  // import DetailsActivity from '@/pages/details/components/Activity'
  import DetailsBaseParameter from '@/pages/details/components/BaseParameter'
  export default {
    name: "Details",
    components: {
      DetailsNavBtn,
      DetailsBanner,
      // DetailsActivity,
      DetailsBaseParameter
    }
  }
</script>

<style>
</style>
