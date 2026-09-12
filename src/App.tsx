import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies />
      <ToastContainer />
    </div>
  );
}

export default App; 