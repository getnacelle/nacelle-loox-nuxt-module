<!--
/****
/* The "Starship Furniture" store will load as default
/* content in the absence of page data supplied by a CMS
/****
-->
<template>
  <div class="page">
    <!-- Default content starts here -->
    <content-hero-banner
      id="hero-banner"
      imageUrl="https://nacelle-assets.s3-us-west-2.amazonaws.com/hero-banner.jpg"
      backgroundAltTag="Update your new Nacelle Store"
      :title="name"
      ctaText="Shop Now"
      ctaUrl="/shop"
      :ctaHandler="
        () => {
          this.$router.push('/shop')
        }
      "
    />
    <content-side-by-side
      imageUrl="https://nacelle-assets.s3-us-west-2.amazonaws.com/starship1.jpg"
      title="Image With Text"
      contentHtml="Connect Nacelle to your CMS to update content"
      ctaText="Shop Now"
      ctaUrl="/shop"
      backgroundColor="#f2eee8"
      :ctaHandler="
        () => {
          this.$router.push('/shop')
        }
      "
    />
    <content-side-by-side
      imageUrl="https://nacelle-assets.s3-us-west-2.amazonaws.com/starship2.jpg"
      title="Image With Text"
      contentHtml="Connect Nacelle to your CMS to update content"
      ctaText="Shop Now"
      ctaUrl="/shop"
      backgroundColor="#f2eee8"
      :reverseDesktop="true"
      :ctaHandler="
        () => {
          this.$router.push('/shop')
        }
      "
    />
    <loox-all-reviews />
  </div>
</template>

<script>
import nmerge from 'nuxt-merge-asyncdata'
import getPage from '~/mixins/getPage'
import getCollection from '~/mixins/getCollection'
import ContentHeroBanner from '~/components/nacelle/ContentHeroBanner'
import ContentSideBySide from '~/components/nacelle/ContentSideBySide'
import PageContent from '~/components/nacelle/PageContent'
export default nmerge({
  components: { ContentHeroBanner, ContentSideBySide, PageContent },
  computed: {
    name() {
      return this.$store.state.space.name
    }
  },
  mixins: [
    getPage({ pageHandle: 'homepage' }),
    getCollection({ collectionHandle: 'homepage' })
  ]
})
</script>
