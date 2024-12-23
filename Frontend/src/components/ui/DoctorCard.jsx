const DoctorCard = ({ image, isAvailable, name, apartment, experience }) => {
  return (
    <div className="max-w-sm transform overflow-hidden rounded-lg bg-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
      <div className="mx-auto h-48 w-48">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-t-lg object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      <div className="px-4 py-2">
        <p
          className={`text-sm font-semibold ${
            isAvailable ? "text-green-400" : "text-red-400"
          }`}
        >
          {isAvailable ? "Available Now" : "Unavailable"}
        </p>
      </div>

      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <p className="text-md mt-2 text-gray-600">{apartment}</p>
        <div className="mt-1 flex items-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 1a6 6 0 110 12 6 6 0 010-12z"
              clipRule="evenodd"
            />
          </svg>
          <span>{experience} years</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
