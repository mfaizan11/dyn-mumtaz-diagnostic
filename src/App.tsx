import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const HowWeWork = lazy(() => import("./pages/HowWeWork"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    if (document.readyState === "complete") {
      setTimeout(() => setIsLoading(false), 800);
    } else {
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 800);
      };
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Mumtaz Diagnostic Centre | Trusted Healthcare Since 2008</title>
        <meta
          name="description"
          content="Mumtaz Diagnostic Centre provides trusted healthcare in Dera Ismail Khan since 2008. Advanced diagnostics, patient-centered care, and 24/7 services."
        />
        <meta
          name="keywords"
          content="diagnostic centre, healthcare, Dera Ismail Khan, MRI, lab tests, medical services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mumtaz Diagnostic Centre | Trusted Healthcare Since 2008"
        />
        <meta
          property="og:description"
          content="Delivering quality healthcare with compassion, precision, and advanced technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mdcdikhan.com" />
        <meta
          property="og:image"
          content="https://mdcdikhan.com/favicon.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mumtaz Diagnostic Centre | Trusted Healthcare Since 2008"
        />
        <meta
          name="twitter:description"
          content="Providing trusted healthcare in Dera Ismail Khan since 2008."
        />
        <meta
          name="twitter:image"
          content="https://mdcdikhan.com/png"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route
                path="/preview_page.html"
                element={<Navigate to="/" replace />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
