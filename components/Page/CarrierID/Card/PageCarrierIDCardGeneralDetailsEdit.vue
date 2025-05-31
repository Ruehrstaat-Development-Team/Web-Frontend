<template>
  <Card>
		<CardHeader>
			<CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid grid-cols-3 gap-4">
				
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

<style lang="scss" scoped>

</style>