import Form from "./components/Form";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ShowData from "./components/ShowData";
import React, { useState } from "react";

export const UserContext = React.createContext([]);

function App() {

  const [userData, setUserData] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />

    },
    {
      path: "/showdata",
      element: <ShowData />,
    },
  ]);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <div>
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
