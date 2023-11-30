import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import dotenv from "dotenv";
import { createContext, useState } from "react";

dotenv?.config();

const AppContext = createContext();
export default function App() {
  const [reload, setReload] = useState(false);
  const appValue = { reload, setReload };
  return (
    <AppContext.Provider value={appValue}>
      <RouterProvider router={router} />;
    </AppContext.Provider>
  );
}

export { AppContext };
