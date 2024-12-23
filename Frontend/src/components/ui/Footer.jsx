import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-10 text-gray-800 shadow-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        <div>
          <Link to="/">
            <h1 className="mb-4 text-3xl font-bold text-blue-700">
              Prescripto
            </h1>
          </Link>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Company</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-gray-600">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">+1-212-456-7890</li>
            <li className="text-gray-600">greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <p className="text-center text-gray-500">
        Copyright © 2024 GreatStack - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
