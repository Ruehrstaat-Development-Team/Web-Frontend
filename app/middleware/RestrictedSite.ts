import { toast } from "vue-sonner";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const { $ts } = useNuxtApp();
  if (!userStore.user?.isAdmin) {
    toast.info($ts("toasts.info.restricted-site"));
    return navigateTo({ name: "index" });
  }
});
