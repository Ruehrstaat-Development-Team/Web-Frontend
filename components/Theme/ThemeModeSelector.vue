<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <ClientOnly>
        <Button variant="ghost" class="size-7 p-0">
          <LucideMoon v-if="$colorMode.preference == 'dark'" />
          <LucideSun v-else-if="$colorMode.preference == 'light'" />
          <LucideMonitorCog v-else />
        </Button>
      </ClientOnly>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem @click="$colorMode.preference = 'dark'">
        <LucideMoon />
        <span>Dark</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="$colorMode.preference = 'light'">
        <LucideSun />
        <span>Light</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="$colorMode.preference = 'system'">
        <LucideMonitorCog />
        <span>System</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
