<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const persist = usePersistentStore();
if(route.query.isDesktop === 'true'){
  persist.setIsDesktopApp(true);
  router.replace({ query: { ...route.query, isDesktop: undefined } });
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster rich-colors/>
  </div>
</template>
