<template>
	<DropdownMenu>
		<DropdownMenuTrigger
			class="hover:bg-sidebar-accent rounded-md transition-[padding] duration-200"
			:class="{ 'p-2': open, 'p-[2px]': !open }"
		>
			<div class="flex flex-row items-center gap-3">
				<div
					class="flex items-center justify-center bg-primary text-primary-foreground rounded-sm p-1 size-7 min-h-7 min-w-7 align-middle"
				>
					<LucideUser :size="16" />
				</div>
				<span
					class="flex-grow flex flex-col justify-center items-start"
				>
					<span class="leading-none whitespace-nowrap">{{ $t("layout-default.menu.settings") }}</span>
				</span>
			</div>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-60">
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<i18n-link
						:to="{ name: 'settings' }"
						class="flex items-center gap-2 w-full h-full"
					>
						<LucideSettings :size="16" />
						<span>{{ $t("layout-default.menu.settings") }}</span>
					</i18n-link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<i18n-link
						:to="{ name: 'login', query: { redirect: route.fullPath } }"
						class="flex items-center gap-2 w-full h-full"
					>
						<LucideArrowRightFromLine :size="16" />
						<span>{{ $t("layout-default.menu.login") }}</span>
					</i18n-link>
				</DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";
const { open } = useSidebar();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
