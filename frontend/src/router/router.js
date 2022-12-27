import { createRouter, createWebHashHistory } from "vue-router";

import ViewNotes from "../views/ViewNotes.vue";
import ViewEditNote from "../views/ViewEditNote.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/editNote/:id",
    name: "edit-notes",
    component: ViewEditNote,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
