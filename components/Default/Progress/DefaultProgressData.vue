<template>
	<DefaultProgressDataSingle
		:progress="progress"
		:dataString="dataString"
		:color="color"
		v-if="progress != null"
	/>
	<DefaultProgressDataMulti
		:items="items"
		v-else-if="items != null && items.length > 0"
	/>
</template>

<script lang="ts" setup>
defineProps({
	progress: {
		type: Number,
	},
	dataString: {
		type: String,
		default: null,
	},
	color: {
		type: String,
		default: null,
	},
	items: {
		type: Array as PropType<
			Array<{ name: string; value: number; color: string }>
		>,
		default: null,
	},
});
</script>

<style lang="scss" scoped></style>
