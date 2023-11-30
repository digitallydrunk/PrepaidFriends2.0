import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import dotenv from "dotenv";
import { useState, useEffect } from "react";
import { AuthContext } from "./context/auth-context";
import { useCookies } from "react-cookie";

dotenv?.config();

function App() {
  const [user, setUser] = useState(null);
  const [cookies] = useCookies(["pfAuthToken"]);

  useEffect(() => {
    if (cookies?.pfAuthToken) {
      setUser(JSON?.parse(localStorage?.getItem("user")));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
