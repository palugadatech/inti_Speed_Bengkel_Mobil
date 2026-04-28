import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonial />
        <BookingForm />
      </main>
      <Footer />
      <CTA />
    </div>
  );
}

export default App;
