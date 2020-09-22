import { mount } from '@vue/test-utils'
import ProductReviewsWidget from '~/components/ProductReviewsWidget.vue'
import product from '../mocks/product'

const wrapper = mount(ProductReviewsWidget, {
  propsData: { product }
})

const component = wrapper.find('.loox-rating')

describe('ProductReviewsWidget', () => {
  it('should mount', () => {
    expect(component).not.toBeUndefined()
  })

  it('should decode the base64 product.pimSyncSourceProductId', () => {
    expect(wrapper.vm.productId).toEqual(product.productId)
  })
})
