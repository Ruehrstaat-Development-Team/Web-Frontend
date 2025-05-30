<template>
	<h3 class="text-2xl font-bold mb-4">
		{{ $t("titles.section.all") }}
	</h3>
	<div class="grid grid-cols-3 gap-8">
		<PageCarrierCardPublic
			v-for="carrier in carriers"
			:carrier="carrier"
			v-if="carriers != null"
		/>
		<PageCarrierCardPublicLoading v-for="n in 9" v-else />
	</div>
</template>

<script lang="ts" setup>
defineProps({
	carriers: {
		type: Object as PropType<Carrier[]>,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
