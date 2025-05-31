<template>
	<div class="flex flex-row justify-center items-center h-dvh">
		<Card class="overflow-hidden max-w-[90%] w-[500px] shadow-lg">
			<div class="relative mb-6">
				<ThemeImage
					dark_src="/BackgroundDark.webp"
					light_src="/BackgroundLight.webp"
					class="h-32 w-full overflow-hidden"
				/>
				<h1
					class="text-3xl font-bold text-start absolute bottom-1 left-28 text-white"
				>
					Ruehrstaat Squadron
				</h1>
				<ThemeImage
					dark_src="/BackgroundDark.webp"
					light_src="/BackgroundLight.webp"
					class="absolute bottom-[-20px] left-4 size-20 border-8 border-card rounded-xl image-rounded bg-card"
				/>
				<NuxtImg
					src="/LogoClean.webp"
					class="absolute bottom-[-20px] left-4 size-20 border-8 border-transparent rounded-xl image-rounded bg-transparent"
				/>
			</div>
			<CardContent>
				<slot />
			</CardContent>
		</Card>
	</div>
	<div class="absolute top-0 right-0 p-4">
		<ThemeModeSelector />
		<ThemeLanguageSelector />
	</div>
	<div class="absolute top-0 left-0 p-4">
		<i18n-link :to="{ name: 'index' }">
			<Button variant="ghost">
				<LucideArrowLeft :size="15" />
				{{ $t("layout-centered.menu.home")}}
			</Button>
		</i18n-link>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.image-rounded .theme-image {
	border-radius: var(--radius);
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
