<template>
  <div class="section-detail">
    <div class="product-section">
      <span>已选</span>
    </div>
    <div class="product-section border-topbottom">
      <span>收货地址</span>
    </div>
    <div class="product-section promise">
      <span><i class="iconfont iconbeishubaozheng"></i> Wavlink自营</span>
      <span><i class="iconfont iconbeishubaozheng"></i> Wavlink发货</span>
      <span><i class="iconfont iconbeishubaozheng"></i> 7天无理由</span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
  .section-detail
    margin: 20px 20px 0
    overflow:hidden
    border-radius:25px
    > div
      display:flex
      align-items: center
      padding:24px 32px
      background:#F8F9FA
      span
        font-size:24px
        color:#888
    .promise
      span
        font-sze:12px
        margin-right:20px
        i
          color:#f56600
          font-size:30px
</style>
