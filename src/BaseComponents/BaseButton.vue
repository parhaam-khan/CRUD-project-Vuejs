<template>
  <button :class="_class" :type="type" @click="$emit('clickHandler', $event)">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'BaseButton',
props:{
    type: String,
    text: String,
    _class: String,
}
}
</script>

<style>

</style>