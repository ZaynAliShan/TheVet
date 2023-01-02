import "./App.css";
import Doctors from "./components/Doctors";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Appointments from "./components/Appointments";

function App() {
  return (
    <>
      <Navbar />
      <Doctors />
      <Services />
      <Appointments />
    </>
  );
}

export default App;
