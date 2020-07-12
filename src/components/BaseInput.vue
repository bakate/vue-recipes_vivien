<template>
  <b-field :label="label" v-bind="$attrs">
    <b-input
      :value="value"
      :type="inputType"
      v-on="{
        ...$listeners,
        input: (event) => $emit('input', event),
      }"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
    },
    inputType: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
