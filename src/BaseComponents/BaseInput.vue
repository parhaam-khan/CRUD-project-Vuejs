<template>
  <div class="input">
    {{ label }}
    <input
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: String,
    type: String,
    placeholder: String,
    min: String,
    max: String,
    step: String,
  },
};
</script>

<style scoped>
.input {
  margin: 10px 0;
}
</style>
