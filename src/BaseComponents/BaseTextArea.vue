<template>
  <div>
    <h5>
      {{ label }}
    </h5>
        <textarea
        class="textArea mt-3"
        :value="value"
          :placeholder="placeholder"
          @input="$emit('input', $event.target.value)"
          :rows="rows"
          :cols="cols"
          :maxlength = maxlength
        />
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    value: String,
    placeholder: String,
    label: String,
    rows: String,
    cols: String,
    maxlength: String
  },
};
</script>

<style>
.textArea {
  resize: none;
   width: 100%;
  border: 1px solid #7e7a89;
  border-radius: 5px;
}
textArea:focus{
    outline:none ;
    border: 2px solid #1a6883;
}

</style>
