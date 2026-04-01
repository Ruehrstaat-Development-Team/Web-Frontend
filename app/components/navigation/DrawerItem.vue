<template>
  <div
    class="navigation-drawer-item"
    :class="{ 'navigation-drawer-item-active': props.to == currentRoute.path }"
    @click="navigate()"
  >
    <div class="navigation-drawer-item-pill-wrapper">
      <div class="navigation-drawer-item-pill">
        <span class="material-symbols-rounded navigation-drawer-item-icon">{{
          props.icon
        }}</span>
        <span class="navigation-drawer-item-text">{{ props.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
var currentRoute = router.currentRoute;
const props = defineProps({
  icon: {
    type: String,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
  to: {
    type: String,
    default: "",
    required: true,
  },
  toggleFunc: {
    type: Function,
    default: () => {},
    required: false,
  },
});
const navigate = () => {
  router.push(props.to);
  props.toggleFunc();
};
</script>

<style lang="scss">
@use "~/assets/css/main.scss";
.navigation-drawer-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0 8px 0;
  cursor: pointer;
  transition: background-color var(--animation-time-l) var(--easing-default);

  .material-symbols-rounded {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
    font-size: 24px;
    min-width: 24px;
    min-height: 24px;
  }

  .navigation-drawer-item-pill-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: calc(100vw - 120px);

    .navigation-drawer-item-pill {
      width: calc(100vw - 170px);
      padding: 0 16px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 28px;
      gap: 10px;
      transition: background var(--animation-time-s) var(--easing-default),
        border-radius var(--animation-time-l) var(--easing-default),
        padding var(--animation-time-l) var(--easing-default);
    }
  }
}

.navigation-drawer-item-active {

  .material-symbols-rounded {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
  }

  .navigation-drawer-item-pill {
    background-color: var(--background-200);
  }
}
</style>
