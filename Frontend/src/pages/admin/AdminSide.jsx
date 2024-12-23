import { Link, useLocation } from "react-router-dom";
import dashBoardIcon from "../../../assets/icons/dashboard-icon.svg";
import AppointmentsIcon from "../../../assets/icons/appointment-icon.svg";
import addDoctorIcon from "../../../assets/icons/add-doctor-icon.svg";
import allDoctorsIcon from "../../../assets/icons/doctor-icon.svg";
const AdminSide = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: dashBoardIcon,
      label: "Dashboard",
      link: "/admin",
    },
    {
      icon: AppointmentsIcon,
      label: "Appointments",
      link: "/admin/allAppointments",
    },
    {
      icon: addDoctorIcon,
      label: "Add Doctor",
      link: "/admin/addDoctor",
    },
    {
      icon: allDoctorsIcon,
      label: "Doctors List",
      link: "/admin/allDoctors",
    },
  ];

  return (
    <div className="min-h-screen w-64 bg-white text-gray-800">
      <div className="mt-6 space-y-4">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.link;
          return (
            <Link key={idx} to={item.link}>
              <div
                className={`flex items-center gap-4 px-6 py-3 transition ${
                  isActive ? "bg-gray-200" : "hover:bg-gray-200"
                }`}
              >
                <img src={item.icon} alt={item.label} className="h-6 w-6" />
                <h1
                  className={`text-lg font-medium ${isActive ? "text-blue-600" : "text-gray-800"}`}
                >
                  {item.label}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSide;
