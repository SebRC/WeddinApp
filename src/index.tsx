import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GuestTable } from "./components/table/GuestTable";
import { Guests } from "./guest/guests";
import { Title } from "./components/text/Title";
import { Navbar } from "./components/navigation/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/guest", element: <App /> },
      {
        path: "/admin",
        element: (
          <div>
            <Title title="Admin Center" />
            <GuestTable guests={Guests} />
          </div>
        ),
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <meta name="viewport" content="width=device-width, inital-scale=1"></meta>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
