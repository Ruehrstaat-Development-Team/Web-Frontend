<template>
  <SidebarMenu>
    <NavigationSidebarMenuItemCollapsible
      :item="selectedItem"
      v-if="selectedItem.children"
    />
    <NavigationSidebarMenuItemStatic :item="selectedItem" v-else />
  </SidebarMenu>
</template>

<script lang="ts" setup>
defineProps({
  selectedItem: {
    type: Object as PropType<SidebarMenuItem>,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
