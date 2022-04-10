<template>
<div>
    <div>
{{label}}
    </div>
   <textarea
    :placeholder="placeholder"
     @input="$emit('input', $event.target.value)"
     :rows="rows"
     :cols="cols"
     />
  </div>
</template>

<script>
export default {
name:'BaseTextArea',
props:{
    placeholder: String,
    label: String,
    rows: String,
    cols: String,
}
}
</script>

<style>
textarea {
  resize: none;
}
</style>