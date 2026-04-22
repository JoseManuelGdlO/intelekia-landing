import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Clients from "@/components/site/Clients";
import Cases from "@/components/site/Cases";
import About from "@/components/site/About";
import Process from "@/components/site/Process";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Cases />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
