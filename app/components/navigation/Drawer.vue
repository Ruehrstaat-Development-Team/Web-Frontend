<template>
  <div class="dialog-background" :class="{expanded: props.nav.IsExpanded.value}" @click="toggleExpanded()"></div>
  <aside class="navigation-drawer" :class="{expanded: props.nav.IsExpanded.value}">
    <span class="navigation-drawer-title">Rührstaat Squadron</span>
    <NavigationDrawerItem v-for="item in props.nav.Destinations" :icon="item.Icon" :title="item.Name" :to="item.Path" :toggle-func="toggleExpanded" />
    <select v-model="$colorMode.preference">
      <option>light</option>
      <option>dark</option>
      <option>system</option>
    </select>
  </aside>
</template>

<script lang="ts" setup>
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
.dialog-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0;
  transition: opacity var(--animation-time-l) var(--easing-accelerate);
  pointer-events: none;
}
.dialog-background.expanded {
  opacity: 0.5;
  pointer-events: all;
  transition: opacity var(--animation-time-l) var(--easing-decelerate);
}

.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100vw - 120px);
  background: var(--background-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  transition: border-radius var(--animation-time-m) var(--easing-accelerate),
    margin-left var(--animation-time-m) var(--easing-accelerate);
  margin-left: calc((100vw - 120px) * -1);

  .navigation-drawer-title{
    font-size: 14px;
    font-weight: 600;
    padding-left: 28px;
    white-space: nowrap;
    overflow: hidden;
    margin: 20px 0 0 0;
  }
}

.navigation-drawer.expanded {
  margin-left: 0;
  border-radius: 0 16px 16px 0;
  transition: border-radius var(--animation-time-m) var(--easing-decelerate),
    margin-left var(--animation-time-m) var(--easing-decelerate);
}
</style>