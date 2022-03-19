<template>
  <div>
    <section class="py-40 px-16 lg:px-32">
      <div class="md:grid md:grid-cols-3">
        <div
          class="
            transform
            transition
            duration-300
            hover:scale-95
            rotate-[-7deg]
          "
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
            <!-- <a href="https://www.facebook.com/zemnanet" target="_blank">
              <font-awesome-icon icon="facebook" />
            </a> -->
            <!-- <font-awesome-icon :icon="['fas', 'coffee']" /> -->
            <!-- <font-awesome-icon icon="dollar-sign" style="font-size: 30px" /> -->
            <!-- <font-awesome-icon icon="fa-brands fa-facebook" /> -->
          </div>
          <!-- <div
            class="text-3xl font-extralight text-blue-900 py-2 leading-normal"
          >
            I'm <span class="font-semibold">{{ data.main.name }}</span
            >, Frontend Web Developer, UX/UI Designer
          </div> -->
          <div
            class="
              py-8
              font-normal
              text-sm text-indigo-900
              leading-6
              text-justify
              font-sans
            "
          >
            {{ data.main.bio }}
          </div>

          <div class="py-4">
            <hr />
          </div>

          <!-- <div class="flex justify-between">
            <div>
              <div>
                Name: <span>{{ data.main.name }}</span>
              </div>
              <div class="pr-6">
                From: <span>{{ data.main.address }}</span>
              </div>
            </div>
            <div>
              <div>
                Date of Birth: <span>{{ data.main.dateofbirth }}</span>
              </div>
              <div>
                Email: <span>{{ data.main.email }}</span>
              </div>
            </div>
          </div> -->

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