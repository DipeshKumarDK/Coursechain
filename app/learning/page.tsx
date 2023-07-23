import Navbar from "@/components/Navbar";
import LearnTop from "./LearnTop";
import LearnMid from "./LearnMid";
import Footer from "@/components/Footer";
import Teach from "./Teach";

export default function Learn() {
  return (
    <div>
        <Navbar/>
        <LearnTop/>
        <LearnMid/>
        <Teach/>
        <Footer/>
    </div>
  );
}
