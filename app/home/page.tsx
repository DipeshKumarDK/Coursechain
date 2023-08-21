'use client'

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
import { useEffect , useState } from "react";
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeProfile } from '../GlobalRedux/Features/profile/profileSlice';

export default function HomePage() {

  const user = useSelector((state: RootState) => state.user.value);
  console.log(user)

  const dispatch = useDispatch()

  const [allCourses, setAllCourses] = useState([])

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/course/get", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          body: 'body'
        })
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          setAllCourses(data)
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleGet = async () => {
    try {
      const response = await fetch("/api/profile/get", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body : JSON.stringify({
          email: user?.payload?.email
        })
      });
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          dispatch(changeProfile(data))
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    handleSubmit();
    handleGet()
  }, [user])

  return (
    <main>
      <Navbar />
      <HomeMid />
      <Start />
      <Quote />
      <Recommended courses={allCourses} />
      <Viewing courses={allCourses} />
      <CategoryQuote />
      <Explore />
      <TrendingQuote />
      <Top courses={allCourses}/>
      <New courses={allCourses}/>
      <Contact />
      <Footer />
    </main>
  );
}
