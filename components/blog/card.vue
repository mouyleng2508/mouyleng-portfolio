<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-7">
      <div v-for="item in data.blogs" :key="item.index" class="">
        <nuxt-link :to="`/blog/${item.id}`">
          <div class="rounded max-w-lg hover:shadow-2xl">
            <div>
              <img
                class="object-none h-52 w-full rounded-t-lg"
                :src="item.image"
                alt="Blog Image"
              />
            </div>
            <hr />
            <div class="p-5">
              <a href="#">
                <div class="mb-2 text-xl font-bold font-sans text-blue-900">
                  {{ item.title }}
                </div>
              </a>
              <div class="text-xs text-gray-500">
                {{ item.date }}
                <span><span class="text-blue-900">•</span> 2 mins read</span>
              </div>
            </div>
          </div>
        </nuxt-link>
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