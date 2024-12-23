import Appartment from "./Appartment";

const Speciality = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-lg bg-gray-50 p-8">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Find by Speciality
        </h2>
        <p className="text-gray-600">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <Appartment
          image={"assets/General_physician.svg"}
          title={"General physician"}
        />
        <Appartment
          image={"assets/Gastroenterologist.svg"}
          title={"Gynecologist"}
        />
        <Appartment
          image={"assets/Gynecologist.svg"}
          title={"Gastroenterologist"}
        />
        <Appartment image={"assets/Neurologist.svg"} title={"Neurologist"} />
        <Appartment
          image={"assets/Pediatricians.svg"}
          title={"Pediatricians"}
        />
      </div>
    </div>
  );
};
export default Speciality;
