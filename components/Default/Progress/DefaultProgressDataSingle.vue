<template>
	<div class="w-full h-8 bg-muted rounded-sm overflow-hidden relative">
		<div
			:style="{ width: progress + '%', background: color }"
			class="h-full transition-all duration-300 ease-in-out overflow-hidden"
			:class="{ 'bg-primary': color === null }"
		></div>
	</div>
	<div class="w-full flex flex-row items-center justify-between mt-1">
		<span class="text-xs text-muted-foreground" v-if="dataString != null">{{
			dataString
		}}</span>
		<span class="text-xs text-muted-foreground">{{ progress }}%</span>
	</div>
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
});
</script>

<style lang="scss" scoped></style>
