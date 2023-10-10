import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Navbar from "@/components/layout/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
