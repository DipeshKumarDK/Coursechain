import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllMid from "./AllMid";
import Instructors from "./Instructors";
import AllCourses from "./AllCourses";

export default function All() {
  return (
    <main>
      <Navbar/>
      <AllMid/>
      <Instructors/>
      <AllCourses/>
      <Footer/>
    </main>
  );
}