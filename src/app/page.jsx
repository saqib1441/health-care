import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Reserved from "@/components/Reserved";
import Services from "@/components/Services";
import Subcription from "@/components/Subcription";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Partners />
      <Services />
      <Reserved />
      <Facilities />
      <Subcription />
      <Footer />
    </section>
  );
};

export default HomePage;
