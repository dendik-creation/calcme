import React, { useState } from "react";
import { StartApp } from "./StartApp";
import { ContentApp } from "./ContentApp";
import { Transition } from "@headlessui/react";
export const CalcMain = () => {
  const [isLoading, setLoading] = useState(true);
  const handleChange = (data) => {
    setLoading(data);
  };
  return (
    <>
      <div className="h-[100vh]">
        <div className="bg-slate-100 flex min-h-full flex-col justify-center mx-3">
          <StartApp isLoading={handleChange} />
          <Transition show={!isLoading}>
            <ContentApp />
          </Transition>
        </div>
      </div>
    </>
  );
};
