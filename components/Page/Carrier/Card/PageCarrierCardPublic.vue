<template>
	<i18n-link :to="{name: 'carrier-id', params: {id: carrier.id}}">
		<Card
			class="h-64 flex flex-col min-w-64 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl relative"
		>
			<ThemeImage
				class="w-full h-32 mb-3 rounded-t-md"
				dark_src="/BackgroundDark.webp"
				light_src="/BackgroundLight.webp"
				alt="Ruehrstaat Squadron Banner Background"
			/>
			<CardContent>
				<div class="flex justify-between items-center mt-auto">
					<div class="text-lg font-semibold">
						{{ carrier.name }} ({{ carrier.callsign }})
					</div>
					<div class="ml-2">
						<Badge>{{
							$t("carrier.category." + carrier.category)
						}}</Badge>
					</div>
				</div>
				<div class="text-sm mt-4">
					<p>Current System: {{ carrier.currentLocation }}</p>
					<p>
						Docking Access:
						{{
							$t("carrier.dockingaccess." + carrier.dockingAccess)
						}}
					</p>
				</div>
			</CardContent>
		</Card>
	</i18n-link>
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
