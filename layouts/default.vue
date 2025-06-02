<template>
	<SidebarProvider
		@update:open="openUpdated"
		:default-open="persistentStore.sidebarOpen"
	>
		<NavigationSidebar />
		<main
			class="relative transition-width duration-300 mb-4 overflow-hidden @container/main"
			:class="{
				open: persistentStore.sidebarOpen,
				closed: !persistentStore.sidebarOpen,
			}"
		>
			<slot />
		</main>
	</SidebarProvider>
</template>

<script lang="ts" setup>
const persistentStore = usePersistentStore();
const openUpdated = function (open: boolean) {
	persistentStore.setSidebarOpen(open);
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
	main {
		width: 100%;
	}
}
@media (min-width: 769px) {
	main.open {
		width: calc(100% - var(--sidebar-width));
	}
	main.closed {
		width: calc(100% - var(--sidebar-width-icon));
	}
}
</style>
