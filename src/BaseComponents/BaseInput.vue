<template>
  <div class="base-input">
    <div class="mb-2">
      <h5> {{ label }} </h5>
    </div>
        <input
        ref="baseinput"
    :class="_class"
    :value="value"
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
    value: String,
    label: String,
    type: String,
    placeholder: String,
    min: String,
    max: String,
    step: String,
    _class:String,
  },
  methods:{
    
  }
};
</script>

<style scoped>
.base-input {
  margin: 25px 0 0;
}
input{
  width: 100%;
  border: 1px solid #7e7a89;
  border-radius: 5px;
}
input:focus{
    outline:none ;
    border: 2px solid #1a6883;
}


</style>
