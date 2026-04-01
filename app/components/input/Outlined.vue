<template>
  <div class="input-text" :class="{ error: $props.data.error }">
    <input
      :type="data.type.value"
      @focus="focus()"
      @blur="blur()"
      v-model="model"
      :placeholder="data.placeholder.value ? $t(data.placeholder.value) : ''"
      :disabled="data.disabled.value"
      :name="data.label.value"
      :autocomplete="data.autocomplete.value"
    />
    <span class="label" :class="{ focused: focused }" v-if="data.label.value">{{
      $t(data.label.value)
    }}</span>
    <ButtonIcon
      v-if="data.button.value && !data.loading.value"
      :data="data.button.value"
      :type="'button'"
      @click="click"
    />
    <span class="loader-spinner" v-if="data.loading.value"></span>
    <span class="error-text" v-if="data.error.value != null">{{
      $t(data.error.value.toString())
    }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<InputData>,
    required: true,
  },
});

const data = toRefs(props.data);

const model = defineModel({ required: true, type: String });

const emit = defineEmits(["click", "blur"]);

function click() {
  emit("click");
}

var focused = ref(false);
function focus() {
  focused.value = true;
}
function blur() {
  if (model.value == "") {
    focused.value = false;
  }
  emit("blur");
}

onMounted(() => {
  if (model.value != "") {
    focused.value = true;
  }
});
</script>

<style lang="scss" scoped>
.input-text {
  position: relative;
  margin-top: 15px;
  transition-property: margin;
  transition-duration: var(--animation-time-m);
  transition-timing-function: var(--easing-decelerate);

  .loader-spinner {
    border: 2px solid var(--color-on-primary);
    position: absolute;
    top: 3px;
    right: 3px;
    margin: 8px 7px 5px 7px;
  }

  input {
    border-radius: 12px;
    border: 3px solid transparent;
    padding: 5px 35px 5px 10px;
    background: var(--color-surface-variant);
    color: var(--color-on-surface-variant);
    transition-duration: var(--animation-time-s);
    transition-timing-function: var(--easing-decelerate);
    transition-property: border, background, color;
    height: 25px;
    font-size: 16px;
    width: calc(100% - 51px);
  }

  input:focus {
    outline-style: none;
    border: 3px solid var(--color-primary);
  }

  input::placeholder {
    opacity: 0;
    color: var(--color-on-surface-variant-disabled);
    transition-property: opacity;
    transition-duration: var(--animation-time-m);
    transition-timing-function: var(--easing-decelerate);
    transition-delay: 0s;
  }

  input:focus::placeholder {
    opacity: 1;
    transition-delay: var(--animation-time-xs);
  }

  input:disabled {
    background: var(--color-surface-variant-disabled);
    color: var(--color-on-surface-variant-disabled);
  }

  .label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px 10px;
    font-weight: 600;
    transition-duration: var(--animation-time-m);
    transition-timing-function: var(--easing-decelerate);
    transition-property: top, left, padding, font-size;
    pointer-events: none;
    font-size: var(--font-size-s);
  }

  .label.focused {
    top: -20px;
    left: 0px;
    padding: 0 7px;
    font-size: var(--font-size-s);
  }

  .button-icon {
    position: absolute;
    top: 3px;
    right: 3px;
    padding: 8px 7px 5px 7px;
    color: var(--color-on-surface-variant);
    border-radius: 12px;
  }

  .error-text {
    color: var(--color-error);
    border-radius: 8px;
    //padding: 1px 10px 2px 10px;
    font-size: var(--font-size-xs);
    margin: 5px 0 0 10px;
    position: absolute;
    bottom: -20px;
    left: 0px;
  }
}

.input-text.error {
  margin-bottom: 15px;
  input {
    border: 3px solid var(--color-error);
  }
}
</style>

