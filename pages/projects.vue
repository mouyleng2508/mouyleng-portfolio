<template>
  <div class="px-8 lg:px-32 py-20">
    <Title title="Projects" subtitle="Project Lists" class="pt-0" />

    <!-- Cards start here -->
    <div class="lg:grid lg:grid-cols-2 gap-8 font-sans">
      <div
        class="
          bg-blue-50
          p-8
          lg:p-12
          text-blue-900
          relative
          max-h-84
          transform
          transition
          duration-300
          hover:scale-95 hover:shadow-lg
        "
        v-for="item in data.projects"
        :key="item.index"
      >
        <div class="text-2xl"><font-awesome-icon icon="briefcase" /></div>
        <div class="italic text-lg py-2 font-medium">
          {{ item.title }}
        </div>
        <div class="font-normal text-sm">
          <div class="flex py-1">
            <div class="w-1/3 font-medium">Company:</div>
            <div class="w-2/3">{{ item.company }}</div>
          </div>
          <div class="flex py-1">
            <div class="w-1/3 font-medium">Date:</div>
            <div class="w-2/3">{{ item.date }}</div>
          </div>
          <div class="flex py-1">
            <div class="w-1/3 font-medium">Status:</div>
            <div class="w-2/3">{{ item.status }}</div>
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
              {{ item.description }}
            </div>
          </div>
        </div>

        <!-- <div class="absolute bottom-8 right-10 italic text-sm capitalize pt-10">
          read more >><i class="fa-solid fa-right-long text-sm pl-2"></i>
        </div> -->
      </div>
    </div>
    <!-- Cards end here -->

    <!-- Design here -->
    <Title title="Design" subtitle="UX/UI Design" />

    <div
      class="
        lg:grid lg:grid-cols-2
        gap-8
        bg-blue-50
        rounded
        my-8
        border
        font-sans
      "
      v-for="item in data.design"
      :key="item.index"
    >
      <div
        class="
          lg:p-12
          p-8
          text-blue-900
          relative
          flex flex-col
          items-center
          justify-center
          text-center
        "
      >
        <div class="text-2xl"><font-awesome-icon icon="pen-ruler" /></div>
        <div class="italic text-xl py-2 font-medium">
          {{ item.title }} | {{ item.year }}
        </div>
        <div class="py-1 text-justify text-sm">
          {{ item.description }}
        </div>
        <!-- <div class="italic text-sm hover:underline capitalize pt-5">
          read more<i class="fa-solid fa-right-long text-sm pl-2"></i>
        </div> -->
      </div>
      <div class="hover:shadow-xl">
        <img
          :src="item.img"
          alt="myphoto"
          class="object-cover h-full w-full rounded"
        />
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