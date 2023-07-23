import Navbar from "@/components/Navbar";
import HomeMid from "./HomeMid";
import Start from "./Start";
import Recommended from "./Recommended";
import Quote from "./Quote";
import Viewing from "./Viewing";
import Explore from "./Explore";
import CategoryQuote from "./CategoryQuote";
import Top from "./Top";
import New from "./New";
import Contact from "./Contact";
import Footer from "@/components/Footer";
import TrendingQuote from "./TrendingQuote";

export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <HomeMid/>
      <Start/>
      <Quote/>
      <Recommended/>
      <Viewing/>
      <CategoryQuote/>
      <Explore/>
      <TrendingQuote/>
      <Top/>
      <New/>
      <Contact/>
      <Footer/>
    </main>
  );
}
