<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        v-bind="$attrs"
        :value="value"
        type="type"
        v-on="{
          ...$listeners,
          input: (event) => $emit('input', event.target.value),
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
    },
    type: {
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
