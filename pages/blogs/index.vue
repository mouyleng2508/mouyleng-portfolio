<template>
  <div class="px-16 lg:px-32 py-20">
    <Title title="Blogs" subtitle="My stories" class="pt-0" />

    <Card />
  </div>
</template>

<script>
import Card from "~/components/blog/card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
</style>