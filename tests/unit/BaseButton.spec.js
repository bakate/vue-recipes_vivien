import BaseButton from '@/components/BaseButton'
import { mount } from '@vue/test-utils'

describe('@/components/BaseButton', () => {
  it('renders its content', () => {
    const slotContent = '<span>hello</span>'
    const { element } = mount(BaseButton, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
