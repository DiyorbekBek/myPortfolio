import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="grow max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
