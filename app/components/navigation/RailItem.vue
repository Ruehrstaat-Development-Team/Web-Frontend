<template>
  <div
    class="navigation-rail-item"
    :class="{
      'navigation-rail-item-active': currentRoute.path == props.to,
      'navigation-rail-item-expanded': props.isExpanded,
    }"
    @click="navigate()"
  >
    <div class="navigation-rail-item-pill-wrapper">
      <div class="navigation-rail-item-pill">
        <span class="material-symbols-rounded navigation-rail-item-icon">{{ props.icon }}</span>
        <span class="navigation-rail-item-text-expanded">{{
          props.title
        }}</span>
      </div>
    </div>
    <div class="navigation-rail-item-text-wrapper">
      <span class="navigation-rail-item-text">{{ props.title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
const router = useRouter();
var currentRoute = router.currentRoute;
const props = defineProps({
  icon: {
    type: String,
    default: "",
    required: true,
  },
  icon_svg: {
    type: String,
    default: "",
    required: false,
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
  badge: {
    type: Number as PropType<number | null>,
    default: null,
    required: false,
  },
  isExpanded: {
    type: Boolean,
    default: false,
    required: false,
  },
  toggleFunc: {
    type: Function,
    default: () => {},
    required: false,
  },
});

const navigate = () => {
  router.push(props.to);
  if (props.isExpanded) {
    props.toggleFunc();
  }
};
</script>

<style scoped lang="scss">
@use "~/assets/css/main.scss";
.navigation-rail-item {
  height: 56px;
  width: 80px;
  cursor: pointer;
  transition: width var(--animation-time-l) var(--easing-default);

  .material-symbols-rounded {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
    font-size: 24px;
    min-width: 24px;
    min-height: 24px;
  }

  .navigation-rail-item-pill-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 80px;
    transition: width var(--animation-time-l) var(--easing-default);

    .navigation-rail-item-pill {
      border-radius: 16px;
      width: 24px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 16px;
      font-size: 20px;
      line-height: 1;
      gap: 10px;
      overflow: hidden;
      transition: background var(--animation-time-s) var(--easing-default),
        border-radius var(--animation-time-l) var(--easing-default),
        padding var(--animation-time-l) var(--easing-default),
        width var(--animation-time-l) var(--easing-default),
        height var(--animation-time-l) var(--easing-default);

      .navigation-rail-item-text-expanded {
        height: 20px;
        width: 0;
        opacity: 0;
        transition: opacity var(--animation-time-l) var(--easing-default);
      }

      .navigation-rail-item-icon {
        min-width: 24px;
        min-height: 24px;
      }
    }
  }
  .navigation-rail-item-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;

    .navigation-rail-item-text {
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      height: 0px;
      opacity: 1;
      transition: opacity var(--animation-time-l) var(--easing-default);
    }
  }
}

.navigation-rail-item.navigation-rail-item-expanded {
  .navigation-rail-item-pill-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 360px;

    .navigation-rail-item-pill {
      width: 304px;
      padding: 0 16px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 28px;
      gap: 10px;

      .navigation-rail-item-text-expanded {
        opacity: 1;
      }
    }
  }
  .navigation-rail-item-text-wrapper {
    .navigation-rail-item-text {
      opacity: 0;
    }
  }
}

.navigation-rail-item.navigation-rail-item-active {
  .material-symbols-rounded {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
  }

  .navigation-rail-item-pill {
    background: var(--background-200);

    .navigation-rail-item-icon {
      color: var(--text);
    }
  }
}
</style>
