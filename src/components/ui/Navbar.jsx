import { Heart, Menu, ShoppingCart } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
const Navbar = () => {
  const [state, setState] = React.useState(true);

  const menus = [
    { title: "Home", path: "/" },
    { title: "All Doctors", path: "/allDoctors" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setState(true);
      } else {
        setState(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className={`w-full border-b bg-white p-2 shadow min-[820px]:border-0`}>
      <div className="mx-auto max-w-screen-xl items-center px-4 min-[820px]:flex min-[820px]:px-8">
        <div className="flex items-center justify-between py-3 min-[820px]:block min-[820px]:py-5">
          <Link href="/">
            <h1 className="text-3xl font-bold text-gray-950">Prescripto</h1>
          </Link>
          <div className="min-[820px]:hidden">
            <button className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400">
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
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {state && <Button>Create account</Button>}
      </div>
    </nav>
  );
};
export default Navbar;
