<template>
  <h3 class="text-2xl font-bold mb-4">
    {{ $t("titles.section.owned") }}
  </h3>
  <div class="flex flex-row flex-nowrap overflow-x-auto gap-4 mb-4" :class="{ 'scrollbar-set': isChromiumBrowser() }" @wheel.prevent="scrollHorizontally">
    <PageCarrierCardOwner v-for="carrier in carriers" :carrier="carrier" v-if="carriers != null" />
    <Skeleton v-else />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  carriers: {
    type: Object as PropType<Carrier[]>,
    required: true,
  },
});

const { isFirefox } = useDevice();

const scrollHorizontally = (event: WheelEvent) => {
  const container = event.currentTarget as HTMLElement;
  container.scrollLeft += event.deltaY;
};

const isChromiumBrowser = () => {
  return !isFirefox;
};
</script>

<style lang="scss" scoped>
.scrollbar-set {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground)) hsl(var(--background));
}
</style>
