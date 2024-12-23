import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoctor, fetchDoctors } from "@/rtk/slices/doctorsSlice";
import { useNavigate } from "react-router-dom";
import AdminSide from "./AdminSide";
import { toast } from "react-toastify";

const AllDoctorsList = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      <AdminSide />
      <div className="w-full bg-gray-100 p-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-3xl font-semibold text-gray-800">
            All Doctors
          </h1>

          {loading ? (
            <div className="text-center text-lg text-gray-600">Loading...</div>
          ) : error ? (
            <div className="text-center text-lg text-red-500">
              Error: {error}
            </div>
          ) : doctors.length === 0 ? (
            <div className="text-center text-lg text-gray-600">
              No doctors available
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
              <table className="min-w-full table-auto bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                      Specialization
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <tr
                      key={doctor.id}
                      className="border-b transition duration-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {doctor.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {doctor.specialization}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {doctor.phone}
                      </td>
                      <td className="flex space-x-2 px-6 py-4 text-sm">
                        <button
                          onClick={() => navigate(`/${doctor.id}`)}
                          className="text-blue-600 transition duration-200 hover:text-blue-800 hover:underline"
                        >
                          Open
                        </button>
                        <button
                          onClick={() =>
                            console.log(`Editing doctor ID: ${doctor.id}`)
                          }
                          className="text-yellow-600 transition duration-200 hover:text-yellow-800 hover:underline"
                        >
                          Update
                        </button>
                        <button
                          onClick={() =>
                            dispatch(deleteDoctor(doctor.id))
                              .unwrap()
                              .then(() => {
                                toast.success("Doctor deleted successfully");
                              })
                              .catch((error) => {
                                toast.error("Deleting failed:", error);
                              })
                          }
                          className="text-red-600 transition duration-200 hover:text-red-800 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDoctorsList;
