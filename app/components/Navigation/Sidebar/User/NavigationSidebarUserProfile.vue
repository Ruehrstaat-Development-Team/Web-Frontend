<template>
  <div class="flex flex-row items-center gap-3 w-full">
    <div class="flex items-center justify-center bg-primary text-primary-foreground rounded-sm p-1 size-7 min-h-7 min-w-7 align-middle">
      <LucideUser :size="16" />
    </div>
    <span class="grow flex flex-col justify-center items-start">
      <span class="leading-none whitespace-nowrap text-sm max-w-36 overflow-hidden text-ellipsis">{{ user?.nickname }}</span>
      <span class="text-xs text-muted-foreground max-w-36 overflow-hidden text-ellipsis">{{ user?.email }}</span>
    </span>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  user: Object as PropType<User>,
});
</script>

<style lang="scss" scoped></style>
