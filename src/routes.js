// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Adocao from "layouts/adocao";
import Voluntarios from "layouts/tables";
import Billing from "layouts/billing";
import Cadastros from "layouts/registers";
import Notificacoes from "layouts/notifications";
import Profile from "layouts/profile";
import BuscaAnimal from "layouts/busca-animal";

import UserProfile from "layouts/user-profile";
import UserManagement from "layouts/user-management";

import Login from "auth/login";
import Register from "auth/register";
import ForgotPassword from "auth/forgot-password";
import ResetPassword from "auth/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Adoção",
    key: "adocao",
    icon: <Icon fontSize="small">pets</Icon>,
    route: "/adocao",
    component: <Adocao />,
  },
  {
    type: "collapse",
    name: "Cadastros",
    key: "cadastros",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/cadastros",
    component: <Cadastros />,
  },
  {
    type: "collapse",
    name: "Voluntários",
    key: "tables",
    icon: <Icon fontSize="small">diversity_3</Icon>,
    route: "/voluntarios",
    component: <Voluntarios />,
  },
  {
    type: "collapse",
    name: "Relatórios",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notificações",
    key: "notificacoes",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notificacoes",
    component: <Notificacoes />,
  },
  {
    type: "examples",
    name: "busca",
    key: "busca-animal",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/busca-animal",
    component: <BuscaAnimal />,
  },
  {
    type: "collapse",
    name: "Sair",
    key: "login",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/auth/login",
    component: <Login />,
  },
  {
    type: "examples",
    name: "Perfil",
    key: "user-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile",
    component: <UserProfile />,
  },
  {
    type: "auth",
    name: "User Management",
    key: "user-management",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/user-management",
    component: <UserManagement />,
  },
  {
    type: "auth",
    name: "Login",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/auth/login",
    component: <Login />,
  },
  {
    type: "auth",
    name: "Register",
    key: "register",
    icon: <Icon fontSize="small">register</Icon>,
    route: "/auth/register",
    component: <Register />,
  },
  {
    type: "auth",
    name: "Forgot Password",
    key: "forgot-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/auth/forgot-password",
    component: <ForgotPassword />,
  },
  {
    type: "auth",
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/auth/reset-password",
    component: <ResetPassword />,
  },
];

export default routes;
