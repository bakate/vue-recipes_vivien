<template>
  <b-navbar>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ name: 'home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'anotherStepper' }">
        Another Stepper
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {}
</script>
