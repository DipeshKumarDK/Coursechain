import loader from "../assets/loader.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.96)] flex items-center justify-center flex-col">
      <Image
        src={loader}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        You are being navigated to requested page. <br /> Please wait...
      </p>
    </div>
  );
}
