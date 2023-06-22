import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import App from "../App";
import AddUser from "../components/AddUser";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/add" element={<AddUser />} />
      <Route path="*" loader={() => redirect("/")} />
    </>
  )
);
