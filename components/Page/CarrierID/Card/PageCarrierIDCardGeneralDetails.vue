<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
    </CardHeader>
    <CardContent class="@container">
      <div class="grid grid-cols-1 @xs:grid-cols-2 @xl:grid-cols-3 gap-4">
        <DefaultLabeledEditableText
          :label="$ts('general-information.name')"
          :edit="edit"
          name="name"
          v-slot="componentField"
        >
          <Input type="text" v-bind="componentField" />
        </DefaultLabeledEditableText>
        <DefaultLabeledEditableText
          :label="$ts('general-information.callsign')"
          :edit="edit"
          name="callsign"
          v-slot="componentField"
        >
          <Input type="text" v-bind="componentField" />
        </DefaultLabeledEditableText>
        <DefaultLabeledEditableText
          :label="$ts('general-information.category')"
          :edit="edit"
          name="category"
          v-slot="componentField"
        >
          <Input type="text" v-bind="componentField" />
        </DefaultLabeledEditableText>
        <DefaultLabeledEditableText
          :label="$ts('general-information.location')"
          :edit="edit"
          name="currentLocation"
          v-slot="componentField"
        >
          <Input type="text" v-bind="componentField" />
        </DefaultLabeledEditableText>
        <DefaultLabeledText
          :label="$ts('general-information.dockingaccess')"
          :value="
            $ts('general-information.dockingaccess-' + carrier.dockingAccess)
          "
        />
        <DefaultLabeledText
          :label="$ts('general-information.owner')"
          :value="carrier.owner || $ts('general-information.no-owner')"
        />
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Carrier } from "~/@types/api/carrier";
defineProps({
  carrier: {
    type: Object as PropType<Carrier>,
    required: true,
  },
  edit: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
