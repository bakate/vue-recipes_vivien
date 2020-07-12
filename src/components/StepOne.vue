<template>
  <div style="padding: 2rem 3rem; text-align: left;">
    <BaseInput
      label="Company Name :"
      v-model="company_name"
      :class="[$v.company_name.$error ? 'is-danger' : '']"
      @input="$v.company_name.$touch()"
      @blur="$v.company_name.$touch()"
      placeholder="Pick a company_name"
    />
    <template v-if="$v.company_name.$error">
      <p v-if="!$v.company_name.required" class="help is-danger">
        Company name is required.
      </p>
      <p v-else-if="!this.$v.company_name.minLength" class="help is-danger">
        Company name must be at least 3 letters
      </p>
    </template>
    <BaseInput
      label="Company Id :"
      v-model="company_id"
      :class="[$v.company_id.$error ? 'is-danger' : '']"
      @input="$v.company_id.$touch()"
      @blur="$v.company_id.$touch()"
      placeholder="Your company id"
    />
    <template v-if="$v.company_id.$error">
      <p v-if="!$v.company_id.required" class="help is-danger">
        Company Id is required.
      </p>
    </template>
    <BaseInput
      label="Email :"
      v-model="email"
      :class="[$v.email.$error ? 'is-danger' : '']"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
      placeholder="Pick an email"
    />
    <template v-if="$v.email.$error">
      <p v-if="!$v.email.required" class="help is-danger">
        Email is required.
      </p>
      <p v-else-if="!this.$v.email.email" dataset-id="text" class="help is-danger">
        Provide a valid email
      </p>
    </template>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  props: ['clickedNext', 'currentStep'],

  data() {
    return {
      company_name: '',
      company_id: '',
      email: '',
    }
  },

  validations: {
    company_name: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    company_id: {
      required,
    },
  },
  watch: {
    $v: {
      handler: function (val) {
        if (!val.$invalid) {
          this.$emit('can-continue', { value: true })
        } else {
          this.$emit('can-continue', { value: false })
          setTimeout(() => {
            this.$emit('change-next', { nextBtnValue: false })
          }, 3000)
        }
      },
      deep: true,
    },

    clickedNext(val) {
      console.log(val)
      if (val === true) {
        this.$v.$touch()
      }
    },
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit('can-continue', { value: true })
    } else {
      this.$emit('can-continue', { value: false })
    }
  },
}
</script>
