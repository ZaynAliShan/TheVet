import "./App.css";
import Doctors from "./components/Doctors";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Appointments from "./components/Appointments";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import FAQ from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Doctors />
      <Services />
      <Appointments />
      <Signup />
      <Blog />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
