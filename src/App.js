import "./App.css";
import Doctors from "./components/Doctors";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Appointments from "./components/Appointments";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Doctors />
      <Services />
      <Appointments />
      <Signup />
    </>
  );
}

export default App;
