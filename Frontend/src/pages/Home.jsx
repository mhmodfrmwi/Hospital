import BookAppointment from "@/components/ui/BookAppointment";
import DoctorsToBook from "@/components/ui/DoctorsToBook";
import Speciality from "@/components/ui/Speciality";

const Home = () => {
  return (
    <div className="mx-auto my-10 w-5/6">
      <BookAppointment
        headerText={"Book Appointment With Trusted Doctors"}
        innerText={
          "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        }
        image={"assets/group_profiles.svg"}
      />
      <Speciality />
      <DoctorsToBook />
      <BookAppointment
        headerText={"Book Appointment With 100+ Trusted Doctors"}
      />
    </div>
  );
};
export default Home;
