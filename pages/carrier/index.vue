<template>
  <div>
    <LazySectionCarrierUserCarriers
      v-if="carriers.length"
      :carriers="carriers"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton v-if="loading" v-for="n in 5" :key="n" class="h-24" />
      <Card
        v-else
        v-for="carrier in carriers"
        :key="carrier.id"
        class="p-4 h-56 flex flex-col min-w-64"
      >
        <div class="flex justify-between items-center mt-auto">
          <div class="text-lg font-semibold">
            {{ carrier.name }} ({{ carrier.callsign }})
          </div>
          <div class="ml-2">
            <Badge>{{ carrier.category }}</Badge>
          </div>
        </div>

        <div class="flex justify-center pt-1">
          <div class="w-full mb-4"></div>
        </div>

        <div class="text-sm mt-1">
          <p>Current System: {{ carrier.currentLocation }}</p>
          <p>Owner: {{ carrier.owner }}</p>
          <p>Docking Access: {{ carrier.dockingAccess }}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp();
const carrierApi = carrierRepository($api);
const loading = ref(true);

const carriers = await carrierApi.getCarrier();

loading.value = false;
</script>
