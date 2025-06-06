<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.balance") }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-4">
        <DefaultProgressData
          :label="$ts('balance.current-balance')"
          :items="[
            {
              name: $ts('balance.reserved-balance'),
              value: (carrier.reserveBalance / carrier.balance) * 100,
              color: 'green',
              dataString: $tn(carrier.reserveBalance) + ' cr',
            },
            {
              name: $ts('balance.available-balance'),
              value: (carrier.availableBalance / carrier.balance) * 100,
              color: 'blue',
              dataString: $tn(carrier.availableBalance) + ' cr',
            },
          ]"
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
