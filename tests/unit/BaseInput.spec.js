import BaseInput from '@/components/BaseInput'
import { mount } from '@vue/test-utils'

describe('@/components/BaseInput', () => {
  it('works with v-model', () => {
    const wrapper = mount(BaseInput, { propsData: { value: 'aaaaa', label: 'name' } })
    const inputWrapper = wrapper.find('input')
    const inputEl = inputWrapper.element

    // Has the correct starting value
    expect(inputEl.value).toEqual('aaaaa')

    // Emits an update event with the correct value when edited
    inputEl.value = 'bbbbb'
    inputWrapper.trigger('input')
    expect(wrapper.emitted().input).toEqual([['bbbbb']])
  })
})
