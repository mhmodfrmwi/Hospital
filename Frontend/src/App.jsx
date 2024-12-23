import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllDoctors from "./pages/AllDoctors";
import DoctorDetails from "./pages/DoctorDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPanel from "./pages/admin/AdminPanel";
import AddDoctor from "./pages/admin/AddDoctor";
import AllAppointment from "./pages/admin/AllAppointment";
import CreateAppointmentForm from "./components/ui/AppointmentForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allDoctors" element={<AllDoctors />} />
        <Route path="/:doctorId" element={<DoctorDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/allDoctors" element={<AllDoctors />} />
        <Route path="/admin/addDoctor" element={<AddDoctor />} />
        <Route path="/admin/allAppointments" element={<AllAppointment />} />
        <Route path="/appointmentForm" element={<CreateAppointmentForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
