import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";
import { useCurrentUser } from "./hooks/context/UserProvider";
import { ErrorPage } from "./components/error/ErrorPage";
import { AdminRoute, AuthRoute, GuestRoute, InfoRoute } from "./routes";

function App() {
  const user = useCurrentUser();
  const router = createBrowserRouter(
    user
      ? [
          {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrorPage />,
            children: [GuestRoute, InfoRoute, AuthRoute, AdminRoute],
          },
        ]
      : [
          {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrorPage />,
            children: [AuthRoute],
          },
        ]
  );

  return <RouterProvider router={router} />;
}

export default App;
