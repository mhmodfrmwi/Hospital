import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "@/rtk/slices/appointmentSlice";

const AllAppointment = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);
  const [appointmentsList, setAppointmentsList] = useState([]);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  useEffect(() => {
    setAppointmentsList(appointments);
  }, [appointments]);

  const handleCancelAppointment = (id) => {
    setAppointmentsList((prevList) =>
      prevList.filter((appointment) => appointment.id !== id),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-semibold text-gray-800">
          All Appointments
        </h1>

        <div className="space-y-6">
          {appointmentsList.length === 0 ? (
            <div className="text-lg text-gray-600">
              No appointments available
            </div>
          ) : (
            appointmentsList.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={appointment.image}
                    alt={appointment.patientName}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {appointment.patientName}
                    </h2>
                    <p className="text-gray-500">
                      Appointment with {appointment.drName}
                    </p>
                    <p className="text-sm text-gray-400">
                      Date: {appointment.date}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleCancelAppointment(appointment.id)}
                    className="text-red-500 transition duration-200 hover:text-red-700"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAppointment;
