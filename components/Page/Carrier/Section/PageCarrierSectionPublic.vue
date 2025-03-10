<template>
		<div class="grid grid-cols-3 gap-8">
			<PageCarrierCardPublic v-for="carrier in carriers" :carrier="carrier" v-if="carriers != null"/>
      <Skeleton v-else />
		</div>
</template>

<script lang="ts" setup>
defineProps({
  carriers: {
    type: Object as PropType<Carrier[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>

</style>