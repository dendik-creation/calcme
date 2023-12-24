import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export const StartApp = (props) => {
  const [show, setshow] = useState(false);
  window.onload = function () {
    setTimeout(() => {
      setshow(true);
    }, 250);
    setTimeout(() => {
      setshow(false);
      props.isLoading(false);
    }, 2500);
  };
  return (
    <>
      <Transition
        show={show}
        enter="transform transition duration-[500ms] delay-200"
        enterFrom="opacity-0 translate-y-24"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-[500ms] transition ease-in-out"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-24"
        className="flex flex-col justify-center items-center gap-6 mb-20 h-full"
      >
        <i className="bi bi-cloud-sun-fill text-blue-custom-950 text-7xl"></i>
        <div className="text-center">
          <h2 className="text-5xl mb-2 font-semibold text-blue-custom-950">
            Cuaca-Ku
          </h2>
          <span className="text-xl font-medium text-blue-custom-950">
            Weather App used React Js
          </span>
        </div>
      </Transition>
    </>
  );
};
