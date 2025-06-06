<template>
  <PageHeader page-title="Profile">

  </PageHeader>
  <PageContent>
    <Card>
      <CardHeader>
        <h2 class="text-lg font-semibold">Profile Information</h2>
      </CardHeader>
      <CardContent>
        	<span>{{ user?.isAdmin }}</span>
        	<span>{{ user?.cmdrName }}</span>
        	<span>{{ user?.email }}</span>
      </CardContent>
    </Card>
  </PageContent>
</template>

<script lang="ts" setup>
var { user } = useUserStore();

useHead({
  title: "Profile | Ruehrstaat Squadron",
  meta: [
    {
      name: "description",
      content: "View and manage your profile information.",
    },
  ],
});
</script>

<style lang="scss" scoped>

</style>