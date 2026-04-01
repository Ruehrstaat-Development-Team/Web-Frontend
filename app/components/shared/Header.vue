<template>
  <header class="site-header-wrapper" :style="{ height: headerHeight + 'px', 'border-bottom-left-radius': headerBorderRadius + 'px', 'border-bottom-right-radius': headerBorderRadius + 'px' }">
    <ThemeImage :dark_src="'/HeaderBackgroundDark.webp'" :light_src="'/HeaderBackgroundLight.webp'" class="site-header-background" :style="{opacity: headerBackgroundOpacity}"/>
    <div class="site-header">
      <div
        class="menu-wrapper"
        v-if="$device.isMobile"
        @click="toggleExpanded()"
      >
        <span class="material-symbols-rounded"> menu </span>
      </div>
      <div class="title">
        {{ currentRouteName }}
      </div>
    </div>
    
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  nav: {
    type: Object,
    required: true,
  },
});
const toggleExpanded = () => {
  props.nav.IsExpanded.value = !props.nav.IsExpanded.value;
};
const router = useRouter();
var currentRoute = router.currentRoute;
var currentRouteName = computed(() => {
  if (currentRoute.value.path == "/") {
    return "Rührstaat Squadron";
  } else {
    return props.nav.Destinations.find(
      (d: any) => d.Path === currentRoute.value.path
    )?.Name;
  }
});

const headerHeight = ref(400);
const headerBackgroundOpacity = ref(1);
const headerBorderRadius = ref(0);
if(useDevice().isMobile){
  headerHeight.value = 200;
  headerBackgroundOpacity.value = 1;
  headerBorderRadius.value = 25;
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
function handleScroll() {
  if (useDevice().isMobile) {
    headerHeight.value = Math.max(200 - window.scrollY, 80);
    headerBackgroundOpacity.value = (120 - window.scrollY)  / 120;
    headerBorderRadius.value = Math.max(35 - (window.scrollY / 3), 0);
  }
}
</script>

<style scoped lang="scss">
.site-header-wrapper {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--background-100);
  overflow: hidden;

  .site-header {
    height: 50px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: larger;
  }

  .site-header-background{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }
}

.site-header-wrapper.desktop-header {
  position: relative;
  height: 80px;
  margin: 20px 50px 20px 130px;
  width: calc(100% - 220px);
  border-radius: 50px !important;
  padding: 20px;
  .site-header {
    padding: 0 15px;
    z-index: 0;
  }

  .site-header-background{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}

.menu-wrapper {
  padding-right: 15px;
  cursor: pointer;
}
</style>
