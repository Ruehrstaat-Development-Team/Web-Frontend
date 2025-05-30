<template>
	<PageHeader page-title="">
		<template v-slot:header-image>
			<div class="w-full h-44 rounded-lg shadow-md absolute top-0 left-0 flex flex-row items-center justify-center gap-4 backdrop-brightness-75">
				<NuxtImg class="w-40 h-40"
					src="/LogoClean.webp"
					alt="Ruehrstaat Squadron Banner Background"
				/>
        <NuxtImg class="h-24"
          src="/LogoText.webp"
          alt="Ruehrstaat Squadron Logo Text"
          />
			</div>
		</template>
	</PageHeader>
	<PageContent>
    <PageIndexSectionGeneralInformation />
    <PageIndexSectionAboutUs />
    <PageIndexSectionAboutElite />
  </PageContent>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
