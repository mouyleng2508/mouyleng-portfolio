<template>
  <div class="lg:py-40 lg:px-32 px-8 py-12">
    <div class="md:grid md:grid-cols-3">
      <div
        class="transform transition duration-300 hover:scale-95 rotate-[-7deg]"
      >
        <img
          :src="data.main.image"
          alt="myphoto"
          class="object-cover h-5/6 w-5/6 rounded-lg"
        />
      </div>
      <div class="col-span-2 md:pl-16">
        <div
          class="
            pt-16
            md:pt-0
            text-transparent text-2xl
            font-bold
            bg-clip-text bg-gradient-to-r
            from-blue-900
            via-purple-400
            to-pink-200
          "
        >
          Hi, people call me {{ data.main.firstname }} or Momo!
        </div>
        <hr class="my-2" />
        <div
          class="flex flex-col space-y-2 text-xs text-indigo-900 font-medium"
        >
          <!-- <div>ヘン・ モイレン</div> -->
          <div>
            Newbie Plant Momma 🌱 👱🏻‍♀️ | Overthinker | Virgo ♍️ | Panda Lover 🐼
            💖
          </div>
        </div>
        <div
          class="
            pt-8
            font-normal
            text-sm text-indigo-900
            leading-6
            text-justify
            font-sans
          "
        >
          {{ data.main.bio }}
        </div>

        <!-- <div class="py-4">
          <hr />
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