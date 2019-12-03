<template>
  <div class="details">
    <details-banner></details-banner>
    <!-- <details-activity></details-activity> -->
    <details-base-parameter></details-base-parameter>
  </div>
</template>

<script>
  import DetailsBanner from '@/pages/details/components/Banner'
  // import DetailsActivity from '@/pages/details/components/Activity'
  import DetailsBaseParameter from '@/pages/details/components/BaseParameter'
  export default {
    name: "Details",
    components: {
      DetailsBanner,
      // DetailsActivity,
      DetailsBaseParameter
    }
  }
</script>

<style>
</style>
