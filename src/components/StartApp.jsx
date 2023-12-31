import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export const StartApp = (props) => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshow(true);
      setTimeout(() => {
        setshow(false);
        props.isLoading(false);
      }, 3000);
    }, 250);
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col justify-center items-center gap-6 h-full">
        <Transition
          show={show}
          enter="transform transition duration-[300ms] delay-[200ms] ease-in-out"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transform duration-[300ms] transition ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
        >
          <i className="fa-solid fa-calculator text-daisy-bush-950 text-7xl fa-fade"></i>
        </Transition>
        <Transition
          show={show}
          enter="transform transition duration-[300ms] delay-[200ms] ease-in-out"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transform duration-[300ms] transition ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-2 font-semibold text-daisy-bush-950">
            Calc Me
          </h2>
          <span className="text-xl font-medium text-daisy-bush-950">
            Kalkulator Sederhana Javascript
          </span>
        </Transition>
      </div>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
        integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
    </>
  );
};
