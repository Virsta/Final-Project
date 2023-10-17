import React, { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import ErrorPage from "./pages/NotFound";
import WallPapers from "./pages/WallPapers";


export const ThemeContext = createContext('light');

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/WallPapers",
    element: <WallPapers />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router}/>
    </ThemeContext.Provider>)
  
}
 
export default App;