<template>
  <div class="base-parameter">
    <div class="activity">
      <p class="activity-spike">
        Price Spike<span>1499</span>
      </p>
      <span class="activity-date">End of distance 06:35:26</span>
    </div>
    <div class="base-parameter-title">AC3000 Tri-Band MU-MIMO Gigabit Smart Mesh WiFi System with Patented TouchLink Technology</div>
    <div class="base-parameter-desc">
      Every Corner Covered / Insanely Fast / Smart and Simple / Mesh Wi-Fi System / Patent Touchlink Technology
      / Beamforming Technology / Eight High-performance Antennas / Blazing-fast Wired Performance /
      Elegant Design / Large Coverage
    </div>
    <div class="base-parameter-price">
      <div>
        1499
        <span>
          <s>1599</s>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseParameter"
  }
</script>

<style lang="stylus" scoped>
  .base-parameter
    // background:#71DD8A
    .activity
      display:flex
      max-width:100%
      height:86px
      line-height:86px
      padding:0 32px
      background:#f56600
      .activity-spike
        flex:1
        font-size:32px
        color:#fff
        span
          position:relative
          padding-left:20px
          &:before
            content:"￥"
            position:absolute
            left:0
            top:50%
            font-size:14px
            transform:translateY(-50%)
      .activity-date
        font-size:24px
        color:#fff
    .base-parameter-title
      font-size:40px
      line-height:1.2
      padding:32px 32px
    .base-parameter-desc
      padding:0 32px
      font-size:24px
      line-height:1.5
      color:rgba(0,0,0,.54)
    .base-parameter-price
      padding:20px 32px 32px
      div
        position:relative
        font-size:48px
        padding-left:30px
        color:#ff6700
        &:before
          content:"￥"
          display:block
          position:absolute
          left:0
          top:50%
          font-size:35px
          transform:translateY(-50%)
        span
          position:relative
          color:rgba(0,0,0,.54)
          font-size:24px
          padding-left:20px
          &:before
            content:"￥"
            display:block
            position:absolute
            left:0
            top:0
</style>
