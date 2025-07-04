<template>
  <Collapsible class="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger as-child>
        <SidebarMenuButton :tooltip="item.title" :is-active="route.path.includes(item.urlCompare)">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
          <LucideChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem v-for="subitem in item.children" :key="subitem.location.name" :is-active="route.path.includes(subitem.urlCompare)">
            <SidebarMenuSubButton :tooltip="subitem.title">
              <i18n-link :to="subitem.location" class="w-full">
                <span>{{ subitem.title }}</span>
              </i18n-link>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</template>

<script lang="ts" setup>
defineProps({
  item: {
    type: Object as PropType<SidebarMenuItem>,
    required: true,
  },
});

var route = useRoute();
</script>

<style lang="scss" scoped></style>
