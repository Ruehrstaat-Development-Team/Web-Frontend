<template>
	<PageHeader page-title="">
		<template v-slot:header-image>
			<div
				class="w-full h-44 rounded-lg shadow-md absolute top-0 left-0 flex flex-row items-center justify-center gap-4 backdrop-brightness-75 max-w-full p-10 overflow-hidden"
			>
				<div class="max-w-40 max-h-40 flex-auto overflow-hidden">
					<NuxtImg
						class="max-w-40 max-h-40 w-full"
						src="/LogoClean.webp"
						alt="Ruehrstaat Squadron Banner Background"
					/>
				</div>
				<div class="max-h-24">
					<NuxtImg
						class="max-h-24"
						src="/LogoText.webp"
						alt="Ruehrstaat Squadron Logo Text"
					/>
				</div>
			</div>
		</template>
	</PageHeader>
	<PageContent>
		<PageIndexSectionGeneralInformation />
		<PageIndexSectionAboutUs />
		<PageIndexSectionAboutElite />
	</PageContent>
</template>

<script lang="ts" setup>
useHead({
	title: 'Ruehrstaat Squadron',
	meta: [
		{
			name: 'description',
			content: 'Welcome to the Ruehrstaat Squadron, a community of Elite Dangerous players.',
		},
	],
});
</script>

<style lang="scss" scoped></style>
