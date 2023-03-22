import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/authentication/LoginPage";
import { Info } from "./components/info/Info";
import { Navbar } from "./components/navigation/Navbar";
import { GuestContainer } from "./guest/GuestContainer";
import { useCurrentUser } from "./hooks/context/UserProvider";
import { ErrorPage } from "./components/error/ErrorPage";
import { GuestTableContainer } from "./components/table/GuestTableContainer";

function App() {
  const user = useCurrentUser();
  const router = createBrowserRouter(
    user
      ? [
          {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "/guest",
                element: <GuestContainer />,
              },
              {
                path: "/info",
                element: <Info />,
              },
              {
                path: "/admin",
                element: <GuestTableContainer />,
              },
              {
                path: "/auth",
                element: <LoginPage />,
              },
            ],
          },
        ]
      : [
          {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "/auth",
                element: <LoginPage />,
              },
            ],
          },
        ]
  );

  return <RouterProvider router={router} />;
}

export default App;
