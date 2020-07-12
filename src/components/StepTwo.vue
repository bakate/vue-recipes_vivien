<template>
  <section>
    <BaseInput
      label="Campaign Name :"
      v-model="form.campaign_name"
      :type="{ 'is-danger': $v.form.campaign_name.$error }"
      @input="$v.form.campaign_name.$touch()"
      @blur="$v.form.campaign_name.$touch()"
      placeholder="Pick your campaign name"
    />
    <template v-if="$v.form.campaign_name.$error">
      <p v-if="!$v.form.campaign_name.required" class="help is-danger">
        Campaign name is required.
      </p>
      <p v-else-if="!this.$v.form.campaign_name.minLength" class="help is-danger">
        Campaign name must be at least 6 letters
      </p>
    </template>
    <BaseInput
      label="Budget in € :"
      v-model.number="form.campaign_budget"
      :type="{ 'is-danger': $v.form.campaign_budget.$error }"
      @input="$v.form.campaign_budget.$touch()"
      @blur="$v.form.campaign_budget.$touch()"
      placeholder="Your Budget"
    />
    <template v-if="$v.form.campaign_budget.$error">
      <p v-if="!$v.form.campaign_budget.required" class="help is-danger">
        Budget is required.
      </p>
    </template>
    <BaseInput
      label="Campaign Objective :"
      v-model="form.campaign_objective"
      :type="{ 'is-danger': $v.form.campaign_objective.$error }"
      @input="$v.form.campaign_objective.$touch()"
      @blur="$v.form.campaign_objective.$touch()"
      placeholder="Pick your campaign objective"
    />
    <template v-if="$v.form.campaign_objective.$error">
      <p v-if="!$v.form.campaign_objective.required" class="help is-danger">
        campaign_objective is required.
      </p>
    </template>
  </section>
</template>

<script>
import { required, integer, minLength } from 'vuelidate/lib/validators'

export default {
  props: ['clickedNext', 'currentStep'],

  data() {
    return {
      form: {
        campaign_budget: '',
        campaign_name: '',
        campaign_objective: '',
      },
    }
  },

  validations: {
    form: {
      campaign_name: {
        required,
        minLength: minLength(6),
      },
      campaign_budget: {
        required,
        integer,
      },
      campaign_objective: {
        required,
      },
    },
  },
}
</script>
