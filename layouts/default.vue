<template>
  <div>
    <SharedHeader
      :nav="nav"
      class="desktop-header"
      v-if="device"
    />
    <SharedHeader :nav="nav" v-if="!device"/>
    <NavigationRail v-if="device" :nav="nav" />
    <NavigationDrawer v-if="!device" :nav="nav" />
    <main class="desktop-main" v-if="device">
      <slot />
    </main>
    <main v-if="!device">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.desktop-main {
  margin-left: 80px;
  margin-top: 0px;
}

.desktop-header {
  margin-left: 80px;
}

main {
  margin-top: 200px;
}
</style>

<script setup lang="ts">
const nav = navigation();
const device = computed(() => {
  return useDevice().isDesktopOrTablet;
});
const router = useRouter();
var currentRoute = router.currentRoute;
var currentRouteName = computed(() => {
  return (
    nav.Destinations.find((d: any) => d.Path === currentRoute.value.path)
      ?.Name + " - Rührstaat Squadron"
  );
});
useHead({
  title: currentRouteName,
});

type Device = {
  userAgent: string;
  isDesktop: boolean;
  isIos: boolean;
  isAndroid: boolean;
  isMobile: boolean;
  isMobileOrTablet: boolean;
  isDesktopOrTablet: boolean;
  isTablet: boolean;
  isWindows: boolean;
  isMacOS: boolean;
  isApple: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isEdge: boolean;
  isChrome: boolean;
  isSamsung: boolean;
  isCrawler: boolean;
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $device: Device;
  }
}
</script>
