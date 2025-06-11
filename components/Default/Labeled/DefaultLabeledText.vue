<template>
  <div>
    <p class="text-sm font-medium text-muted-foreground">
      {{ label }}
    </p>
    <p class="text-lg font-semibold text-card-foreground">
      {{ value }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
