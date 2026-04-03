<template>
  <div class="ring-container">
    <div class="ringring"></div>
    <div class="circle"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.ring-container {
  position: relative;
  width: 15px;
  height: 15px;
}

.circle {
  width: 7px;
  height: 7px;
  background-color: var(--color-secondary);
  position: absolute;
  top: 4px;
  left: 4px;
}

.ringring {
  border: 3px solid var(--color-secondary);
  border-radius: 0px;
  height: 15px;
  width: 15px;
  position: absolute;
  animation: pulsate 1.5s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
  top: 0;
  left: 0;
}
@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: .6;
  }
  100% {
    transform: scale(1.0, 1.0);
    opacity: 0;
  }
}
</style>
