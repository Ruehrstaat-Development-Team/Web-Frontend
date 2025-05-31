<template>
	<PageCarrierIDCardGeneralDetails
		:carrier="carrier"
		v-if="carrier"
		class="mb-4"
	/>
	<PageCarrierIDCardServices :carrier="carrier" v-if="carrier" />
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
