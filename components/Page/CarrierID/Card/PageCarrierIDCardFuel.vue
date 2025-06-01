<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.fuel") }}</CardTitle>
    </CardHeader>
    <CardContent>
        <DefaultProgressData :progress="level / 10" :dataString="level + 't / 1000t'" color="hsl(var(--secondary))" text-color="hsl(var(--secondary-foreground))"/>
    </CardContent>
    <CardFooter>
      <div class="text-sm text-muted-foreground">
        {{ $t("fuel.description") }}
      </div>
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
defineProps({
	level: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>

</style>