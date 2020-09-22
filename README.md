# nacelle-loox-nuxt-module

Adds Vue.js components for integrating [Loox](https://loox.app/) product reviews in your [Nacelle](https://getnacelle.com/) Nuxt project.

## Requirements

- A Nacelle project set up locally. To get started, refer to [the Nacelle docs](https://docs.getnacelle.com).
- Loox product reviews exist for your Shopify site.

## Setup

### Add Module to Nacelle

Once you have Nacelle set up, you can install this module in your project from `npm`:

```sh
npm install @nacelle/nacelle-loox-nuxt-module --save
```

After the package has installed, open `nuxt.config.js`. Under `modules` add `@nacelle/nacelle-loox-nuxt-module` to the array:

```js
modules: [
  // ...other modules,
  '@nacelle/nacelle-loox-nuxt-module'
],
```

Then add your store's Shopify domain to your environment variables `.env` file:

```sh
# example: "starship-furniture" for "starship-furniture.myshopify.com"
SHOPIFY_DOMAIN=xxxxxxxxxxxxx
```

Lastly, add the environment variable to the `nacelle` block of `nuxt.config.js`:

```javascript
# nuxt.config.js
nacelle: {
  // ...other Nacelle config
  shopifyDomain: process.env.SHOPIFY_DOMAIN
}
```

### Add the components to your Nacelle Storefront

There are three components you can add to your Nacelle site: `<loox-product-rating />`, `<loox-product-reviews />`, and `<loox-all-reviews />`.

**Loox Product Reviews** will display a grid of product reviews for a particular product. Add this component to `pages/products/_handle.vue` or anywhere you use products and pass the product object as a prop:

```html
<loox-product-reviews :product="product" />
```

**Loox Product Rating** will display a star rating for a product along w/ the number of reviews. Add this component to either `components/ProductDetails.vue` or `components/ProductCard.vue`. It accepts the product object as a prop:

```html
<loox-product-rating :product="product" />
```

**Loox All Reviews** will display a grid of all product reviews across multiple products. It accepts no props.

```html
<loox-all-reviews />
```
