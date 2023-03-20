import "./App.css";
import { Guests } from "./guest/guests";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/authentication/LoginPage";
import { Info } from "./components/info/Info";
import { Navbar } from "./components/navigation/Navbar";
import { PageLayout } from "./components/pageLayout/PageLayout";
import { GuestTable } from "./components/table/GuestTable";
import { GuestContainer } from "./guest/GuestContainer";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { ErrorPage } from "./components/error/ErrorPage";

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
                element: <GuestTable guests={Guests} />,
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
