import { useState } from "react";
import HFContainer from "./HFContainer";
import img1 from "../../Assets/images/50cb53af6d5ec345b4efb29f81183173.jpg";
import img2 from "../../Assets/images/8780d1a1499acb38bfa2df2a4837beab.jpg";
import img3 from "../../Assets/images/f489884cbb670fb70c6a9958fbf53937.jpg";


const HFeartured = () => {
  const [FDetails, setFDetails] = useState([
    {
      title: "Medical Loans",
      description:
        "There are many variations of pas of Lorem Ipsum availab.There are many variations of pas of Lorem Ipsum availab.",
      href: "",
      imageSrc: img1,
    },
    {
      title: "Medical Insurance",
      description:
        "There are many variations of pas of Lorem Ipsum availab.There are many variations of pas of Lorem Ipsum availab.",
      href: "",
      imageSrc: img2,
    },
    {
      title: "Savings",
      description:
        "There are many variations of pas of Lorem Ipsum availab.There are many variations of pas of Lorem Ipsum availab.",
      href: "/",
      imageSrc: img3,
    },
  ]);

  return (
    <>
    <div className="w-[100%] h-[70vh] flex justify-center items-center gap-5">
      {FDetails.map((a) => {
        return <HFContainer details={a} />;
      })}
    </div>
    </>
  );
};

export default HFeartured;
