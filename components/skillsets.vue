<template>
  <div class="bg-blue-50">
    <div class="p-8 lg:mx-16 lg:grid lg:grid-cols-2 lg:gap-x-10 font-sans">
      <div class="text-center flex flex-col items-center justify-center">
        <div class="text-indigo-900 text-2xl hover:font-light">
          {{ data.main.pointofview }}
        </div>
        <div class="font-normal text-sm text-indigo-900 pt-6 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          quia tempora optio expedita quam assumenda dolorum reprehenderit
          repellat magnam quos sapiente quisquam perferendis nam facilis
          molestias, esse earum aspernatur error?
        </div>
        <div></div>
      </div>
      <div>
        <div v-for="item in data.skillsets" :key="item.index" class="py-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-normal text-blue-900">{{
              item.name
            }}</span>
            <span class="text-sm font-medium text-blue-900"
              >{{ item.progress }}%</span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div
              class="bg-indigo-900 h-2.5 rounded-full"
              :style="`width: ${item.progress}%`"
            ></div>
          </div>
        </div>
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