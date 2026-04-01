<template>
  <DefaultLabeledText :label="label" :value="formattedValue ?? name" v-if="!edit" />
  <DefaultLabeledInput :label="label" :name="name" v-if="edit && name" v-slot="componentField">
    <slot v-bind="componentField" />
  </DefaultLabeledInput>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  formattedValue: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  edit: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
