<script>
export default {
  inheritAttrs: false,
}
</script>
<template>
  <button class="button is-primary" v-on="$listeners" v-bind="$attrs">
    <slot>SUBMIT</slot>
  </button>
</template>
