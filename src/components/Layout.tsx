import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main
        enable-xr
        className={
          "flex-grow w-full " +
          (process.env.XR_ENV !== "avp" ? "bg-gray-50" : "main-window")
        }>
        <div className="w-full px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
