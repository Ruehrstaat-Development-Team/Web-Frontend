<template>
  <PageHeader :page-title="$ts('title')"> </PageHeader>
  <PageContent>
    <form>
      <PageCarrierIDCardGeneralDetails :carrier="carrier" :edit="edit" />
    </form>
    {{ form }}
  </PageContent>
</template>

<script lang="ts" setup>
import { Carrier } from "~/@types/api/carrier";

const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);
const { data: services } = useAsyncData("carrier-services", carrierApi.getAllCarrierServices);

const carrier = ref<Carrier>(new Carrier());
const edit = ref(true);

const formSchema = useCarrierIdForm();
const form = useForm({
  validationSchema: formSchema,
});
</script>

<style lang="scss" scoped></style>
