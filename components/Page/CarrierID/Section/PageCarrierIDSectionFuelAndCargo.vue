<template>
	<div class="grid grid-cols-1 @2xl/carrier-section:grid-cols-2 gap-4">
		<PageCarrierIDCardFuel
			:level="carrier.fuelLevel"
			v-if="carrier.fuelLevel != null"
		/>
		<PageCarrierIDCardCargo :carrier="carrier" v-if="carrier.cargoSpace != null"/>
	</div>
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
