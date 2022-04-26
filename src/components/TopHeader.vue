<template>
  <div class="mb-5 shadow main-menu">
        <b-container>
    <div>
      <b-nav>
        <b-nav-item to="/"
         :class="['item-first',{'active-item': $route.name=='UserList'}]">
        <font-awesome-icon icon="fa-solid fa-house" />
         صفحه اصلی 
         </b-nav-item>
        <b-nav-item to="/user-table" 
         :class="['item',{'active-item': $route.name=='UserTable'}]">
         جدول مدرسین 
         </b-nav-item>
      </b-nav>
    </div>
        </b-container>
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
.main-menu{
  padding: 20px;
  background: #f5fcfd;
}
.main-menu ul{
  padding-right: 0;
}
.item-first a{
  padding-right: 2px;
    padding-left: 5px;
    color: #2e3132;
}
.item{
margin-right: 5px;
}
.item a {
  color: #2e3132;
  }
.item a:hover , .item-first a:hover {
  color: #fff;
}
.item:hover, .item-first:hover {
  transition: 0.2s all ease-in-out;
  background: #1d1560;
  border-radius: 5px;
}
.active-item{
  background: #1d1560;
  border-radius: 5px;
}
.active-item a{
  color: #fff;
}
</style>
