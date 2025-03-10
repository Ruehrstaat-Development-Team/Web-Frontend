<template>
	<PageHeader :page-title="$t('carriers') as string" >
  </PageHeader> 
	<PageContent>
		<PageCarrierSectionOwner :carriers="data" v-if="data != null" class="mb-4"/>
		<PageCarrierSectionPublic :carriers="data" v-if="data != null"/>
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
