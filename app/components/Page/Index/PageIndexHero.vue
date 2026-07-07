<template>
  <div class="w-full h-[55vh] overflow-hidden relative">
    <ThemeImage dark_src="/BackgroundDark.webp" light_src="/BackgroundLight.webp"
      class="w-full max-h-[55vh]" :class="{'saturate-20': $colorMode.value == 'dark'}" />
    <div
      class="absolute top-0 left-0 w-full h-[55vh] flex flex-col items-start justify-center bg-linear-to-r to-transparent" :class="{'from-black/80': $colorMode.value == 'dark', 'from-white/50': $colorMode.value == 'light'}">
      <h1 class="text-6xl font-light pl-6 font-bitcount" :class="{'text-black' : $colorMode.value == 'light', 'text-white': $colorMode.value == 'dark'}">{{ $t('hero.title') }}</h1>
      <h1 class="text-8xl font-light pl-6 text-primary font-bitcount">{{ $t('hero.title-highlight') }}</h1>
      <p class="text-lg pl-6 text-muted-foreground max-w-2xl">
        {{ $t('hero.description') }}
      </p>
    </div>
    <div class="absolute bottom-2 right-2 bg-card grid grid-cols-2 border border-border">
      <div class="p-4">
        <h4 class="font-bitcount font-light">{{ $t('hero.carriers') }}</h4>
        <p class="font-bitcount font-light text-3xl text-primary">5</p>
      </div>
      <div class="p-4">
        <h4 class="font-bitcount font-light">{{ $t('hero.members') }}</h4>
        <p class="font-bitcount font-light text-3xl text-primary">32</p>
      </div>
    </div>
    <div class="absolute bottom-2 left-2 grid grid-cols-2 gap-1">
      <div class="text-secondary font-light pl-6 flex flex-row items-center gap-1 text-xs">
        <DefaultConnectionIndicator /> Desktop-App: 
      </div> <!-- Desktop-App Status if Desktop-App is connected -->
      <div class="text-secondary font-light">
        <span class="text-xs">Connected</span>
      </div>
      <div class="text-secondary font-light pl-6 flex flex-row items-center gap-1 text-xs">
        <DefaultConnectionIndicator /> Live-Data:
      </div> <!-- Websocket-Status -->
      <div class="text-secondary font-light">
        <span class="text-xs">Connected</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $t } = useI18n();

</script>

<style lang="scss" scoped></style>