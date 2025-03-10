<template>
  <Card class="flex flex-row h-32 w-max transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl">
    <div class="min-w-40">
      <ThemeImage
        class="w-full h-full rounded-l-md"
        dark_src="/BackgroundDark.webp"
        light_src="/BackgroundLight.webp"
        alt="Ruehrstaat Squadron Banner Background"
      />
    </div>
    <CardContent class="w-max flex flex-col justify-center pb-0">
      <div class="flex justify-between items-center">
        <div class="text-lg font-semibold whitespace-nowrap">
          {{ carrier.name }} ({{ carrier.callsign }})
        </div>
        <div class="ml-2">
          <Badge class="whitespace-nowrap">{{
            $t("carrier.category." + carrier.category)
          }}</Badge>
        </div>
      </div>
      <div class="text-sm mt-4">
        <p>Current System: {{ carrier.currentLocation }}</p>
        <p>Docking Access: {{ $t("carrier.dockingaccess." + carrier.dockingAccess) }}</p>
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

<style lang="scss" scoped>

</style>