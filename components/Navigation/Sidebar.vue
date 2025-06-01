<template>
	<Sidebar collapsible="icon" class="overflow-hidden">
		<SidebarHeader>
			<NavigationSidebarTop />
		</SidebarHeader>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupContent>
					<NavigationSidebarMenuItem v-for="item in navigationItems.items" :selected-item="item" />					
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarGroup class="mt-auto" v-if="persistentStore.isDesktopApp">
				<SidebarGroupContent>
					<NavigationSidebarMenuItem v-for="item in navigationItems.bottomItems" :selected-item="item" />
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
			<NavigationSidebarUser />
		</SidebarFooter>
	</Sidebar>
</template>

<script lang="ts" setup>
const navigationItems = navigationMenu();
const persistentStore = usePersistentStore();

</script>

<style lang="scss" scoped></style>
