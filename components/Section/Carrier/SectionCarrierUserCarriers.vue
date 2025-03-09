<template>
  <div class="p-4 shadow-md rounded-lg">
    <h2 class="text-xl font-bold mb-4">Deine Carrier // TODO: BUILD TOAST</h2>
    <div v-if="carriers.length" class="flex flex-row gap-4 overflow-x-auto pb-4">
      <div
        v-for="carrier in carriers"
        :key="carrier.id"
        class="min-w-96 h-20 bg-muted text-foreground text-lg rounded-lg flex justify-start items-center shadow-md relative"
      >
        <div class="size-20 min-w-20 bg-primary rounded-lg"></div>
        <div class="flex flex-col px-4 py-2 w-full">
          <h3 class="text-lg font-semibold">
            {{ carrier.name }} ({{ carrier.callsign }})
          </h3>
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <Badge>{{ carrier.category }}</Badge>
            </div>
            <p class="text-sm">{{ carrier.currentLocation }}</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-muted-foreground text-sm">Keine Carrier vorhanden.</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  carriers: {
    type: Array as PropType<Carrier[]>,
    required: true,
  },
});
</script>
