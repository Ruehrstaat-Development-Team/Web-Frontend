<template>
  <div class="theme-image theme-image-wrapper overflow-hidden">
    <Transition name="fade">
      <div class="loader theme-image" v-if="!loaded"></div>
    </Transition>
    <ClientOnly>
      <Transition name="fade">
        <NuxtImg
          :src="src"
          @load="loaded = true"
          class="theme-image object-cover w-full h-full"
          v-if="!$colorMode.unknown"
          v-show="loaded"
        />
      </Transition>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  dark_src: {
    type: String,
    required: true,
  },
  light_src: {
    type: String,
    required: true,
  },
});

const loaded = ref(false);

const colorMode = useColorMode();
const src = computed(() => {
  if (colorMode.value == "dark") {
    return props.dark_src;
  } else {
    return props.light_src;
  }
});

watch(src, () => {
  loaded.value = false;
});
</script>

<style lang="scss" scoped>
.theme-image-wrapper {
  .loader {
    position: absolute;
    height: 100%;
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:root.light-mode {
  .loader {
    background: linear-gradient(
      -45deg,
      #eeeeeeaa 40%,
      #fafafadd 50%,
      #eeeeeeaa 60%
    );
    background-size: 300%;
    background-position-x: 120%;
    animation: shimmer 1s infinite linear;
  }
}

:root.dark-mode {
  .loader {
    background: linear-gradient(
      -45deg,
      #33333355 40%,
      #44444488 50%,
      #33333355 60%
    );
    background-size: 300%;
    background-position-x: 120%;
    animation: shimmer 1s infinite linear;
  }
}

@keyframes shimmer {
  to {
    background-position-x: -20%;
  }
}
</style>