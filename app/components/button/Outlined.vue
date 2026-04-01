<template>
  <button @click="click" :disabled="props.data.disabled" class="button-outlined">
    <span
      v-if="props.data.icon != undefined && !props.data.loading"
      class="material-symbols-rounded"
      >{{ props.data.icon }}</span
    >
    <Transition :name="flexTransition" :css="props.data.icon == undefined">
      <span class="loader-spinner" v-if="props.data.loading"></span>
    </Transition>
    <span v-if="props.data.text != null" class="text">{{
      $t(props.data.text)
    }}</span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object as PropType<ButtonData>,
    required: true,
  },
});

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};

const flexTransition = computed(() =>
  props.data?.icon == undefined ? "flex" : undefined
);
</script>

<style lang="scss" scoped>
button {
  font-size: var(--font-size-s);

  background: var(--color-surface);
  color: var(--color-on-surface);

  border: 2px solid var(--color-primary);
  border-radius: 50px;

  padding: 10px 20px;

  box-shadow: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .material-symbols-rounded {
    font-size: var(--font-size-m);
    width: var(--font-size-m);
    overflow: hidden;
  }

  .flex-enter-active,
  .flex-leave-active {
    transition-property: max-width, border;
    transition-timing-function: var(--easing-decelerate);
    transition-duration: var(--animation-time-xs);
  }

  .flex-enter-from,
  .flex-leave-to {
    max-width: 0 !important;
    border: 0px solid var(--color-on-surface) !important;
  }

  .loader-spinner {
    border: 2px solid var(--color-on-surface);
  }
}

button:hover {
  background: var(--color-surface-hover);

  cursor: pointer;
}

button:disabled {
  background: var(--color-surface-disabled);
  color: var(--color-on-surface-disabled);
  border: 2px solid var(--color-primary-disabled);
  
  cursor: progress;

  .loader-spinner {
    border-color: var(--color-on-surface-disabled);
  }
}
</style>

