import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CollapsibleFooter from "./CollapsibleFooter";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isStartUrl = location.pathname === "/";
  const shouldShowGlobalUI = import.meta.env.XR_ENV !== "avp" || isStartUrl;
  const isAvpEnv = import.meta.env.XR_ENV === "avp";

  return (
    <div className="flex flex-col min-h-screen w-full">
      {shouldShowGlobalUI && <Navbar />}
      <main className="flex-grow w-full bg-gray-50 main-window">
        <div className="w-full px-4">{children}</div>
      </main>
      {shouldShowGlobalUI ? (
        isAvpEnv ? (
          <CollapsibleFooter />
        ) : (
          <Footer />
        )
      ) : null}
    </div>
  );
};

export default Layout;
