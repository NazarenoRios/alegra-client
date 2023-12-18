//@ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import SearchImages from "../views/SearchImages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: SearchImages,
    },
    {
      path: "/invoice",
      redirect: "/invoice/add",
      children: [
        {
          path: "add",
          component: () => import("@/views/NewInvoice.vue"),
        },
        {
          path: "created",
          component: () => import("@/views/InvoiceCreated.vue"),
        },
      ],
    },
  ],
});

export default router;
