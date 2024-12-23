import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAppointment } from "@/rtk/slices/appointmentSlice";

const CreateAppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    patientName: "",
    date: "",
    time: "",
    reason: "",
    status: "Pending",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.doctorName ||
      !formData.patientName ||
      !formData.date ||
      !formData.time ||
      !formData.reason
    ) {
      setError("Please fill out all fields.");
      return;
    }

    // Dispatch the createAppointment action to Redux
    dispatch(createAppointment(formData))
      .unwrap()
      .then(() => {
        setError(""); // Clear any errors
        alert("Appointment created successfully!");
        setFormData({
          doctorName: "",
          patientName: "",
          date: "",
          time: "",
          reason: "",
          status: "Pending", // Reset to default status
        });
      })
      .catch((err) => {
        setError(err.message); // Set error if appointment creation fails
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Create Appointment
        </h2>
        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-600">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="doctorName"
              className="block text-sm font-medium text-gray-700"
            >
              Doctor Name
            </label>
            <input
              type="text"
              name="doctorName"
              id="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter doctor's name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="patientName"
              className="block text-sm font-medium text-gray-700"
            >
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              id="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter patient's name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Appointment Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Appointment Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700"
            >
              Reason for Appointment
            </label>
            <input
              type="text"
              name="reason"
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter reason for appointment"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Appointment Status
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointmentForm;
