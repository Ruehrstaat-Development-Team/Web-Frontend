<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.balance") }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-4">
        <DefaultProgressData
          :progress="carrier.balance != 0 ? (carrier.reserveBalance / carrier.balance) * 100 : 0"
          :dataString="`${$tn(carrier.reserveBalance)} cr ${$ts('balance.reserved-of')} ${$tn(carrier.balance)} cr`"
          color="var(--secondary)"
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
