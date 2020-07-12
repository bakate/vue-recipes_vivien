<template>
  <section>
    <b-steps
      v-model="activeStep"
      animated
      rounded
      has-navigation
      icon-prev="arrow-left"
      icon-next="arrow-right"
      label-position="bottom"
      mobile-mode="minimalist"
    >
      <b-step-item step="1" label="Account" clickable>
        <h1 class="title has-text-centered">Account</h1>
        <StepOne />
      </b-step-item>

      <b-step-item step="2" label="Budget" clickable>
        <h1 class="title has-text-centered">Budget</h1>
        <StepTwo />
      </b-step-item>

      <b-step-item step="3" label="Campaign Details" clickable>
        <h1 class="title has-text-centered">Campaign Details</h1>
        <StepThree />
      </b-step-item>
    </b-steps>
  </section>
</template>

<script>
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import StepThree from '@/components/StepThree'
export default {
  components: {
    StepOne,
    StepTwo,
    StepThree,
  },
  data() {
    return {
      activeStep: 0,
    }
  },
}
</script>
