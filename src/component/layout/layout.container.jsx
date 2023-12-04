import { Outlet } from "react-router-dom";
import Footer from "../footer1";
import Navbar from "../navbar1";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative mt-20">
        <div class="mx-auto max-w-7xl pb-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
