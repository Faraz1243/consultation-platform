import "./App.css";
//import css files
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/feather.css";
import "./assets/css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
