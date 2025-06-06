<template>
  <div v-for="group in carriers">
    <h3 class="text-2xl font-bold mb-2 mt-4">
      {{ $t("carrier.category." + group.category) }}
    </h3>
    <div
      class="grid grid-cols-1 @2xl/main:grid-cols-2 @5xl/main:grid-cols-3 gap-8"
    >
      <PageCarrierCardPublic
        v-for="carrier in group.carriers"
        :carrier="carrier"
        v-if="carriers != null"
      />
      <PageCarrierCardPublicLoading v-for="n in 9" v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  carriers: {
    type: Object as PropType<CarrierGrouped[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
