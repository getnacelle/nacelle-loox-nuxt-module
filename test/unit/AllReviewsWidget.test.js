import { mount } from '@vue/test-utils'
import AllReviewsWidget from '~/components/AllReviewsWidget.vue'

const wrapper = mount(AllReviewsWidget)
const component = wrapper.find('.loox-all-reviews')

describe('AllReviewsWidget', () => {
  it('should mount', () => {
    expect(component).not.toBeUndefined()
  })
})
