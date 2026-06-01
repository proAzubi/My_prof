import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppLayout from "./components/AppLayout";
import ProjectDetail from "./components/ProjectDetail";
import Services from "./components/Services";
import PortfolioTitle from "./ui/PortfolioTitle";
import ContactButton from "./ui/ContactButton";
import { useEffect, useRef } from "react";
import OptimizedMouseFollower from "./ui/MouseMotion";
import ContactSection from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  const contactRef = useRef(null);
  const location = useLocation();
  const showMouseFollower =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <AppLayout>
        {showMouseFollower && <OptimizedMouseFollower />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <PortfolioTitle />
                <Portfolio />
                <ContactSection ref={contactRef} />
              </>
            }
          />
          <Route path="/project/:name" element={<ProjectDetail />} />
        </Routes>
        {location.pathname === "/" && (
          <ContactButton
            onClick={() =>
              contactRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        )}
        <Footer />
      </AppLayout>
    </LanguageProvider>
  );
};

export default App;
