<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid grid-cols-3 gap-4">
        <DefaultLabeledText
          :label="$ts('general-information.name')"
          :value="carrier.name"
        />
        <DefaultLabeledText
          :label="$ts('general-information.callsign')"
          :value="carrier.callsign"
        />
        <DefaultLabeledText
          :label="$ts('general-information.category')"
          :value="$ts('general-information.category-' + carrier.category)"
        />
        <DefaultLabeledText
          :label="$ts('general-information.location')"
          :value="carrier.currentLocation"
        />
        <DefaultLabeledText
          :label="$ts('general-information.dockingaccess')"
          :value="
            $ts('general-information.dockingaccess-' + carrier.dockingAccess)
          "
        />
        <DefaultLabeledText
          :label="$ts('general-information.owner')"
          :value="carrier.owner || $ts('general-information.no-owner')"
        />
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
