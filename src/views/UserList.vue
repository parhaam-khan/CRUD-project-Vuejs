<template>
  <div>
    <TopHeader :users="users" />
    <b-container>
      <div class="mb-5" v-for="(user, index) in users" :key="index">
        <SingleUser :user="user" />
      </div>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";
import users from "../users";
import TopHeader from "../components/TopHeader.vue";
import SingleUser from "../components/SingleUser.vue";
export default {
  components: {
    BContainer,
    SingleUser,
    TopHeader,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.users = users;
  },
};
</script>

<style></style>
