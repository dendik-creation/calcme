import React, { useState } from "react";
import { StartApp } from "./StartApp";
import { ContentApp } from "./ContentApp";
import { Transition } from "@headlessui/react";
export const WeatherMain = () => {
  const [isLoading, setLoading] = useState(true);
  const handleChange = (data) => {
    setLoading(data);
  };
  return (
    <>
      <div className="h-[100vh]">
        <div className="bg-slate-100 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <StartApp isLoading={handleChange} />
          <Transition show={!isLoading}>
            <ContentApp />
          </Transition>
        </div>
      </div>
    </>
  );
};
