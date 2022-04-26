<template>
  <div class="tags">
    <div>
      <button class="tag-button-larger">
        <font-awesome-icon icon="fa-solid fa-tag" />
        ریاضی
      </button>
      <button class="tag-button">
        <font-awesome-icon icon="fa-solid fa-tag" />
        فیزیک
      </button>
    </div>
    <div>
      <button class="tag-button">
        <font-awesome-icon icon="fa-solid fa-tag" />
        شیمی
      </button>
      <button class="tag-button-larger">
        <font-awesome-icon icon="fa-solid fa-tag" />
        زیست شناسی
      </button>
    </div>
    <div>
      <button class="tag-button-larger">
        <font-awesome-icon icon="fa-solid fa-tag" />
        ادبیات
      </button>
      <button class="tag-button">
        <font-awesome-icon icon="fa-solid fa-tag" />
        روانشناسی
      </button>
    </div>
    <div>
      <button class="tag-button">
        <font-awesome-icon icon="fa-solid fa-tag" />
        نویسندگی
      </button>
      <button class="tag-button-larger">
        <font-awesome-icon icon="fa-solid fa-tag" />
        فیزیک هسته ای
      </button>
    </div>
    <div>
      <button class="tag-button-larger">
        <font-awesome-icon icon="fa-solid fa-tag" />
        تئاتر و سینما
      </button>
      <button class="tag-button">
        <font-awesome-icon icon="fa-solid fa-tag" />
        ورزش
      </button>
    </div>
    <div>
      <button class="tag-button">
        <font-awesome-icon icon="fa-solid fa-tag" />
        هندسه
      </button>
      <button class="tag-button-larger">
        <font-awesome-icon icon="fa-solid fa-tag" />
        بیولوژی
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseTag",
};
</script>

<style>
.tags {
  width: 13rem;
  margin-top: 70px;
}
.tag-button {
  padding: 5px 7px;
  margin: 5px 5px;
  border: none;
  border-radius: 5px;
  background: #e6e7e9;
  color: #63666d;
}
.tag-button-larger {
  padding: 5px 7px;
  margin: 5px 5px;
  border: none;
  border-radius: 5px;
  background: #e6e7e9;
  color: #63666d;
}
</style>
