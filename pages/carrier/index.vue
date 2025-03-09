<template>
	<PageHeader page-title="Carrier" >
    <Badge class="bg-background">⭕Live</Badge>
  </PageHeader> 
	<PageContent>
		<div class="grid grid-cols-3 gap-4">
			<PageCarrierCard v-for="carrier in data" :carrier="carrier"/>
		</div>
	</PageContent>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Carrier",
});
const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);

const { data, status, error, refresh, clear } = await useAsyncData(
	"carrier-index",
	() => carrierApi.getCarrier()
);
</script>
