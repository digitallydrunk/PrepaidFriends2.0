import { Outlet } from "react-router-dom";
import Footer from "../footer1";
import Navbar from "../navbar1";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative mt-20">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
