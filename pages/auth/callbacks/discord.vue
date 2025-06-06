<template>
  <div class="w-full flex flex-row items-center justify-between gap-5">
    <h2 class="text-2xl font-bold text-center">Login wird verarbeitet...</h2>
    <DefaultLoader :size="25" />
  </div>
</template>

<script lang="ts" setup>
import { toast } from "vue-sonner";

definePageMeta({
  layout: "centered",
  title: "Login weiterleitung",
});

const route = useRoute();
const router = useRouter();
const sessionStore = useSessionStore();
const userStore = useUserStore();
const { $api } = useNuxtApp();
const user = userRepository($api);

if (route.query.success == "false") {
  toast.error("Login fehlgeschlagen");
  router.replace({ name: "login" });
} else {
  var base64encodedSessionToken = route.query.tokend?.toString();
  if (base64encodedSessionToken == undefined) {
    toast.error("Login fehlgeschlagen");
    router.replace({ name: "login" });
  } else {
    try {
      var sessionTokenJSONString = atob(base64encodedSessionToken);
      var sessionToken = JSON.parse(sessionTokenJSONString) as SessionToken;
      sessionStore.setSession(sessionToken);
      var usr = await user.getMe();
      userStore.setUser(usr);
      toast.success("Login erfolgreich");
      router.replace({ name: "index" });
    } catch (e) {
      toast.error("Login fehlgeschlagen");
      router.replace({ name: "login" });
    }
  }
}
</script>

<style lang="scss" scoped></style>
