import Navbar from "@/components/Navbar";
import CourseMid from "./CourseMid"
import CourseLearn from "./CourseLearn";
import CourseInfo from "./CourseInfo";
import AlsoBuy from "./AlsoBuy";
import InstructorInfo from "./InstructorInfo";
import Comments from "./Comments";
import MoreCourses from "./MoreCourses";
import Footer from "@/components/Footer";

export default function CoursePage() {
  return (
    <div className="">
      <div className="">
       <Navbar/>
       <CourseMid/>
       <CourseLearn/>
       <CourseInfo/>
       <AlsoBuy/>
       <InstructorInfo/>
       <Comments/>
       <MoreCourses/>
       <Footer/>
       </div>
    </div>
  );
}