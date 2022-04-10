<template>
  <div class="px-16 lg:px-32 py-20">
    <!-- Education Card starts here -->
    <Title title="Education" subtitle="My Educations" class="pt-0" />

    <div class="lg:grid lg:grid-cols-2 gap-8 font-sans">
      <div
        class="
          bg-blue-50
          p-12
          text-blue-900
          transform
          transition
          duration-300
          hover:scale-95 hover:shadow-lg
        "
        v-for="item in data.educations"
        :key="item.index"
      >
        <div class="text-2xl">
          <font-awesome-icon icon="graduation-cap" />
        </div>
        <div class="italic text-lg py-2 font-medium">
          {{ item.type }}
        </div>
        <div class="font-normal text-sm">
          <div class="flex py-1">
            <div class="w-1/5 font-medium">School:</div>
            <div class="w-4/5">{{ item.school }}</div>
          </div>
          <div class="flex py-1">
            <div class="w-1/5 font-medium">Year:</div>
            <div class="w-4/5">{{ item.year }}</div>
          </div>
          <div class="flex py-1">
            <div class="w-1/5 font-medium">Level:</div>
            <div
              class="
                w-4/5
                overflow-ellipsis overflow-hidden
                max-h-20
                text-justify
              "
            >
              {{ item.grade }}
            </div>
          </div>
        </div>

        <!-- <div class="text-right italic text-sm underline capitalize">
          read more<i class="fa-solid fa-right-long text-sm pl-2"></i>
        </div> -->
      </div>
    </div>
    <!-- End of Education Card -->

    <!-- Start of work experiences -->

    <Title title="Work" subtitle="My Work Experiences" />

    <div class="lg:grid lg:grid-cols-2 gap-8 font-sans">
      <div
        class="
          bg-blue-50
          p-12
          text-blue-900
          transform
          transition
          duration-300
          hover:scale-95 hover:shadow-lg
        "
      >
        <div class="text-2xl">
          <font-awesome-icon icon="briefcase" />
        </div>
        <div class="italic text-lg py-2 font-medium">
          {{ data.work.position }}
        </div>
        <div class="font-normal text-sm">
          <div class="flex py-1">
            <div class="w-1/3 font-medium">Name:</div>
            <div class="w-2/3">{{ data.work.company }}</div>
          </div>
          <div class="flex py-1">
            <div class="w-1/3 font-medium">Year:</div>
            <div class="w-2/3">{{ data.work.year }}</div>
          </div>
          <div class="flex py-1">
            <div class="w-1/3 font-medium">Description:</div>
            <div
              class="
                w-2/3
                overflow-ellipsis overflow-hidden
                max-h-full
                text-justify
              "
            >
              {{ data.work.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of work experiences -->

    <!-- Start Achievement -->
    <Title title="Achievements" subtitle="Personal Award" />

    <div class="lg:grid lg:grid-cols-2 gap-8 font-sans">
      <div
        class="
          bg-blue-50
          p-12
          text-indigo-900
          transform
          transition
          duration-300
          hover:scale-95 hover:shadow-lg
        "
        v-for="item in data.achievements"
        :key="item.index"
      >
        <!-- <div class="text-2xl"><i class="fa-solid fa-medal"></i></div> -->
        <div class="text-2xl"><font-awesome-icon icon="medal" /></div>
        <div class="italic text-lg py-2 font-medium">
          {{ item.title }}
        </div>
        <div class="font-normal text-sm">
          <div>
            {{ item.details }}
          </div>
        </div>

        <!-- <div
          class="
            text-right
            italic
            text-sm
            hover:text-blue-300
            underline
            capitalize
          "
        >
          read more<i class="fa-solid fa-right-long text-sm pl-2"></i>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import data from "~/static/api/data.json";
export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>