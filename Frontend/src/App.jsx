import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import AllDoctorsList from "./pages/admin/AllDoctorsList";

function App() {
  const user = useSelector((state) => state.users.user);
  const ProtectedAdminRoute = ({ children }) => {
    if (!user || !user["user"].isAdmin) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allDoctors" element={<AllDoctors />} />
        <Route path="/:doctorId" element={<DoctorDetails />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminPanel />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/allDoctors"
          element={
            <ProtectedAdminRoute>
              <AllDoctorsList />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/addDoctor"
          element={
            <ProtectedAdminRoute>
              <AddDoctor />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/allAppointments"
          element={
            <ProtectedAdminRoute>
              <AllAppointment />
            </ProtectedAdminRoute>
          }
        />

        <Route path="/appointmentForm" element={<CreateAppointmentForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
