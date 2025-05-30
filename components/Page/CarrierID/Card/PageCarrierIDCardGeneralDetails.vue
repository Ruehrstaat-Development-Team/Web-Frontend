<template>
	<Card>
		<CardHeader>
			<CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid grid-cols-3 gap-4">
				<div>
					<p class="text-sm font-medium text-muted-foreground">
						{{ $t("general-information.name") }}
					</p>
					<p class="text-lg font-semibold text-card-foreground">
						{{ carrier.name }}
					</p>
				</div>
				<div>
					<p class="text-sm font-medium text-muted-foreground">
						{{ $t("general-information.callsign") }}
					</p>
					<p class="text-lg font-semibold text-card-foreground">
						{{ carrier.callsign }}
					</p>
				</div>
				<div>
					<p class="text-sm font-medium text-muted-foreground">
						{{ $t("general-information.category") }}
					</p>
					<p class="text-lg font-semibold text-card-foreground">
						{{ $t("general-information.category-" + carrier.category) }}
					</p>
				</div>
				<div>
					<p class="text-sm font-medium text-muted-foreground">
						{{ $t("general-information.location") }}
					</p>
					<p class="text-lg font-semibold text-card-foreground">{{ carrier.currentLocation }}</p>
				</div>
				<div>
					<p class="text-sm font-medium text-muted-foreground">
						{{ $t("general-information.dockingaccess") }}
					</p>
					<p class="text-lg font-semibold text-card-foreground">{{ $t("general-information.dockingaccess-" + carrier.dockingAccess) }}</p>
				</div>
			</div>
		</CardContent>
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

<style lang="scss" scoped></style>
