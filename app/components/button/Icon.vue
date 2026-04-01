<template>
  <button @click="click" :disabled="data.disabled.value" class="button-icon" v-tooltip="{ content: data.tooltip.value ? $t(data.tooltip.value) : '', noAutoFocus: true}" :type="$props.type">
    <span
      v-if="data.icon.value != undefined && !data.loading.value"
      class="material-symbols-rounded"
      >{{ data.icon.value }}</span
    >
    <Transition :name="flexTransition" :css="data.icon.value == undefined">
      <span class="loader-spinner" v-if="data.loading.value"></span>
    </Transition>
    <span v-if="data.text.value != null" class="text">{{
      $t(data.text.value)
    }}</span>
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

const props = defineProps({
  data: {
    type: Object as PropType<ButtonData>,
    required: true,
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
    required: true,
  },
});

const data = toRefs(props.data);

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};

const flexTransition = computed(() =>
  data?.icon == undefined ? "flex" : undefined
);
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  .material-symbols-rounded {
    font-size: var(--font-size-m);
    width: var(--font-size-m);
    height: var(--font-size-m);
    overflow: hidden;
  }
}

button:hover .material-symbols-rounded{
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.5));
}
</style>
