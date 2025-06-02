<template>
	<DropdownMenu>
		<DropdownMenuTrigger>
			<ClientOnly>
				<Button variant="ghost" class="size-7 p-0">
					<LucideGlobe />
				</Button>
			</ClientOnly>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuItem @click="$switchLocale('en')">
				<span>English</span>
			</DropdownMenuItem>
			<DropdownMenuItem @click="$switchLocale('de')">
				<span>Deutsch</span>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
