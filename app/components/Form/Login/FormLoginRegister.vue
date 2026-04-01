<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="nickname">
      <FormItem>
        <FormLabel>{{ $t("form-register.nickname") }}</FormLabel>
        <FormMessage />
        <FormControl>
          <Input type="text" :placeholder="$t('form-register.nickname')" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="cmdrname">
      <FormItem>
        <FormLabel>{{ $t("form-register.cmdr-name") }}</FormLabel>
        <FormMessage />
        <FormControl>
          <Input type="text" :placeholder="$t('form-register.cmdr-name')" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>{{ $t("form-register.email") }}</FormLabel>
        <FormMessage />
        <FormControl>
          <Input type="email" :placeholder="$t('form-register.email')" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>{{ $t("form-register.password") }}</FormLabel>
        <FormMessage />
        <FormControl>
          <Input type="password" :placeholder="$t('form-register.password')" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>
    <div class="flex flex-row justify-end mt-3">
      <Button type="submit">{{ $t("form-register.register") }}</Button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toast } from "vue-sonner";
import { z } from "zod";

const formSchema = toTypedSchema(
  z.object({
    nickname: z.string().min(3),
    cmdrname: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  useFetch("http://localhost:8000/v1/auth/register", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    onResponse: (response) => {
      console.log(response);
      toast.success("Login successful");
    },
    onResponseError: (error) => {
      console.error(error);
      toast.error("Login failed");
    },
  });
});
</script>

<style lang="scss" scoped></style>
