/** @format */

import Header from "../components/Layouts/Header";
import Hero from "../components/Layouts/Hero";
import Services from "../components/Layouts/Services";
import Resume from "../components/Layouts/Resume";
import Contacts from "../components/Layouts/Contacts";
import Footer from "../components/Layouts/Footer";
function Home() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contacts />
      </section>
      <Footer />
    </>
  );
}

export default Home;
