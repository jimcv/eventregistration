import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
// added components
import EventRegistration from "@/components/EventRegistration";
import AppTest from "@/components/AppTest";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello,
    },
    {
      path: "/app",
      name: "EventRegistration",
      component: EventRegistration,
    },
    {
      path: "/apptest",
      name: "youcanputwhatevernamehere",
      component: AppTest,
    },
  ],
});
