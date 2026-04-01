<template>
  <h2>Ruehrstaat Squadron</h2>
  <form @submit.prevent="handleSubmit()">
    <div class="input-wrapper">
      <InputOutlined :data="emailInput" v-model="loginData.email" @blur="$v.email.$touch"/>
      <InputOutlined
        :data="passwordInput"
        v-model="loginData.password"
        @click="passwordVisible = !passwordVisible"
        @blur="$v.password.$touch"
      />
    </div>
    <div class="button-wrapper">
      <ButtonOutlined
        :data="registerButton"
        @click="console.log('Registrieren')"
      />
      <ButtonPrimary :data="loginButton" type="submit"/>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

definePageMeta({
  layout: "centered",
});

const loginData = reactive<Credentials>({
  email: "",
  password: "",
  otp: null,
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  };
});

const $v = useVuelidate(rules, loginData);

const submitted = ref(false);
const passwordVisible = ref(false);

const loginButton: ButtonData = reactive({
  text: "login",
  icon: "login",
  loading: submitted,
  disabled: submitted,
  tooltip: undefined,
});

const registerButton: ButtonData = reactive({
  text: "register",
  icon: undefined,
  loading: false,
  disabled: submitted,
  tooltip: undefined,
});

const emailInput: InputData = reactive({
  type: "email",
  label: "email",
  placeholder: "mailexample",
  error: computed(() => {return $v.value.email.$error ? $v.value.email.$errors[0].$uid : undefined}),
  disabled: submitted,
  loading: false,
  autocomplete: "email",
  button: undefined,
});

const passwordButton: ButtonData = reactive({
  icon: computed(() =>
    passwordVisible.value ? "visibility" : "visibility_off"
  ),
  text: undefined,
  loading: false,
  disabled: submitted,
  tooltip: computed(() =>
    passwordVisible.value ? "hide_password" : "show_password"
  ),
});

const passwordInput: InputData = reactive({
  type: computed(() => (passwordVisible.value ? "text" : "password")),
  label: "password",
  placeholder: undefined,
  error: computed(() => {return $v.value.password.$error ? $v.value.password.$errors[0].$uid : undefined}),
  disabled: submitted,
  loading: false,
  autocomplete: "current-password",
  button: passwordButton,
});

const { $api } = useNuxtApp();
const session = useSession();
const { AlertService } = useAlerts();



async function handleSubmit(): Promise<void> {
  try {
    $v.value.$validate();
    if ($v.value.$error) {
      AlertService.addAlert({
        title: "warning",
        type: "warning",
        code: "V0001",
        ttl: 5,
      } as Alert);
      return;
    }
    submitted.value = true;
    const credentials: Credentials = {
      email: loginData.email,
      password: loginData.password,
      otp: loginData.otp,
    };
    const response: SessionToken = await $api.auth.login(credentials);
  } catch (errorBody) {
    submitted.value = false;
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  button {
    width: 50%;
  }
}
</style>

