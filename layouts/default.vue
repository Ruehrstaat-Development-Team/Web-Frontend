<template>
  <SidebarProvider @update:open="openUpdated" :default-open="persistentStore.sidebarOpen">
    <NavigationSidebar />
    <main class="relative transition-width duration-300" :style="{ 'width': persistentStore.sidebarOpen ? 'calc(100% - var(--sidebar-width))' : 'calc(100% - var(--sidebar-width-icon))' }">
      <slot />
    </main>
  </SidebarProvider>
</template>

<script lang="ts" setup>
const persistentStore = usePersistentStore();
const openUpdated = function (open: boolean) {
  persistentStore.setSidebarOpen(open);
};
</script>

<style lang="scss" scoped>

</style>