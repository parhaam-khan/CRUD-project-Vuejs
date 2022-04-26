<template>
  <b-modal :id="id" hide-footer hide-header>
    <div class="delete-modal-text text-center">
      <h4>
        آیا از حذف
        {{ text }}
        <span class="user-name"> {{ name }} {{ family }}</span>
        مطمئن هستید؟
      </h4>
    </div>
    <div class="delete-modal-button text-center">
      <BaseButton
        class="delete-modal-button-yes"
        @clickHandler="$emit('deleteuser')"
      >
        بله
      </BaseButton>
      <BaseButton
        class="delete-modal-button-no"
        @clickHandler="$emit('notdelete')"
        >خیر</BaseButton
      >
    </div>
  </b-modal>
</template>

<script>
import BaseButton from "../BaseComponents/BaseButton.vue";

export default {
  name: "DeleteModal",
  props: {
    id: String,
    name: String,
    family: String,
    text: String,
  },
  components: {
    BaseButton,
  },
};
</script>

<style>
.user-name {
  color: #005a5b;
}
.delete-modal-text {
  font-family: Vazir;
  padding: 50px;
}
.delete-modal-button {
  font-family: Vazir;
}
.delete-modal-button-yes,
.delete-modal-button-no {
  padding: 7px 20px;
  border: none;
  color: aliceblue;
  border-radius: 5px;
}
.delete-modal-button-yes {
  background: #fd665d;
}
.delete-modal-button-no {
  margin-right: 10px;
  background: #3ed8fd;
}
</style>
