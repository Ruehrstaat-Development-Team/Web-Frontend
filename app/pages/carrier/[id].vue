<template>
  <PageHeader :page-title="carrier?.name || ''" back-navigation-name="carrier">
    <template v-slot:buttons>
      <Button variant="secondary" v-if="((carrier?.ownerId && carrier?.ownerId === user?.id) || user?.isAdmin) && !edit" @click="edit = true">
        <LucidePen /> <span>{{ $t("common.edit") }}</span>
      </Button>
      <Button variant="secondary" v-if="edit" @click="save">
        <LucideSave /> <span>{{ $t("common.save") }}</span>
      </Button>
      <Button variant="default" v-if="edit" @click="edit = false">
        <LucideX /> <span>{{ $t("common.cancel") }}</span>
      </Button>
    </template>
  </PageHeader>
  <PageContent>
    <div class="flex flex-col gap-4 @5xl/main:flex-row">
      <div class="flex-grow @container/carrier-section">
        <PageCarrierIDSectionGeneralDetails :carrier="carrier" :edit="edit" v-if="carrier" class="mb-4" />
        <PageCarrierIDSectionFuelAndCargo :carrier="carrier" v-if="carrier" class="mb-4" />
        <PageCarrierIDSectionBalance :carrier="carrier" v-if="carrier" />
      </div>
      <!-- <div>
				<PageCarrierIDCardRoute/>
			</div> -->
    </div>
  </PageContent>
</template>

<script lang="ts" setup>
import type { CarrierService } from "~/@types/api/carrier";

const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);
const { id } = useRoute().params as { id: string };
const session = useSessionStore();
const { user } = useUserStore();
const app = useNuxtApp();
const edit = ref(true);

const save = async () => {
  edit.value = false;
};

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
    dedupe: "cancel",
    transform: (data) => {
      if (data) {
        data.services.sort((a: CarrierService, b: CarrierService) => (a.odyssey === b.odyssey ? 0 : a.odyssey ? 1 : -1));
      }
      return data;
    },
  }
);

useHead({
  title: carrier?.value?.name || "Carrier",
  meta: [
    {
      name: "description",
      content: `View and manage the carrier ${carrier?.value?.name || ""}.`,
    },
  ],
});

app.hook("auth:logout", () => {
  edit.value = false;
  refresh();
});
</script>

<style lang="scss" scoped></style>
