<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t('card-titles.balance') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-4">
        <div class="text-2xl font-bold">
          {{ $tn(carrier.balance) + ' cr' }}
        </div>
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