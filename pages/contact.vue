<template>
  <div class="px-28 lg:px-32 py-20">
    <Title title="Contact" subtitle="Get to Know Me" class="pt-0" />

    <div class="lg:grid lg:grid-cols-2 gap-6 text-blue-900 font-sans">
      <div>
        <div
          class="flex items-center py-4"
          v-for="item in data.contact"
          :key="item.index"
        >
          <div class="pr-10 text-xl">
            <font-awesome-icon :icon="`${item.icon}`" />
          </div>
          <div class="font-medium pl-2">
            {{ item.text }}
            <div class="font-light">{{ item.info }}</div>
          </div>
        </div>
      </div>
      <div class="pl-0 lg:pl-12">
        <!-- Facebook -->
        <div class="flex items-center py-4">
          <div class="pr-10 text-xl">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </div>
          <div class="font-medium pl-2">
            <div class="font-medium hover:underline">
              <a :href="data.social.facebook.url" target="_blank">{{
                data.social.facebook.username
              }}</a>
            </div>
          </div>
        </div>
        <!-- github -->
        <div class="flex items-center py-4">
          <div class="pr-10 text-xl">
            <font-awesome-icon :icon="['fab', 'github']" />
          </div>
          <div class="font-medium pl-2">
            <div class="font-medium hover:underline">
              <a :href="data.social.github.url" target="_blank">{{
                data.social.github.username
              }}</a>
            </div>
          </div>
        </div>
        <!-- Codewar -->
        <div class="flex items-center py-4">
          <div class="pr-10 text-xl">
            <font-awesome-icon icon="code" />
          </div>
          <div class="font-medium pl-2">
            <div class="font-medium hover:underline">
              <a :href="data.social.codewar.url" target="_blank">{{
                data.social.codewar.username
              }}</a>
            </div>
          </div>
        </div>
        <!-- Twitter-- -->
        <div class="flex items-center py-4">
          <div class="pr-10 text-xl">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </div>
          <div class="font-medium pl-2">
            <div class="font-medium hover:underline">
              <a :href="data.social.twitter.url" target="_blank">{{
                data.social.twitter.username
              }}</a>
            </div>
          </div>
        </div>
        <!-- Instagram -->
        <div class="flex items-center py-4">
          <div class="pr-10 text-xl">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </div>
          <div class="font-medium pl-2">
            <div class="font-medium hover:underline">
              <a :href="data.social.instagram.url" target="_blank">{{
                data.social.instagram.username
              }}</a>
            </div>
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