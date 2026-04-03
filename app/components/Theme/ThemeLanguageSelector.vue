<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="w-full h-10">
      <ClientOnly>
        <Button variant="ghost" class="w-full justify-start hover:bg-gradient-to-r hover:from-sidebar-muted hover:to-sidebar-muted/20 hover:text-sidebar-foreground h-10">
          <LucideGlobe />
          <span v-if="open">{{ $t("layout-default.menu.toggle-language") }}</span>
        </Button>
      </ClientOnly>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-60">
      <DropdownMenuItem @click="$switchLocale('en')">
        <span>English</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="$switchLocale('de')">
        <span>Deutsch</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import { useSidebar } from "@/components/ui/sidebar";
const { open } = useSidebar();
</script>

<style lang="scss" scoped></style>
