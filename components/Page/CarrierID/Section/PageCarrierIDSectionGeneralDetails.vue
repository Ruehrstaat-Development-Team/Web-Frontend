<template>
  <div>
    <PageCarrierIDCardGeneralDetails
      :carrier="carrier"
      v-if="carrier"
      class="mb-4",
      :edit="edit"
    />
    <PageCarrierIDCardServices :carrier="carrier" v-if="carrier" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  carrier: {
    type: Object as PropType<Carrier>,
    required: true,
  },
  edit: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
