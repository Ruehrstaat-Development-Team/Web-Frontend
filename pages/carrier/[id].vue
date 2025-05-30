<template>
  <PageHeader :page-title="carrier?.name || ''" back-navigation-name="carrier">
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

const { data: carrier, status, error, refresh, clear } = useAsyncData(
  "carrier-id-" + id,
  () => {
    if(session.token != null){
      return carrierApi.getPrivateCarrierById(id);
    }
    return carrierApi.getCarrierById(id);
  },
  {
    dedupe: "defer",
    transform: (data) => {
      if(data){
        data.services.sort((a, b) => a.odyssey === b.odyssey ? 0 : a.odyssey ? 1 : -1);
      }
      return data;
    }
  }
);
</script>

<style lang="scss" scoped>

</style>