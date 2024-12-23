const DoctorCard = ({ image, isAvailable, name, apartment }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <p
          className={`text-sm font-medium ${
            isAvailable ? "text-green-500" : "text-red-500"
          }`}
        >
          {isAvailable ? "Available Now" : "Unavailable"}
        </p>
        <h1 className="mt-2 text-xl font-bold text-gray-800">{name}</h1>
        <h3 className="text-md mt-1 text-gray-600">{apartment}</h3>
      </div>
    </div>
  );
};

export default DoctorCard;
