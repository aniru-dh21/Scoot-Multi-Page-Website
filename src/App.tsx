import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
