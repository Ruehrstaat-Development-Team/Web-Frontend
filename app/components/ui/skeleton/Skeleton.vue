<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div :class="cn('loader rounded-md', props.class)" />
</template>

<style lang="scss" scoped>
:root.light {
  .loader {
    background: linear-gradient(-45deg, #eeeeeeaa 40%, #fafafadd 50%, #eeeeeeaa 60%);
    background-size: 300%;
    background-position-x: 120%;
    animation: shimmer 1s infinite linear;
  }
}

:root.dark {
  .loader {
    background: linear-gradient(-45deg, #33333355 40%, #44444488 50%, #33333355 60%);
    background-size: 300%;
    background-position-x: 120%;
    animation: shimmer 1s infinite linear;
  }
}

@keyframes shimmer {
  to {
    background-position-x: -20%;
  }
}
</style>
