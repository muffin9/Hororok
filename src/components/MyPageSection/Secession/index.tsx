"use client";

import { useState } from "react";
import SecessionStep1 from "./Step1";
import SecessionStep2 from "./Step2";

const Secession = () => {
  const [isStep2, setIsStep2] = useState(false);
  return (
    <div className="px-4 mt-4">
      {isStep2 ? (
        <SecessionStep2 />
      ) : (
        <SecessionStep1 setIsStep2={setIsStep2} />
      )}
    </div>
  );
};

export default Secession;
