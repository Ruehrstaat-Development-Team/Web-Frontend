<template>
  <i18n-link :to="{ name: 'login', query: { redirect: route.fullPath } }"
    class="hover:bg-gradient-to-r hover:from-sidebar-muted hover:to-sidebar-muted/20 hover:text-sidebar-foreground transition-[padding] duration-200 pt-2 pb-2"
    :class="{ 'pl-3': open, 'pl-2.5': !open }">
    <div class="flex flex-row items-center gap-3">
      <div
        class="flex items-center justify-center bg-primary/50 border border-primary text-primary-foreground p-1 size-7 min-h-7 min-w-7 align-middle">
        <LucideUser :size="16" />
      </div>
      <span class="grow flex flex-col justify-center items-start">
        <span class="leading-none whitespace-nowrap">{{ $t("layout-default.menu.login") }}</span>
      </span>
    </div>
  </i18n-link>
  <ThemeModeSelector />
  <ThemeLanguageSelector />
</template>

<script lang="ts" setup>
import { useSidebar } from "@/components/ui/sidebar";
const { open } = useSidebar();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
