<template>
	<Card>
		<CardHeader>
			<CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid grid-cols-3 gap-4">
				<PageCarrierIDItemGeneralInformationLabeledText :label="$ts('general-information.name')" :value="carrier.name" />
				<PageCarrierIDItemGeneralInformationLabeledText :label="$ts('general-information.callsign')" :value="carrier.callsign" />
				<PageCarrierIDItemGeneralInformationLabeledText :label="$ts('general-information.category')" :value="$ts('general-information.category-' + carrier.category)" />
				<PageCarrierIDItemGeneralInformationLabeledText :label="$ts('general-information.location')" :value="carrier.currentLocation" />
				<PageCarrierIDItemGeneralInformationLabeledText :label="$ts('general-information.dockingaccess')" :value="$ts('general-information.dockingaccess-' + carrier.dockingAccess)" />
				<PageCarrierIDItemGeneralInformationLabeledText :label="$ts('general-information.owner')" :value="carrier.owner" />
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
