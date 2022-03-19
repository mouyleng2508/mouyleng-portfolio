<template>
  <div class="font-poppins flex flex-col justify-between h-screen">
    <nav class="px-16 lg:px-32 pt-16 text-blue-900">
      <div class="flex items-center justify-between">
        <nuxt-link to="/" class="text-2xl font-poppins py-2 font-normal">
          Mouyleng Portfolio
        </nuxt-link>
        <div class="text-lg">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg> -->
        </div>
      </div>
      <hr />

      <div class="flex flex-wrap justify-between">
        <div class="lg:flex text-sm" :class="open ? 'block' : 'hidden'">
          <div class="lg:flex-grow">
            <div class="pr-4 py-2 block lg:inline-block">
              <nuxt-link
                class="font-normal p-2 hover:bg-blue-100 hover:rounded-md"
                to="/about"
              >
                ABOUT
              </nuxt-link>
            </div>
            <div class="pr-4 py-2 block lg:inline-block">
              <nuxt-link
                class="font-normal p-2 hover:bg-blue-100 hover:rounded-md"
                to="/projects"
              >
                PROJECT
              </nuxt-link>
            </div>
            <div class="pr-4 py-2 block lg:inline-block">
              <nuxt-link
                class="font-normal p-2 hover:bg-blue-100 hover:rounded-md"
                to="/contact"
              >
                CONTACTS
              </nuxt-link>
            </div>
            <div class="pr-8 py-2 lg:inline-block block">
              <div class="p-2 hover:bg-blue-100 hover:rounded-md font-normal">
                <a href="/HengMouylengCV.pdf" download=""
                  >CV
                  <span class="pl-1"><font-awesome-icon icon="download" /></span
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:hidden block py-2">
          <button
            @click="toggle"
            class="
              flex
              items-center
              text-blue-900
              hover:text-blue-800
              rounded-full
            "
          >
            <font-awesome-icon icon="bars" />
          </button>
        </div>
      </div>
    </nav>

    <nuxt />

    <footer>
      <hr />
      <div
        class="
          text-indigo-900
          py-5
          px-16
          lg:px-32 lg:flex lg:justify-between lg:items-center
        "
      >
        <div class="text-sm font-light text-indigo-900 font-sans">
          mouyleng-h © Copyright 2022. Developed by Heng Mouyleng with
          <span class="font-bold"
            ><a target="_blank" href="https://nuxtjs.org/">Nuxtjs</a></span
          >
          x
          <span class="font-bold"
            ><a target="_blank" href="https://tailwindcss.com/"
              >tailwindcss</a
            ></span
          >
        </div>
        <div class="flex text-md">
          <a class="p-2" :href="`${data.main.social.codewar}`" target="_blank"
            ><font-awesome-icon icon="code" class="hover:text-lg"
          /></a>
          <a class="p-2" :href="`${data.main.social.github}`" target="_blank"
            ><font-awesome-icon
              :icon="['fab', 'github-alt']"
              class="hover:text-lg"
          /></a>
          <a class="p-2" :href="`${data.main.social.facebook}`" target="_blank"
            ><font-awesome-icon
              :icon="['fab', 'facebook']"
              class="hover:text-lg"
          /></a>
          <a class="p-2" :href="`${data.main.social.instagram}`" target="_blank"
            ><font-awesome-icon
              :icon="['fab', 'instagram']"
              class="hover:text-lg"
          /></a>
          <a class="p-2" :href="`${data.main.social.twitter}`" target="_blank"
            ><font-awesome-icon
              :icon="['fab', 'twitter']"
              class="hover:text-lg"
          /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import data from "~/static/api/data.json";
export default {
  data() {
    return {
      data: data,
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>