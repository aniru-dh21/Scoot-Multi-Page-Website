import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<RootLayout />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
