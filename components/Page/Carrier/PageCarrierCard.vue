<template>
	<Card
		class="p-4 h-56 flex flex-col min-w-64"
	>
		<div class="flex justify-between items-center mt-auto">
			<div class="text-lg font-semibold">
				{{ carrier.name }} ({{ carrier.callsign }})
			</div>
			<div class="ml-2">
				<Badge>{{ $t("carrier.category." + carrier.category) }}</Badge>
			</div>
		</div>

		<div class="flex justify-center pt-1">
			<div class="w-full mb-4"></div>
		</div>

		<div class="text-sm mt-1">
			<p>Current System: {{ carrier.currentLocation }}</p>
			<p>Owner: {{ carrier.owner }}</p>
			<p>Docking Access: {{ carrier.dockingAccess }}</p>
		</div>
	</Card>
</template>

<script lang="ts" setup>
defineProps({
	carrier: {
    type: Object as PropType<Carrier>,
    required: true,
  },
});
</script>

<style></style>
