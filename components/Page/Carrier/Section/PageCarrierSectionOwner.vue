<template>
	<div
		class="flex flex-row flex-nowrap overflow-x-auto gap-4"
		@wheel.prevent="scrollHorizontally"
	>
		<PageCarrierCardOwner
			v-for="carrier in carriers"
			:carrier="carrier"
			v-if="carriers != null"
		/>
		<Skeleton v-else />
	</div>
</template>

<script lang="ts" setup>
defineProps({
	carriers: {
		type: Object as PropType<Carrier[]>,
		required: true,
	},
});

const scrollHorizontally = (event: WheelEvent) => {
  const container = event.currentTarget as HTMLElement;
  container.scrollLeft += event.deltaY;
};
</script>

<style lang="scss" scoped></style>
