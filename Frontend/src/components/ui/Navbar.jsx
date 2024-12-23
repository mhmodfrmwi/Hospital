import * as React from "react";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";

export default function Navbar() {
  const [state, setState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const menus = [
    { title: "Home", path: "/" },
    { title: "All Doctors", path: "/allDoctors" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setState(true);
      } else {
        setState(false);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className={`w-full border-b bg-white p-2 shadow min-[820px]:border-0`}>
      <div className="mx-auto max-w-screen-xl items-center px-4 min-[820px]:flex min-[820px]:px-8">
        <div className="flex items-center justify-between py-3 min-[820px]:block min-[820px]:py-5">
          <Link to="/">
            <h1 className="text-3xl font-bold text-blue-700">Prescripto</h1>
          </Link>
          <div className="min-[820px]:hidden">
            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 min-[820px]:block min-[820px]:pb-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 min-[820px]:flex min-[820px]:space-x-6 min-[820px]:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden min-[820px]:block">
          {isLoggedIn ? (
            <Button
              className="bg-red-600 px-6 py-2 text-white hover:bg-red-500"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button className="bg-blue-700 px-6 py-2 text-white hover:bg-blue-500">
              <Link to="/register">Create Account</Link>
            </Button>
          )}
        </div>
        {state && (
          <Button
            className="mt-6 bg-blue-700 px-6 py-2 text-white hover:bg-blue-500 min-[820px]:hidden"
            onClick={isLoggedIn ? handleLogout : null}
          >
            {isLoggedIn ? "Logout" : "Create Account"}
          </Button>
        )}
      </div>
    </nav>
  );
}
