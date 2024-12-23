import { Link } from "react-router-dom";
import { Button } from "./button";
const BookAppointment = ({ headerText, innerText, image }) => {
  return (
    <div className="flex flex-col-reverse items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white lg:flex-row lg:items-start lg:p-10">
      <div className="my-auto lg:w-1/2">
        <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">
          {headerText}
        </h1>
        {innerText && (
          <div className="flex items-start gap-4">
            <img src={image} alt="Doctor Icon" />
            <p className="text-sm leading-relaxed lg:text-base">
              Simply browse through our extensive list of trusted doctors and
              schedule your appointment hassle-free.
            </p>
          </div>
        )}
        <Button className="mt-6 bg-white px-6 py-2 text-blue-700 hover:bg-blue-100">
          <Link to={"/appointmentForm"}>Book Appointment</Link>
        </Button>
      </div>
      <div className="mb-6 lg:mb-0 lg:w-1/2">
        <img
          src="assets/doc-header-img.png"
          alt="Doctor Consultation"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default BookAppointment;
