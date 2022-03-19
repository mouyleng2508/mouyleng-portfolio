<template>
  <div class="text-center py-16">
    <div class="font-medium text-gray-500 text-medium uppercase">
      {{ title }}
    </div>
    <div class="text-3xl font-light text-indigo-900 py-2 font-gochihand">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    subtitle: { type: String },
  },
};
</script>

<style lang="scss" scoped>
</style>