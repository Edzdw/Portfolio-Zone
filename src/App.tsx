import ZaloContactProvider from "./components/contact/ZaloContact";
import BookingProvider from "./components/booking/BookingProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
export default function App() {
  return (
    <ZaloContactProvider>
      <BookingProvider>
        <a className="skip-link" href="#main">
          Đến nội dung chính
        </a>
        <Header />
        <main id="main">
          <Hero />
          <Services />
          <Portfolio />
          <About />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </BookingProvider>
    </ZaloContactProvider>
  );
}
