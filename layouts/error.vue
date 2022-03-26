<template>
  <div
    class="
      md:flex
      justify-center
      items-center
      text-blue-900
      md:mt-10
      mt-5
      mx-10
    "
  >
    <div class="max-w-screen-lg">
      <img :src="data.error.img" class="" alt="404 . . . Not Found" />
    </div>
    <div class="text-primary-900 m-7 md:text-left text-center">
      <div class="md:text-5xl text-3xl font-gochihand capitalize">
        Ooops . . .
      </div>
      <!-- <div>Page not found!</div> -->
      <div class="md:text-2xl text-xl font-medium py-2 pt-4">
        Page Not Found
      </div>
      <div class="text-gray-600 font-poppins">
        The page you are looking for doesn't exist!
      </div>
    </div>
    <!-- <div class="flex flex-col items-center font-sans text-blue-900">
        <div class="text-3xl font-gochihand capitalize">
          Ooops . . . Page not found!
        </div>
        <div class="text-gray-600 pt-3 font-poppins">
          Sorry! The page you are looking for doesn't exist!
        </div>
      </div> -->
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

<style  scoped>
</style>