<template>
  <NavigationSidebarUserLoggedOut v-if="!store.user" />
  <NavigationSidebarUserLoggedIn v-else :user="store.user" />
</template>

<script lang="ts" setup>
let store = useUserStore();
</script>

<style lang="scss" scoped></style>
