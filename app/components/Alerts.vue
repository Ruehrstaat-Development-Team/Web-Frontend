<template>
  <div class="alert-wrapper">
    <TransitionGroup name="alert-list" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <div
        class="alert"
        :class="['alert-' + alert.type]"
        v-for="alert in props.alerts"
        :key="alert.id"
      >
        <h3 class="alert-title">
          <span v-if="alert.code">{{ alert.code }} |</span>
          {{ $t(alert.title) }}
        </h3>
        <ButtonIcon
          :data="closeButtonData"
          @click="alert_service?.removeAlert(alert)"
        />
        <span class="alert-message">{{ $t(alert.message) }}</span>
        <div class="alert-countdown">
          <div
            class="progress"
            :style="{ width: alert.progress / (alert.ttl * 10) + '%' }"
          ></div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
const props = defineProps({
  alert_service: {
    type: Object as PropType<AlertService>,
    reqired: true,
  },
  alerts: {
    type: Array as PropType<Alert[]>,
    default: [],
  },
});

const closeButtonData: ButtonData = reactive({
  icon: "close",
  text: undefined,
  loading: false,
  disabled: false,
  tooltip: "close",
});

function onBeforeEnter(el: Element) {
  var element = el as HTMLElement;
  element.style.opacity = "0";
  element.style.height = "0";
  element.style.minHeight = "0";
  element.style.padding = "0 20px 0 20px";
  element.style.marginBottom = "0";
}

function onEnter(el: Element, done: gsap.Callback | undefined) {
  gsap.to(el, {
    opacity: 1,
    height: "auto",
    minHeight: "50px",
    padding: "20px",
    marginBottom: "10px",
    duration: .5,
    onComplete: done,
  })
}

function onLeave(el: Element, done: gsap.Callback | undefined) {
  gsap.to(el, {
    opacity: 0,
    minHeight: 0,
    padding: "0 20px 0 20px",
    height: 0,
    marginBottom: 0,
    duration: .5,
    onComplete: done,
  });
}
</script>

<style lang="scss" scoped>
.alert-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  z-index: 1000;
  pointer-events: none;

  .alert {
    padding: 20px;
    border-radius: 20px;
    min-width: min(300px, calc(100% - 40px));
    min-height: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    pointer-events: all;
    position: relative;
    overflow: hidden;

    .button-icon {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .alert-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0 0 10px 0;
    }

    .alert-countdown {
      width: 100%;
      height: 5px;
      border-radius: 5px;
      margin: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      border: none;

      .progress {
        height: 100%;
      }
    }
  }

  .alert-success {
    background: var(--color-success);
    color: var(--color-on-success);
    .progress {
        background: var(--color-success-accent);
    }
    .button-icon {
      color: var(--color-on-success);
      border-color: var(--color-on-success);
    }
  }

  .alert-error {
    background: var(--color-error);
    color: var(--color-on-error);
    .progress {
        background: var(--color-error-accent);
    }
    .button-icon {
      color: var(--color-on-error);
      border-color: var(--color-on-error);
    }
  }

  .alert-warning {
    background: var(--color-warning);
    color: var(--color-on-warning);
    .progress {
        background: var(--color-warning-accent);
    }
    .button-icon {
      color: var(--color-on-warning);
      border-color: var(--color-on-warning);
    }
  }

  .alert-info {
    background: var(--color-info);
    color: var(--color-on-info);
    .progress {
        background: var(--color-info-accent);
    }
    .button-icon {
      color: var(--color-on-info);
      border-color: var(--color-on-info);
    }
  }
}
</style>
