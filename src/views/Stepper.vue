<template>
  <div>
    <section class="section" style="padding-top: 0.5rem;">
      <div class="container">
        <div class="columns">
          <div class="column">
            <horizontal-stepper
              :steps="deepreach"
              @completed-step="completeStep"
              :top-buttons="true"
              @active-step="isStepActive"
              @stepper-finished="alert"
            ></horizontal-stepper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import HorizontalStepper from 'vue-stepper'

// This components will have the content for each stepper step.
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import StepThree from '@/components/StepThree'

export default {
  components: {
    HorizontalStepper,
  },
  data() {
    return {
      deepreach: [
        {
          icon: 'home',
          name: 'first',
          title: 'Company',
          // subtitle: 'Subtitle sample',
          component: StepOne,
          completed: false,
        },
        {
          icon: 'home',
          name: 'second',
          title: "Campaign's Budget",
          // subtitle: 'Subtitle sample',
          component: StepTwo,
          completed: false,
        },
        {
          icon: 'report_problem',
          name: 'third',
          title: 'Campaign Details',
          // subtitle: 'Subtitle sample',
          component: StepThree,
          completed: false,
        },
      ],
    }
  },
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.deepreach.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true
        }
      })
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.deepreach.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false
          }
        }
      })
    },
    // Executed when @stepper-finished event is triggered
    alert() {
      alert('congratulations!')
    },
  },
}
</script>
<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.pointer {
  cursor: pointer;
}

h1,
h2 {
  font-weight: normal;
}

hr {
  background-color: transparent;
  border: none;
  display: block;
  height: inherit;
  margin: 1.5rem 0;
  border-top: dashed 1px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #0b99b9;
  text-decoration: underline;
}

.text-medium-grey {
  color: #333;
}

.text-light-grey {
  color: #888;
}

.box.formated {
  position: relative;
  padding: 0;
}

.box.formated .heading {
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.8rem 1.5rem;
  background-color: #fafafa;
}

.box.formated .content {
  padding: 1rem 2rem;
}

i.top-left {
  position: absolute;
  left: 1.5rem;
  top: 0.8rem;
}

.vertical-separator {
  display: flex;
  justify-content: space-around;
}

.vertical-separator .line {
  border-right: 1px solid #cccccc;
}
</style>
