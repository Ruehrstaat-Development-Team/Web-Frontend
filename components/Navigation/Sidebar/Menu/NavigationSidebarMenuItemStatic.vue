<template>
  <SidebarMenuItem>
    <SidebarMenuButton
      :tooltip="item.title"
      :is-active="
        route.name?.toString().startsWith('localized-' + item.urlCompare)
      "
      as-child
    >
      <i18n-link
        :to="item.location"
        class="w-full !text-md flex flex-row items-center py-5 pr-3 pl-[calc(0.75rem-2px)] rounded-none"
      >
        <component v-if="item.icon" :is="item.icon" />
        <span>{{ $t(item.title) }}</span>
      </i18n-link>
    </SidebarMenuButton>
  </SidebarMenuItem>
</template>

<script lang="ts" setup>
defineProps({
  item: {
    type: Object as PropType<SidebarMenuItem>,
    required: true,
  },
});

const route = useRoute();
</script>

<style lang="scss" scoped></style>
