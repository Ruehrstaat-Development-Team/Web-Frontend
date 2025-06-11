<template>
  <PageCarrierIDCardBalance :carrier="carrier" v-if="carrier.balance != null" />
</template>

<script lang="ts" setup>
defineProps({
  carrier: {
    type: Object as PropType<Carrier>,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
