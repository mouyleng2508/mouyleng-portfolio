<template>
  <div class="px-16 lg:px-32 py-20 text-center">
    <div class="font-sans">
      <div class="font-semibold text-gray-500 text-2xl pb-3 font-gochihand">
        GET IN TOUCH
      </div>
      <div class="text-sm font-normal text-indigo-900 py-1">
        {{ data.main.address }}
      </div>
      <div class="text-sm font-normal text-indigo-900 py-1">
        {{ data.main.email }}
      </div>
      <div class="text-sm font-normal text-indigo-900 py-1">
        {{ data.main.phone }}
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