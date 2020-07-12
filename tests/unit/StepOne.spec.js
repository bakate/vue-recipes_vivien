import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import StepOne from '@/components/StepOne'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.component('BaseInput', BaseInput)
Vue.component('BaseButton', BaseButton)

Vue.use(Vuelidate)

const getComponent = (data = {}) => {
  return mount(StepOne, {
    data() {
      return {
        ...data,
      }
    },
  })
}

describe('@/components/Form', () => {
  it('renders props.msg when passed', () => {
    const component = getComponent()
    expect(component.isVueInstance()).toBeTruthy()
  })

  it('check if form is invalid when not inform the fields', () => {
    const component = getComponent()
    expect(component.vm.$v.company_name.$invalid).toBe(true)
    expect(component.vm.$v.email.$invalid).toBe(true)
    expect(component.vm.$v.company_id.$invalid).toBe(true)
  })

  it('check if form is invalid when inform invalid email', () => {
    const component = getComponent({
      company_name: 'deepreach',
      email: 'aze',
      company_id: 145633555,
    })

    component.vm.$v.$touch()

    expect(component.vm.$v.email.$invalid).toBe(true)
    expect(component.vm.$v.company_name.$invalid).toBe(false)
    expect(component.vm.$v.company_id.$invalid).toBe(false)
    // const error = component.find(".is-danger")
    // expect(error.text(0)).toBe('Provide a valid email')
  })
})
