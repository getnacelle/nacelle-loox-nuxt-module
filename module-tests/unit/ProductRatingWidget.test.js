import { mount } from '@vue/test-utils'
import ProductRatingWidget from '../../lib/components/ProductRatingWidget.vue'
import product from '../mocks/product'

const wrapper = mount(ProductRatingWidget, {
  propsData: { product }
})

const component = wrapper.find('.loox-rating')

describe('ProductRatingWidget', () => {
  it('should mount', () => {
    expect(component).not.toBeUndefined()
  })
})

describe('ProductRatingWidget', () => {
  it('should decode the base64 product.pimSyncSourceProductId', () => {
    expect(wrapper.vm.productId).toEqual('4915681296519')
  })
})
