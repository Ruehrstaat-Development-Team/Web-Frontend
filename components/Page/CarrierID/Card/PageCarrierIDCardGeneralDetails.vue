<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
    </CardHeader>
    <CardContent class="@container">
      <div class="grid grid-cols-1 @xs:grid-cols-2 @xl:grid-cols-3 gap-4">
        <DefaultLabeledEditableText :label="$ts('general-information.name')" :edit="edit" name="name" v-slot="componentField">
          <Input type="text" v-bind="componentField" v-model="model.name" :placeholder="$ts('general-information.name')" />
        </DefaultLabeledEditableText>
        <DefaultLabeledEditableText :label="$ts('general-information.callsign')" :edit="edit" name="callsign" v-slot="componentField">
          <Input type="text" v-bind="componentField" v-model="model.callsign" :placeholder="$ts('general-information.callsign')" />
        </DefaultLabeledEditableText>
        <DefaultLabeledEditableText :label="$ts('general-information.category')" :edit="edit" name="category" v-slot="componentField">
          <Select>
            <SelectTrigger>
              
              
              
              <SelectValue :placeholder="$ts('general-information.category')" v-bind="componentField" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="item in categoryOptions" :key="item" :value="item">
                  {{ $t("general-information.category-" + item) }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DefaultLabeledEditableText>
        <DefaultLabeledEditableText :label="$ts('general-information.location')" :edit="edit" name="currentLocation" v-slot="componentField">
          <Input type="text" v-bind="componentField" />
        </DefaultLabeledEditableText>
        <DefaultLabeledText :label="$ts('general-information.dockingaccess')" :value="$ts('general-information.dockingaccess-' + model.dockingAccess)" />
        <Select v-model="model.owner">
          <SelectTrigger class="w-full">
            <SelectValue :placeholder="$ts('general-information.owner')" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="user in userOptions" :key="user.id" :value="user.id">
                {{ user.nickname || user.cmdrName || user.email }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Carrier } from "~/@types/api/carrier";
const model = defineModel<Carrier>({ required: true });
defineProps({
  edit: {
    type: Boolean,
    required: false,
    default: false,
  },
  categoryOptions: {
    type: Array as () => string[],
    required: false,
    default: () => [],
  },
  userOptions: {
    type: Array as () => User[],
    required: false,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
