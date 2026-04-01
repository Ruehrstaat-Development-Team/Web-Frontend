<template>
  <Card>
    <CardHeader class="relative">
      <CardTitle class="flex items-center justify-between">
        {{ $t("card-titles.route") }}
        <LucideArrowRight />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Stepper orientation="vertical" :model-value="3" class="flex flex-col gap-10 relative">
        <StepperItem :step="1" class="relative">
          <StepperSeparator class="absolute left-[18px] top-[40px] block h-[100%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-secondary" />
          <StepperIndicator
            class="group-data-[state=completed]:border-secondary group-data-[state=completed]:border-2 group-data-[state=inactive]:bg-primary/20 group-data-[state=active]:bg-secondary group-data-[state=active]:text-secondary-foreground"
          >
            <LucidePlaneTakeoff class="size-4" />
          </StepperIndicator>
          <div class="flex flex-col">
            <StepperTitle> Sowiio ABC 1 </StepperTitle>
          </div>
        </StepperItem>
        <StepperItem :step="2" class="relative">
          <StepperSeparator class="absolute left-[18px] top-[40px] block h-[100%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-secondary" />
          <StepperIndicator
            class="group-data-[state=completed]:border-secondary group-data-[state=completed]:border-2 group-data-[state=inactive]:bg-primary/20 group-data-[state=active]:bg-secondary group-data-[state=active]:text-secondary-foreground"
          >
            1
          </StepperIndicator>

          <div class="flex flex-col">
            <StepperTitle> Sowiio ABC 1a </StepperTitle>
          </div>
        </StepperItem>
        <StepperItem :step="3" class="relative">
          <StepperSeparator class="absolute left-[18px] top-[40px] block h-[100%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />
          <StepperIndicator
            class="group-data-[state=completed]:border-primary group-data-[state=completed]:border-2 group-data-[state=inactive]:bg-primary/20 group-data-[state=completed]:bg-primary/50 group-data-[state=active]:bg-secondary group-data-[state=active]:text-secondary-foreground"
          >
            2
          </StepperIndicator>

          <div class="flex flex-col">
            <StepperTitle> Sowiio ABC 1a </StepperTitle>
          </div>
        </StepperItem>
        <StepperItem :step="4" class="relative">
          <StepperIndicator
            class="group-data-[state=completed]:border-primary group-data-[state=completed]:border-2 group-data-[state=inactive]:bg-primary/20 group-data-[state=completed]:bg-primary/50"
          >
            <LucideFlag class="size-4" />
          </StepperIndicator>
          <div class="flex flex-col">
            <StepperTitle> Sowiio ABC 1a </StepperTitle>
          </div>
        </StepperItem>
      </Stepper>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
