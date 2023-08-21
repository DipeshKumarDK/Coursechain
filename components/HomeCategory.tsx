import pic from "../assets/profile.jpg";
import Image from "next/image";
import orange from "../assets/orange.jpg";
import purple from "../assets/purple.jpg";
import blue from "../assets/blue.jpg";
import pink from "../assets/pink.jpg";
import sky_blue from "../assets/sky_blue.webp";
import yellow from "../assets/yellow.jpg";
import green from "../assets/green.webp";
import red from "../assets/red.jpg";
import shiny from "../assets/shiny.jpg";
import black from "../assets/black.jpg";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrCategory } from "../app/GlobalRedux/Features/currCategory/currCategorySlice";
import { useRouter } from "next/navigation";

type IPROPS = {
  title: string;
  number: number;
  image: number;
};

export default function HomeCategory({ title, number, image }: IPROPS) {
  const dispatch = useDispatch();
  const router = useRouter();

  const navigate = (cat: string) => {
    dispatch(changeCurrCategory(cat));
    router.push("/category");
  };

  return (
    <div
      onClick={() => {
        navigate(title);
      }}
      className="flex bg-[#082b39] cursor-pointer text-white border-[1px] border-slate-500 rounded"
    >
      <Image
        src={
          image === 1
            ? orange
            : image === 2
            ? purple
            : image === 3
            ? blue
            : image === 4
            ? pink
            : image === 5
            ? sky_blue
            : image === 6
            ? yellow
            : image === 7
            ? green
            : image === 8
            ? red
            : image === 9
            ? shiny
            : black
        }
        className="w-1/3 h-24 rounded"
        alt="Pic"
      />
      <div className="flex flex-col justify-center h-full pl-3 pr-3">
        <h3 className="font-semibold">{title}</h3>
        <h4 className="text-slate-200 mt-1 text-sm">{number} courses</h4>
      </div>
    </div>
  );
}
