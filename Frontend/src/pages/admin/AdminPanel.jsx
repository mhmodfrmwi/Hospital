import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "@/components/ui/Appointment";
import AdminSide from "./AdminSide";
import {
  fetchAppointments,
  deleteAppointment,
} from "@/rtk/slices/appointmentSlice";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const { appointments, loading, error } = useSelector(
    (state) => state.appointments,
  );
  const { doctors } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (appointmentId) => {
    dispatch(deleteAppointment(appointmentId))
      .unwrap()
      .then(() => {
        toast.success("Appointment canceled successfully");
      })
      .catch((error) => {
        toast.error("Cancellation failed:", error);
      });
  };

  return (
    <div className="flex min-h-screen">
      <AdminSide />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center justify-start space-x-4 rounded-lg bg-white p-4 shadow-lg">
            <img
              src="../../assets/icons/doctorIcon.svg"
              alt="Doctors"
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {doctors.length}
              </h1>
              <p className="text-sm text-gray-500">Doctors</p>
            </div>
          </div>

          <div className="flex items-center justify-start space-x-4 rounded-lg bg-white p-4 shadow-lg">
            <img
              src="../../assets/icons/appointmentsIcon.svg"
              alt="Appointments"
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {appointments.length}
              </h1>
              <p className="text-sm text-gray-500">Appointments</p>
            </div>
          </div>

          <div className="flex items-center justify-start space-x-4 rounded-lg bg-white p-4 shadow-lg">
            <img
              src="../../assets/icons/patientsIcon.svg"
              alt="Patients"
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {appointments.length}
              </h1>
              <p className="text-sm text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center space-x-4">
            <img
              src="assets/icons/list_icon.svg"
              alt="Latest Appointment"
              className="h-8 w-8"
            />
            <h1 className="text-2xl font-semibold text-gray-800">
              Latest Appointments
            </h1>
          </div>

          {loading ? (
            <div className="text-center text-lg text-gray-600">
              Loading appointments...
            </div>
          ) : error ? (
            <div className="text-center text-lg text-red-500">
              Error: {error}
            </div>
          ) : appointments.length === 0 ? (
            <div className="text-center text-lg text-gray-600">
              No appointments available
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.slice(0, 4).map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {appointment.patientName}
                      </h2>
                      <p className="text-gray-500">
                        Appointment with {appointment.doctorName}
                      </p>
                      <p className="text-sm text-gray-400">
                        Date: {appointment.date}
                      </p>
                      <p className="text-sm text-gray-400">
                        Time: {appointment.time}
                      </p>
                      <p className="text-sm text-gray-500">
                        Reason: {appointment.reason}
                      </p>
                      <p
                        className={`mt-1 text-sm ${
                          appointment.status === "Confirmed"
                            ? "text-green-500"
                            : appointment.status === "Pending"
                              ? "text-yellow-500"
                              : "text-red-500"
                        }`}
                      >
                        Status: {appointment.status}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(appointment.id)}
                      className="text-red-500 transition duration-200 hover:text-red-700"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
