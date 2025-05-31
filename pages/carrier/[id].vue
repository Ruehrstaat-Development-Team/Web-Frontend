<template>
	<PageHeader
		:page-title="carrier?.name || ''"
		back-navigation-name="carrier"
	>
		<template v-slot:buttons>
			<Button variant="secondary" v-if="((carrier?.ownerId && carrier?.ownerId === user?.id) || user?.isadmin) && !edit" @click="edit = true" >
				<LucidePen /> <span >{{ $t("common.edit") }}</span>
			</Button>
			<Button variant="secondary" v-if="edit" @click="save">
				<LucideSave/> <span >{{ $t("common.save") }}</span>
			</Button>
			<Button variant="default" v-if="edit" @click="edit = false">
				<LucideX /> <span >{{ $t("common.cancel") }}</span>
			</Button>
		</template>
	</PageHeader>
	<PageContent>
		<PageCarrierIDSectionGeneralDetails :carrier="carrier" v-if="carrier" />
	</PageContent>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);
const { id } = useRoute().params as { id: string };
const session = useSessionStore();
const { user } = useUserStore();
const app = useNuxtApp();
const edit = ref(false);

const save = async () => {
	edit.value = false;
}

const {
	data: carrier,
	status,
	error,
	refresh,
	clear,
} = useAsyncData(
	"carrier-id-" + id,
	() => {
		if (session.token != null) {
			return carrierApi.getPrivateCarrierById(id);
		}
		return carrierApi.getCarrierById(id);
	},
	{
		dedupe: "defer",
		transform: (data) => {
			if (data) {
				data.services.sort((a, b) =>
					a.odyssey === b.odyssey ? 0 : a.odyssey ? 1 : -1
				);
			}
			return data;
		},
	}
);

app.hook("auth:logout", () => {
	edit.value = false;
  refresh();
});
</script>

<style lang="scss" scoped></style>
