<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="w-full h-10">
      <ClientOnly>
        <Button variant="ghost" class="w-full justify-start hover:bg-gradient-to-r hover:from-sidebar-muted hover:to-sidebar-muted/20 hover:text-sidebar-foreground h-10">
          <LucideMoon v-if="$colorMode.preference == 'dark'" />
          <LucideSun v-else-if="$colorMode.preference == 'light'" />
          <LucideMonitorCog v-else />
          <span v-if="open">{{ $t("layout-default.menu.toggle-theme") }}</span>
        </Button>
      </ClientOnly>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-60">
      <DropdownMenuItem @click="$colorMode.preference = 'dark'">
        <LucideMoon />
        <span>{{ $t("layout-default.menu.dark") }}</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="$colorMode.preference = 'light'">
        <LucideSun />
        <span>{{ $t("layout-default.menu.light") }}</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="$colorMode.preference = 'system'">
        <LucideMonitorCog />
        <span>{{ $t("layout-default.menu.system") }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import { useSidebar } from "@/components/ui/sidebar";
const { open } = useSidebar();
</script>

<style lang="scss" scoped></style>
