<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel>{{ label }}</FormLabel>
      <FormMessage />
      <FormControl>
        <slot v-bind="componentField"></slot>
      </FormControl>
    </FormItem>
  </FormField>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
