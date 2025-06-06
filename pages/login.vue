<template>
	<div class="flex flex-col space-y-4">
		<div class="w-full flex flex-row justify-center">
			<Tabs v-model="selectedTab">
				<TabsList>
					<TabsTrigger value="login" class="w-32">{{ $t("menu.login") }}</TabsTrigger>
					<TabsTrigger value="register" class="w-32"
						>{{ $t("menu.register") }}</TabsTrigger
					>
				</TabsList>
			</Tabs>
		</div>

		<FormLogin v-if="selectedTab === 'login'" />
    <FormLoginRegister v-else-if="selectedTab === 'register'" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: "centered"
});

useHead({
	title: "Login | Ruehrstaat Squadron",
	meta: [
		{
			name: "description",
			content: "Login to the Ruehrstaat Squadron",
		},
	],
});

const selectedTab = ref("login");
</script>

<style lang="scss" scoped></style>
