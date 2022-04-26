<template>
  <div class="tab">
    <b-tabs active-nav-item-class="bg-light" content-class="mt-3" justified>
      <b-tab active>
        <template #title>
          <h6 class="text-muted">
            <font-awesome-icon icon="fa-solid fa-book" /> درباره کلاس ها
          </h6>
        </template>

        <ul class="my-5">
          <li
            class="mb-5 about-course"
            v-for="(course, index) in courses"
            :key="index"
          >
            <h5>{{ course.name }}</h5>
            <h6>
              {{ aboutClass }}
            </h6>
          </li>
        </ul>
      </b-tab>
      <b-tab>
        <template #title>
          <h6 class="text-muted">
            <font-awesome-icon icon="fa-solid fa-align-center" /> رزومه مدرس
          </h6>
        </template>
        <p>nothing</p>
      </b-tab>
      <b-tab>
        <template #title>
          <h6 class="text-muted">
            <font-awesome-icon icon="fa-solid fa-video" /> کالکشن ویدیوها
          </h6>
        </template>
        <p>nothing</p>
      </b-tab>
      <b-tab>
        <template #title>
          <h6 class="text-muted">
            <font-awesome-icon icon="fa-solid fa-comments" /> نظرات و امتیازات
          </h6>
        </template>
        <p>nothing</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "ClassTabs",
  props: ["courses", "aboutClass"],
};
</script>

<style>
ul li::marker {
  color: #2898c7;
}
.about-course {
  word-wrap: break-word;
}
.tab-active {
  background: #2898c7;
}
</style>
