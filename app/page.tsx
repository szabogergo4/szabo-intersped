import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import QuoteForm from "@/components/QuoteForm";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <WhyUs />
      <QuoteForm />
      <About />
      <Footer />
      <FloatingContact />
    </main>
  );
}
