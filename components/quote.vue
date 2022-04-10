<template>
  <div class="lg:p-32 p-8 lg:grid lg:grid-cols-2 lg:gap-x-5">
    <div class="text-center flex flex-col items-center justify-center">
      <div class="text-gray-500 text-3xl font-gochihand">Personal Quote</div>
      <div class="py-7 font-light text-indigo-900 font-sans">
        <span class="text-2xl font-semibold font-gochihand">" </span>
        {{ data.main.quote.text }}
        <span class="text-2xl font-semibold font-gochihand"> "</span>
      </div>
      <div></div>
    </div>
    <div class="transform transition duration-300 hover:scale-95 shadow-lg">
      <img
        :src="data.main.quote.img"
        alt="myphoto"
        class="object-cover h-full w-full rounded-lg"
      />
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