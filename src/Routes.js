import MainPage from "./components/MainPage";
import Product from "./components/ProductComps/Product";
import About from "./components/About";
import AddProduct from "@/components/Admin/AddProduct";
import Login from "@/components/Admin/Login";
import NotFound from "./components/404.vue";

export const routes = [
  {
    path: "/",
    component: MainPage,
    name: "Main",
  },
  {
    path: "/Products/:id",
    component: Product,
    name: "Product",
  },
  {
    path: "/About",
    component: About,
    name: "About",
  },
  {
    path: "/PostProduct",
    name: "Admin",
    component: AddProduct,
  },
  {
    path: "/Login",
    component: Login,
    name: "Login",
  },
  {
    path: "*",
    component: NotFound,
    name: "404",
  },
];
