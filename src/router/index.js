import VueRouter from "vue-router";
import { SignInView, SignUpView } from "../views";

const routes = [
  { path: "/", name: "SignIn", component: SignInView },
  { path: "/signup", name: "SignUp", component: SignUpView },
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;