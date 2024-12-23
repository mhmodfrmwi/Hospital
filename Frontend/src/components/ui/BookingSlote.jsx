import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DoctorDetails = ({ doctor }) => {
  const userId = useParams();
  const [selectedDay, setSelectedDay] = useState("Choose Day");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 md:px-16">
      <div className="rounded-lg bg-white p-6 shadow-lg md:flex md:gap-8">
        <div className="md:w-1/3">
          <img
            src={doctor?.image}
            alt="Doctor"
            className="h-auto w-full rounded-md object-cover"
          />
        </div>
        <div className="space-y-4 md:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800">{doctor?.name}</h1>
          <h3 className="text-lg text-gray-600">
            {doctor?.apartment} - {doctor?.experience} years experience
          </h3>
          <h2 className="mt-4 text-xl font-semibold text-gray-700">About 💭</h2>
          <p className="leading-relaxed text-gray-600">{doctor?.bio}</p>
          <h2 className="text-lg font-semibold text-gray-700">
            Appointment Fee:
            <span className="font-bold text-green-500">${doctor?.fee}</span>
          </h2>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Booking Slots
        </h2>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
              {selectedDay}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-md bg-white py-2 shadow-lg">
              <DropdownMenuSeparator className="border-t border-gray-200" />
              <DropdownMenuItem
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelectDay("Monday")}
              >
                Monday
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelectDay("Tuesday")}
              >
                Tuesday
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelectDay("Wednesday")}
              >
                Wednesday
              </DropdownMenuItem>
              <DropdownMenuItem
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelectDay("Thursday")}
              >
                Thursday
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="hoursInput rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4 text-gray-700">
          <p>Selected Day: {selectedDay}</p>
          <p>Selected Time: {selectedTime || "Not selected"}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
