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
      <main enable-xr className="flex-grow bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
