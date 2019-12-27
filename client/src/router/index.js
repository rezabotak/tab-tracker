import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Songs from "@/components/Songs.vue";
import CreateSong from "@/components/CreateSong.vue";
import ViewSong from "@/components/ViewSong/Index.vue";
import EditSong from "@/components/EditSong.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/songs",
    name: "songs",
    component: Songs
  },
  {
    path: "/songs/create",
    name: "songs-create",
    component: CreateSong
  },
  {
    path: "/songs/:songId",
    name: "song",
    component: ViewSong
  },
  {
    path: "/songs/:songId/edit",
    name: "songs-edit",
    component: EditSong
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
