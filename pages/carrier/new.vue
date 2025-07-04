<template>
  <PageHeader :page-title="$ts('title')" back-navigation-name="carrier"> </PageHeader>
  <PageContent>
    <PageCarrierIDCardGeneralDetails :model-value="carrier" :edit="edit" :user-options="users ?? undefined" :category-options="categoryOptions ?? undefined" />
  </PageContent>
</template>

<script lang="ts" setup>
import { Carrier } from "~/@types/api/carrier";

const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);
const userApi = userRepository($api);

const { data: services } = useAsyncData("carrier-services", carrierApi.getAllCarrierServices);
const { data: users } = useAsyncData("carrier-users", userApi.getAllUsers);
const { data: categoryOptions } = useAsyncData("carrier-categories", carrierApi.getAllCarrierCategories);

const carrier = ref<Carrier>(new Carrier());
const edit = ref(true);
</script>

<style lang="scss" scoped></style>
