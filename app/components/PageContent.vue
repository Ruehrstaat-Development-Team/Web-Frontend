<template>
  <div class="pt-5 mx-auto maxWidth" :class="maxWidth">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: {
    type: String,
    default: "w-[100em]",
  },
});
</script>

<style lang="scss" scoped>
.maxWidth {
  max-width: calc(90% - calc(var(--spacing) * 7));
}
</style>
