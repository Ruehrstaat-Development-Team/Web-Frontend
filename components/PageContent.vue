<template>
  <div class="pt-5 mx-auto max-w-[90%]" :class="maxWidth">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: {
    type: String,
    default: "w-[100em]",
  },
})
</script>

<style lang="scss" scoped></style>