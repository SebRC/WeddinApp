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

function App() {
  const user = useCurrentUser();
  const router = createBrowserRouter(
    user
      ? [
          {
            path: "/",
            element: <Navbar />,
            children: [
              {
                path: "/guest",
                element: (
                  <PageLayout>
                    <GuestContainer />
                  </PageLayout>
                ),
              },
              {
                path: "/info",
                element: (
                  <PageLayout>
                    <Info />
                  </PageLayout>
                ),
              },
              {
                path: "/admin",
                element: (
                  <PageLayout>
                    <GuestTable guests={Guests} />
                  </PageLayout>
                ),
              },
              {
                path: "/auth",
                element: (
                  <PageLayout>
                    <LoginPage />
                  </PageLayout>
                ),
              },
            ],
          },
        ]
      : [
          {
            path: "/",
            element: <Navbar />,
            children: [
              {
                path: "/auth",
                element: (
                  <PageLayout>
                    <LoginPage />
                  </PageLayout>
                ),
              },
            ],
          },
        ]
  );

  return <RouterProvider router={router} />;
}

export default App;
