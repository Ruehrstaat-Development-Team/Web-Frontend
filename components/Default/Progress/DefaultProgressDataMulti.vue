<template>
	<div class="w-full h-8 bg-muted rounded-sm overflow-hidden relative">
    <div
      v-for="item in items"
      :key="item.name"
      :style="{ width: item.value + '%', background: item.color }"
      class="h-full transition-all duration-300 ease-in-out overflow-hidden"
    ></div>
  </div>
	<div class="w-full flex flex-row items-center justify-evenly mt-1">
		<div
			class="flex flex-row items-center justify-center gap-1"
			v-for="item in items"
			:key="item.name"
		>
			<div class="w-2 h-2" :style="{ background: item.color }"></div>
			<span class="text-xs text-muted-foreground">
				{{ item.name }}: {{ item.dataString || item.value.toFixed(2) }}
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	items: {
		type: Array as PropType<
			Array<{ name: string; value: number; color: string; dataString?: string }>
		>,
		default: null,
	},
});
</script>

<style lang="scss" scoped></style>
