<template>
  <button @click="click" :disabled="data.disabled.value" class="button-primary" :type="$props.type">
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
  font-size: var(--font-size-s);

  background: var(--color-primary);
  color: var(--color-on-primary);

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
    height: var(--font-size-m);
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
    border: 0px solid var(--color-on-primary) !important;
  }

  .loader-spinner {
    border: 2px solid var(--color-on-primary);
  }
}

button:hover {
  background: var(--color-primary-hover);
  color: var(--color-on-primary-hover);
  border: 2px solid var(--color-primary-hover);

  cursor: pointer;
}

button:disabled {
  background: var(--color-primary-disabled);
  color: var(--color-on-primary-disabled);
  border: 2px solid var(--color-primary-disabled);
  
  cursor: progress;

  .loader-spinner {
    border-color: var(--color-on-primary-disabled);
  }
}
</style>

