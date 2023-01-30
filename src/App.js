import "./App.css";
import Doctors from "./components/Doctors";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Services from "./components/Services";
// import Appointments from "./components/Appointments";
// // import Signup from "./components/Signup";
// import Blog from "./components/Blog";
// import FAQ from "./components/FAQs";
// import Footer from "./components/Footer";
// import SignInSide from "./components/SignInSide";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/scroll-to-top";
import { StyledChart } from "./components/chart";
import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* 
        <Navbar />
        <Routes>
          <Route exact path="/doctors" element={Doctors} />
        </Routes> */}
      {/* <Services />
          <Appointments />
          <SignInSide/>
          <Blog/>
          <FAQ/>
          <Footer/> */}

      <ThemeProvider>
        <ScrollToTop />
        <StyledChart />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
