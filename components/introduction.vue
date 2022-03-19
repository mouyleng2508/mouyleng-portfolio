<template>
  <div>
    <section class="py-40 bg-blue-50 px-16 lg:px-32">
      <div class="md:grid md:grid-cols-3">
        <div class="transform transition duration-300 hover:scale-95 shadow-lg">
          <img
            :src="data.main.image"
            alt="myphoto"
            class="object-cover h-full w-full rounded-lg"
          />
        </div>
        <div
          class="
            col-span-2
            md:pl-16
            font-sans
            text-sm
            font-normal
            text-indigo-900
            pt-4
          "
        >
          <div class="text-3xl text-gray-600 font-gochihand">WHO AM I?</div>
          <!-- <div
            class="text-3xl font-extralight text-blue-900 py-2 leading-normal"
          >
            I'm <span class="font-semibold">{{ data.main.name }}</span
            >, Frontend Web Developer, Software Engineer, UX/UI Designer
          </div> -->
          <div class="leading-6 text-justify py-4">
            {{ data.main.bio }}
          </div>

          <!-- <button
            class="
              bg-blue-900
              hover:bg-indigo-800
              text-white text-sm
              font-light
              mt-8
              py-2
              px-4
              rounded
            "
          >
            <a href="/HengMouylengCV.pdf" download=""></a>
            Download CV
          </button> -->
          <hr />
          <div class="py-4 pb-2">
            If you want to know more
            <span class="font-bold hover:underline">
              <nuxt-link to="/about">about me</nuxt-link> </span
            >.
          </div>
          <div>Thanks for dropping by,</div>
          <div class="py-2 font-gochihand text-xl text-gray-600">
            {{ data.main.firstname }}
          </div>
        </div>
      </div>
    </section>
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