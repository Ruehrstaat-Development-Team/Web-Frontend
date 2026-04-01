<template>
  <div
    class="dialog-background"
    :class="{ expanded: props.nav.IsExpanded.value }"
    @click="toggleExpanded()"
  ></div>
  <aside class="navigation-rail" :class="{ expanded: props.nav.IsExpanded.value }">
    <span
      class="material-symbols-rounded navigation-rail-hamburger-menu"
      @click="toggleExpanded()"
      >menu</span
    >
    <span class="navigation-rail-title-text">Ruehrstaat Squadron</span>
    <NavigationRailItem v-for="item in props.nav.Destinations"
      :icon="item.Icon"
      :title="item.Name"
      :is-expanded="props.nav.IsExpanded.value"
      :to="item.Path"
      :toggle-func="toggleExpanded"
    />
    <select v-model="$colorMode.preference">
      <option>light</option>
      <option>dark</option>
      <option>system</option>
    </select>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps({
  nav: {
    type: Object,
    required: true,
  }
})

const toggleExpanded = () => {
  props.nav.IsExpanded.value = !props.nav.IsExpanded.value;
};
</script>

<style scoped lang="scss">
@use "~/assets/css/main.scss";
.navigation-rail {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 80px;
  background: var(--background-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  transition: width var(--animation-time-l) var(--easing-default),
    border-radius var(--animation-time-l) var(--easing-default);

  .navigation-rail-hamburger-menu {
    margin: 16px 0 16px 0;
    font-size: 24px;
    padding: 0 28px 0 28px;
    height: 24px;
    cursor: pointer;
    transition: height var(--animation-time-l) var(--easing-default),
      margin var(--animation-time-l) var(--easing-default),
      opacity var(--animation-time-l) var(--easing-default);
  }

  .navigation-rail-title-text{
    font-size: 14px;
    font-weight: 600;
    padding-left: 28px;
    height: 0px;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 52px;
    margin: 0;
    transition: opacity var(--animation-time-l) var(--easing-default),
      width var(--animation-time-l) var(--easing-default),
      margin var(--animation-time-l) var(--easing-default),
      height var(--animation-time-l) var(--easing-default);
  }

  .material-symbols-rounded {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
  }
}

.navigation-rail.expanded {
  width: 360px;
  border-radius: 0 28px 28px 0;

  .navigation-rail-hamburger-menu{
    height: 0px;
    opacity: 0;
    margin: 0;
    pointer-events: none;
  }

  .navigation-rail-title-text{
    opacity: 1;
    width: 332px;
    margin: 10px 0 10px 0;
    height: 20px;
  }
}

.dialog-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--animation-time-l) var(--easing-default);
}
.dialog-background.expanded {
  opacity: 0.5;
  pointer-events: all;
}
</style>

<style lang="scss">
@use "~/assets/css/main.scss";
.navigation-rail .navigation-rail-item:hover{
  .navigation-rail-item-pill{
    background: var(--background-hover);
  }
}

.navigation-rail .navigation-rail-item-active:hover{
  .navigation-rail-item-pill{
    background: var(--background-hover-active);
  }
}
</style>