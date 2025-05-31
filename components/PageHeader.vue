<template>
	<div
		class="bg-transparent w-full flex flex-row p-2 items-center sticky top-0 z-10 h-[50px]"
	>
		<SidebarTrigger  class="mr-auto"/>
		<div class="flex flex-row items-center gap-1">
			<ThemeModeSelector />
			<ThemeLanguageSelector />
		</div>
	</div>
	<div class="relative mx-auto max-w-[90%] overflow-hidden" :class="maxWidth">
		<ThemeImage
			class="w-full h-44 rounded-lg shadow-md"
			dark_src="/BackgroundDark.webp"
			light_src="/BackgroundLight.webp"
			alt="Ruehrstaat Squadron Banner Background"
		/>
		<i18n-link :to="{ name: backNavigationName}" v-if="backNavigationName" class="absolute top-0 left-0 p-5">
			<LucideArrowLeft class="text-white" />
		</i18n-link>
		<h1
			class="text-4xl font-semibold font-[Primal] mt-5 absolute bottom-0 left-0 text-white p-5"
		>
			{{ pageTitle }}
		</h1>
		<slot name="header-image"/>
		<div
			class="flex flex-row items-center justify-start absolute bottom-0 right-0 p-5 gap-2"
		>
			<slot name="buttons"/>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	pageTitle: {
		type: String,
		required: true,
	},
	maxWidth: {
		type: String,
		default: "w-[100em]",
	},
	backNavigationName: {
		type: String,
		default: null,
	},
});
</script>

<style lang="scss" scoped>
.progress {
	animation: progress 1s infinite linear;
}

.left-right {
	transform-origin: 0% 50%;
}
@keyframes progress {
	0% {
		transform: translateX(-10px) scaleX(0);
	}
	40% {
		transform: translateX(0) scaleX(0.6);
	}
	100% {
		transform: translateX(calc(100% + 20px)) scaleX(0.3);
	}
}
</style>
