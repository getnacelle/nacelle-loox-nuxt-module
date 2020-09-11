import Vue from 'vue'
import ProductRatingWidget from './nacelle/integrations/ProductRatingWidget'
import ProductReviewsWidget from './nacelle/integrations/ProductReviewsWidget'
import AllReviewsWidget from './nacelle/integrations/AllReviewsWidget'

Vue.component('loox-product-rating', ProductRatingWidget)
Vue.component('loox-product-reviews', ProductReviewsWidget)
Vue.component('loox-all-reviews', AllReviewsWidget)
