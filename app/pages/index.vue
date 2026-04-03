<template>
  <PageIndexHero />
  <PageContent>
    <PageIndexSectionGeneralInformation />
    <PageIndexSectionAboutUs />
    <PageIndexSectionAboutElite />
  </PageContent>
</template>

<script lang="ts" setup>
useHead({
  title: "Ruehrstaat Squadron",
  meta: [
    {
      name: "description",
      content: "Welcome to the Ruehrstaat Squadron, a community of Elite Dangerous players.",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
