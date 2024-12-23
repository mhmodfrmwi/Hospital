import cancelButton from "../../../assets/icons/cancel_icon.svg";
const Appointment = ({ appointment }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4">
      <div className="flex items-center space-x-4">
        <img
          src={appointment?.image}
          alt=""
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {appointment?.drName}
          </h1>
          <p className="text-sm text-gray-600">
            Booking on {appointment?.date}
          </p>
        </div>
      </div>

      <img
        src={cancelButton}
        alt="Cancel Appointment"
        className="h-6 w-6 cursor-pointer transition hover:text-red-600"
      />
    </div>
  );
};
export default Appointment;
