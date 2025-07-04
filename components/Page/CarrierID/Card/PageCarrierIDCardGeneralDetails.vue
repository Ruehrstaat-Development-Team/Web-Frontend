<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("card-titles.general-information") }}</CardTitle>
    </CardHeader>
    <CardContent class="@container">
      <div class="grid grid-cols-1 @xs:grid-cols-2 @xl:grid-cols-3 gap-4">
        <!--#region Name -->
        <DefaultLabeledEditableText :label="$ts('general-information.name')" :edit="edit" name="name" v-slot="componentField">
          <Input type="text" v-bind="componentField" v-model="model.name" :placeholder="$ts('general-information.name')" />
        </DefaultLabeledEditableText>
        <!--#endregion Name -->
        <!--#region Callsign -->
        <DefaultLabeledEditableText :label="$ts('general-information.callsign')" :edit="edit" name="callsign" v-slot="componentField">
          <Input type="text" v-bind="componentField" v-model="model.callsign" :placeholder="$ts('general-information.callsign')" />
        </DefaultLabeledEditableText>
        <!--#endregion Callsign -->
        <!--#region Category-->
        <DefaultLabeledEditableText :label="$ts('general-information.category')" :edit="edit" name="category" v-slot="componentField">
          <Select v-model="model.category">
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
        <!--#endregion Category-->
        <!--#region Location-->
        <DefaultLabeledEditableText :label="$ts('general-information.location')" :edit="edit" name="currentLocation" v-slot="componentField">
          <Input type="text" v-bind="componentField" v-model="model.currentLocation" />
        </DefaultLabeledEditableText>
        <!--#endregion Location-->
        <!--#region DockingAccess-->
        <DefaultLabeledEditableText :label="$ts('general-information.dockingaccess')" :edit="edit" name="dockingAccess" v-slot="componentField">
          <Select v-model="model.dockingAccess">
            <SelectTrigger>
              <SelectValue :placeholder="$ts('general-information.dockingaccess')" v-bind="componentField" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="item in dockingAccessOptions" :key="item" :value="item">
                  {{ $t("general-information.dockingaccess-" + item) }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DefaultLabeledEditableText>
        <!--#endregion DockingAccess-->
        <!--#region Owner -->
        <DefaultLabeledEditableText :label="$ts('general-information.owner')" :edit="edit" name="owner" v-slot="componentField">
          <Select v-model="model.owner">
            <SelectTrigger class="w-full">
              <SelectValue :placeholder="$ts('general-information.owner')" v-bind="componentField" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="user in userOptions" :key="user.id" :value="user.id">
                  {{ user.nickname || user.cmdrName || user.email }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DefaultLabeledEditableText>
        <!--#endregion Owner-->
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
  dockingAccessOptions: {
    type: Array as () => string[],
    required: false,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
