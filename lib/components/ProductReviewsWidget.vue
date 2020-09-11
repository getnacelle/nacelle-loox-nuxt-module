<template>
  <div id="looxReviews" class="loox-reviews" :data-product-id="productId"></div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    productId() {
      if (this.product && this.product.pimSyncSourceProductId) {
        return Buffer.from(this.product.pimSyncSourceProductId, 'base64')
          .toString('binary')
          .split('/')
          .pop()
      }

      return null
    }
  }
}
</script>
