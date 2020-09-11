import { mount } from '@vue/test-utils'
import ProductReviewsWidget from '../../lib/components/ProductReviewsWidget.vue'
import product from '../mocks/product'

const wrapper = mount(ProductReviewsWidget, {
  propsData: { product }
})

const component = wrapper.find('.loox-rating')

describe('ProductReviewsWidget', () => {
  it('should mount', () => {
    expect(component).not.toBeUndefined()
  })
})

describe('ProductReviewsWidget', () => {
  it('should decode the base64 product.pimSyncSourceProductId', () => {
    expect(wrapper.vm.productId).toEqual('4915681296519')
  })
})
