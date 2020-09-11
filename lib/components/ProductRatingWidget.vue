<template>
  <div class="loox-rating" data-fetch :data-id="productId"></div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    productId() {
      if (this.product && this.product.pimSyncSourceProductId) {
        return Buffer.from(this.product.pimSyncSourceProductId, "base64")
          .toString("binary")
          .split("/")
          .pop();
      }

      return null;
    },
  },
};
</script>
