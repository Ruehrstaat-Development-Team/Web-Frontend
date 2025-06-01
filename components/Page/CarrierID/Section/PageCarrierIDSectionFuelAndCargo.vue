<template>
  <div class="grid grid-cols-2 gap-4">
    <PageCarrierIDCardFuel :level="carrier.fuelLevel" v-if="carrier.fuelLevel != null"/>
    <PageCarrierIDCardCargo :carrier="carrier" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
	carrier: {
		type: Object as PropType<Carrier>,
		required: true,
	},
});
console.log(props.carrier);
</script>

<style lang="scss" scoped>

</style>