import { ReactNode } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
        <Hero/>
      <div className="relative mx-auto w-full z-50">
        <Header />

        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
