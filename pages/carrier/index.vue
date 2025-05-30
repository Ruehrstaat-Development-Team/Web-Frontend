<template>
	<PageHeader :page-title="$t('carriers') as string"> </PageHeader>
	<PageContent>
		<PageCarrierSectionOwner
			:carriers="privateData"
			v-if="privateData != null"
			class="mb-4"
		/>
		<PageCarrierSectionPublic
			:carriers="publicData"
			v-if="publicData != null"
		/>
	</PageContent>
</template>

<script lang="ts" setup>
definePageMeta({
	keepalive: true,
});
useHead({
	title: "Carrier",
	meta: [
		{
			name: "description",
			content: "View and manage your carriers.",
		},
	],
});
const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);
const session = useSessionStore();
const app = useNuxtApp();

app.hook("auth:logout", () => {
	privateClear();
	refresh();
})

const {
	data: publicData,
	status,
	error,
	refresh,
	clear,
} = useAsyncData("carrier-index", () => carrierApi.getCarrier(), {
	lazy: true,
	dedupe: "defer",
	default: () => {
		return null;
	},
});

const {
	data: privateData,
	status: privateStatus,
	error: privateError,
	refresh: privateRefresh,
	clear: privateClear,
} = useAsyncData(
	"carrier-index-private",
	() => {
		if (session.token != null) {
			return carrierApi.getPrivateCarrier();
		}
		return Promise.resolve(null);
	},
	{
		lazy: true,
		dedupe: "defer",
		default: () => {
			return null;
		},
	}
);
</script>
