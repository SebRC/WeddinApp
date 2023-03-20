import "./App.css";
import { GuestInfo } from "./guest/GuestInfo";
import { Guests, DEFAULT_GUEST_STATE } from "./guest/guests";
import { getGuestData } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/authentication/LoginPage";
import { Info } from "./components/info/Info";
import { Navbar } from "./components/navigation/Navbar";
import { PageLayout } from "./components/pageLayout/PageLayout";
import { GuestTable } from "./components/table/GuestTable";

function App() {
  const [guest, setGuest] = useState(DEFAULT_GUEST_STATE);
  const [loading, setLoading] = useState(true);
  const user = useCurrentUser();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/guest",
          element: (
            <PageLayout>
              <GuestInfo guest={guest} loading={loading} />
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
        {
          path: "/logout",
          element: (
            <PageLayout>
              <LoginPage />
            </PageLayout>
          ),
        },
      ],
    },
  ]);

  const debugLocal = false;
  useEffect(() => {
    (async () => {
      setLoading(true);
      let response = DEFAULT_GUEST_STATE;
      if (debugLocal) {
        response = Guests[0];
      } else {
        response = await getGuestData(user?.uid ?? "none");
      }

      setGuest(response);
      setLoading(false);
    })();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
