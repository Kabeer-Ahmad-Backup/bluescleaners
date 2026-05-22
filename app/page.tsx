import Contact from "./components/Contact";
import CoreValues from "./components/CoreValues";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Military from "./components/Military";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Process from "./components/Process";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";
import Welcome from "./components/Welcome";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Process />
        <Story />
        <WhyChoose />
        <CoreValues />
        <Military />
        <TrustedBy />
        <Faq />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
