<!---------- teacher-list as home page --------->

<template>
  <div class="user-list">
    <!-------- when there is no teacher ------------->
    <div class="text-center" v-if="users.length === 0">
      <EmptyTeachers text="لیست" />
    </div>
    <!-- teachers that are added -->
    <div class="mb-5" v-for="(user, index) in users" :key="index">
      <SingleUser :user="user" />
    </div>
  </div>
</template>

<script>
import EmptyTeachers from "../components/EmptyTeachers.vue";
import { mapGetters } from "vuex";
import SingleUser from "../components/SingleUser.vue";
export default {
  components: {
    SingleUser,
    EmptyTeachers,
  },

  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style>
.user-list {
  margin-top: 7rem;
}
.add-teacher {
  text-decoration: none;
  color: #fff;
}
.add-teacher:hover {
  color: #fff;
}
.add {
  padding: 7px 15px;
  background: #35823a;
  border-radius: 5px;
}
.add:hover {
  background: #498a3c;
}
</style>
