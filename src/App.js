import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import dotenv from "dotenv";

dotenv?.config();

export default function App() {
  return <RouterProvider router={router} />;
}
