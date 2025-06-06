<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.cargo") }}</CardTitle>
    </CardHeader>
    <CardContent>
      <DefaultProgressData
        :progress="(carrier.cargoUsed / carrier.cargoSpace) * 100"
        :data-string="carrier.cargoUsed + 't / ' + carrier.cargoSpace + 't'"
        color="var(--secondary)"
      />
    </CardContent>
    <CardFooter>
      <div class="text-sm text-muted-foreground">
        {{ $t("cargo.description") }}
      </div>
    </CardFooter>
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
