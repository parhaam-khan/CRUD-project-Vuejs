<template>
  <div class="user-table">
    <!----------- when table is empty --------------->
    <div class="text-center" v-if="users.length === 0">
      <EmptyTeachers text="جدول" />
    </div>
    <!------------- teachers table ----------------->
    <div v-else>
      <div class="mb-3">
        <router-link class="plus-icon" to="/user-form">
          <span> مدرسی اضافه کنید </span>
        </router-link>
      </div>
      <div class="mt-5">
        <BaseTable :items="users" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseTable from "../BaseComponents/BaseTable.vue";
import EmptyTeachers from "../components/EmptyTeachers.vue";
import { mapGetters } from "vuex";
export default {
  name: "UserTable",

  components: {
    BaseTable,
    EmptyTeachers,
  },

  computed: {
    ...mapGetters(["users"]),
  },


};
</script>

<style scoped>
.user-table {
  margin-top: 7rem;
}
.add:hover,
.plus-icon:hover {
  background: #498a3c;
}
.plus-icon {
  text-decoration: none;
  padding: 5px 15px;
  background: #35823a;
  color: #fff;
  border-radius: 5px;
}
.plus-icon:hover {
  color: #fff;
}
</style>
