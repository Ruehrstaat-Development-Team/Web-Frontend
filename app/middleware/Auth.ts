export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Middleware: Auth");
    console.log("From: ", from);
    console.log("To: ", to);
});

