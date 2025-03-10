<template>
  <div class="pt-5 mx-auto" :class="maxWidth">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: {
    type: String,
    default: "max-w-7xl",
  },
})
</script>

<style lang="scss" scoped></style>