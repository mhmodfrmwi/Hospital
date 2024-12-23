import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/rtk/slices/usersSlice";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const menus = [
    { title: "Home", path: "/" },
    { title: "All Doctors", path: "/allDoctors" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(clearUser());
    navigate("/");
  };

  useEffect(() => {
    const updateMenuState = () => setMenuOpen(window.innerWidth >= 1024);
    updateMenuState();
    window.addEventListener("resize", updateMenuState);
    return () => window.removeEventListener("resize", updateMenuState);
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-blue-700"
        >
          Prescripto
        </Link>

        <button
          className="p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 lg:hidden"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white text-center transition-transform duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:space-x-8 lg:bg-transparent lg:text-left ${
            menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <ul className="flex flex-col space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
            {menus.map((menu, idx) => (
              <li key={idx}>
                <Link
                  to={menu.path}
                  className="text-lg font-medium text-gray-700 transition hover:text-blue-600"
                  onClick={() => setMenuOpen(false)} // Close menu on mobile
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:ml-8 lg:mt-0">
            {user ? (
              <Button
                className="bg-red-600 px-6 py-2 text-white hover:bg-red-500 focus:ring focus:ring-red-300"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link to="/register">
                <Button className="bg-blue-700 px-6 py-2 text-white hover:bg-blue-500 focus:ring focus:ring-blue-300">
                  Create Account
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
