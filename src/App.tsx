import React from "react";
import { Outlet } from "react-router-dom";
import { LeftNavbar } from "./shared/LeftNavbar";
import { Footer } from "./shared/Footer";
import { Navbar } from "./shared/Navbar";
import { RightNavbar } from "./shared/RightNavbar";
import { Container } from "./components/Container";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[84px]">
        <Container className="flex gap-6 flex-col lg:flex-row">
          <LeftNavbar />
          <Outlet />
          <RightNavbar />
        </Container>
        <Footer />
      </div>
    </>
  );
};
