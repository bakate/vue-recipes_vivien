<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'home' }">
          Home
        </router-link>

        <router-link class="navbar-item" :to="{ name: 'stepper' }">
          Stepper
        </router-link>
        <router-link class="navbar-item" :to="{ name: 'anotherStepper' }">
          Another Stepper
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
