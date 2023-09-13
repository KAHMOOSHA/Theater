import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import CustomGallery from "./pages/CustomGallery/CustomGallery";
import Calender from "./pages/Calender/Calender";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/gallery", element: <CustomGallery /> },
  { path: "/calender", element: <Calender /> },

]);

function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter}></RouterProvider>
    </>
  );
}

export default App;
