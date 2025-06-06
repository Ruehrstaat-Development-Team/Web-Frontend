<template>
  <div
    class="transition-[height,margin,width,border] duration-200 relative overflow-hidden"
    :class="{
      'h-12 w-12': !open && !isMobile,
      'h-20 m-0 w-72 rounded-none': open && !isMobile,
      'h-20 w-full': open && isMobile,
    }"
  >
    <ThemeImage
      class="w-72 h-20"
      dark_src="/BackgroundDark.webp"
      light_src="/BackgroundLight.webp"
      alt="Ruehrstaat Squadron Banner Background"
    />
    <div
      class="absolute top-0 left-auto ml-auto right-auto h-full flex flex-row items-center"
      :class="{
        'mr-auto w-fit justify-start': !isMobile,
        'w-full justify-center': isMobile,
      }"
    >
      <NuxtImg
        src="/LogoClean.webp"
        class="object-contain min-h-12 min-w-12 transition-[height,margin,width,border] duration-200 ease-linear"
        :class="{ 'size-12': !open, 'size-20': open }"
      />
      <NuxtImg
        src="/LogoText.webp"
        class="h-8 object-contain min-h-8 w-40 min-w-40"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";
const { open, isMobile } = useSidebar();
</script>

<style lang="scss" scoped></style>
