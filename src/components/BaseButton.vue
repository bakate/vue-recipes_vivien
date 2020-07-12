<script>
export default {
  inheritAttrs: false,
}
</script>
<template>
  <b-button type="is-primary" v-on="$listeners" v-bind="$attrs">
    <slot>SUBMIT</slot>
  </b-button>
</template>
