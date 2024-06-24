import { useState } from "react";
import SPContainer from "./SPContainer";

const SavingPlans = () => {
  const [SPDetails, setSPDetails] = useState([
    {
      type: "Monthly Deposit",
      description: "Add monthly deposits to your savings, for secure future",
      href: "/",
    },
    {
      type: "Fixed Deposit",
      description: "Add fixed deposits to your savings, for secure future",
      href: "/",
    },
  ]);
  
  const updateSPDetails = (index, updatedDetails) => {
    const updatedPlans = [...SPDetails];
    updatedPlans[index] = updatedDetails;
    setSPDetails(updatedPlans);
  };

   return (
    <div className="w-full h-screen flex justify-center items-center gap-5">
      {SPDetails.map((details, index) => (
        <SPContainer
          key={index}
          details={details}
          updateSPDetails={(newDetails) => updateSPDetails(index, newDetails)}
        />
      ))}
    </div>
  );
};

export default SavingPlans;