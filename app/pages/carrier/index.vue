<template>
  <PageHeader :page-title="$ts('carriers')">
    <template v-slot:buttons>
      <I18nLink :to="{ name: 'carrier-new' }">
        <Button variant="secondary" v-if="user?.isAdmin">
          <LucidePlus />
          <span>{{ $t("common.create") }}</span>
        </Button>
      </I18nLink>
    </template>
  </PageHeader>
  <PageContent>
    <PageCarrierSectionOwner :carriers="privateData" v-if="privateData != null && privateData.length > 0" />
    <PageCarrierSectionPublic :carriers="publicData" v-if="publicData != null" />
  </PageContent>
</template>

<script lang="ts" setup>
definePageMeta({
  keepalive: true,
});
useHead({
  title: "Carrier | Ruehrstaat Squadron",
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
const { user } = useUserStore();
const app = useNuxtApp();

app.hook("auth:logout", () => {
  privateClear();
  refresh();
});

const {
  data: publicData,
  status,
  error,
  refresh,
  clear,
} = useAsyncData("carrier-index", () => carrierApi.getCarrierGrouped(), {
  lazy: true,
  dedupe: "defer",
  default: () => {
    return null;
  },
  transform: (data) => {
    return data.sort((a, b) => {
      if (a.category === "other") return 1;
      if (b.category === "other") return -1;
      if (a.category === "flagship") return -1;
      if (b.category === "flagship") return 1;
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
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
