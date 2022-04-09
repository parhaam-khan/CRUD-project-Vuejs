<template>
  <div class="mb-5">
    <div class="text-center mb-5 bg-light py-3">
      <h3 class="item-length">{{ users.length }} مورد نتایج جستجوی شما</h3>
    </div>
    <div>
      <b-nav>
        <b-nav-item class="first-item" disabled>
        <span class="ms-2"><font-awesome-icon icon="fa-solid fa-sort" /></span>  مرتب سازی بر اساس:
        </b-nav-item>
        <b-nav-item class="item"> محبوب ترین </b-nav-item>
        <b-nav-item class="item"> در دسترس ترین زمان </b-nav-item>
        <b-nav-item class="item"> بیشترین نظر </b-nav-item>
        <b-nav-item class="item"> ارزانترین </b-nav-item>
        <b-nav-item class="item"> گرانترین</b-nav-item>
        <b-nav-item class="item">جدیدترین</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
import { BNav, BNavItem } from "bootstrap-vue";
export default {
  components: {
    BNavItem,
    BNav,
  },
  props: ["users"],
};
</script>

<style scoped>
.item-length {
  color: #650952;
}
.first-item a {
  font-size: 18px;
  font-weight: 500;
}
.item a {
  color: #86928f;
}
.item a:hover {
  color: #fff;
}
.item:hover {
  transition: 0.2s all ease-in-out;
  background: #72175d;
  border-radius: 5px;
}
</style>
