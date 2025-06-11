<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.services") }}</CardTitle>
    </CardHeader>
    <CardContent class="@container">
      <div
        class="grid grid-cols-1 gap-4 @xs:grid-cols-2 @xl:grid-cols-3"
        v-if="carrier.services && carrier.services.length > 0"
      >
        <div
          v-for="service in carrier.services"
          :key="service.name"
          class="flex flex-row items-start gap-2"
        >
          <TooltipProvider>
            <Tooltip v-if="service.odyssey">
              <TooltipTrigger>
                <LucideEarth class="text-green-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{{ $t("services.odyssey-only") }}</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip v-else>
              <TooltipTrigger>
                <LucideRocket class="text-blue-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{{ $t("services.odyssey-free") }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <p class="text-sm font-medium text-card-foreground">
            {{ $t("services." + service.name.toLowerCase()) }}
          </p>
        </div>
      </div>
      <div v-else class="flex flex-row gap-2">
        <LucideX class="text-red-500" />
        <p class="text-sm font-medium text-card-foreground">
          {{ $t("services.no-services") }}
        </p>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
defineProps({
  carrier: {
    type: Object as PropType<Carrier>,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
