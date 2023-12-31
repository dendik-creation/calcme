import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
// import { buttons } from "./data/Button";
export const ContentApp = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [answered, setAnswered] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  // KeyPad
  // useEffect(() => {
  //   document.addEventListener("keyup", (e) => {
  //     const found = buttons.find((item) => item.key == e.key);
  //     if (found) {
  //       //
  //       clickSound();
  //       buttonClick(`${found.value}-btn`);
  //       setTimeout(() => {
  //         if (
  //           found.type == "number" ||
  //           found.type == "operator" ||
  //           found.type == "dot"
  //         ) {
  //           setValue((prev) => prev + found.value);
  //         }
  //         if (found.type == "delete") {
  //           setValue((prev) => prev.slice(0, -1));
  //         }
  //         if (found.type == "clear") {
  //           setValue("");
  //         }
  //         if (found.type == "equal") {
  //           handleCalculate();
  //         }
  //       }, 150);
  //     }
  //   });
  // }, []);

  const clickSound = () => {
    const click = new Audio("./click.wav");
    click.play();
  };

  const Button = (props) => {
    return (
      <>
        <button
          id={`${props.value}-btn`}
          value={props.value}
          onClick={handleClick}
          name={props.type}
          disabled={
            (props.type == "equal" ||
              props.type == "operator" ||
              props.type == "clear" ||
              props.type == "delete") &&
            value == ""
          }
          className={`flex relative overflow-hidden justify-center transition-all disabled:transition-all text-3xl font-bold items-center disabled:opacity-30 h-full rounded-md shadow-inner shadow-daisy-bush-100/30 ${
            props.type == "number" || props.type == "dot"
              ? "bg-daisy-bush-900"
              : props.type == "delete" || props.type == "clear"
              ? "bg-daisy-bush-700"
              : props.type == "operator"
              ? "bg-daisy-bush-400"
              : props.type == "equal"
              ? "bg-daisy-bush-100 text-daisy-bush-950"
              : ""
          } ${
            props.type == "equal" || props.type == "clear" ? "col-span-2" : ""
          }
                  `}
        >
          {props.name == "backspace" ? (
            <i className="fa-solid fa-backspace"></i>
          ) : props.name == "/" ? (
            <i className="fa-solid fa-divide"></i>
          ) : (
            props.name
          )}
          <div
            id={`${props.value}-btn-active`}
            style={{ display: "none" }}
            className="absolute bottom-0 left-0 bg-gradient-to-t from-daisy-bush-50/20 to-daisy-bush-50/0 w-full h-full"
          ></div>
        </button>
      </>
    );
  };

  const handleClick = async (event) => {
    clickSound();
    buttonClick(event.target.id);
    setTimeout(() => {
      if (answered) {
        setValue("");
        setAnswered(false);
      }
      handleChange(event.target.name, event.target.value);
    }, 150);
  };

  const handleCalculate = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
      setAnswered(true);
    } catch (error) {
      setAnswered(true);
      setValue("Error");
    }
  };

  const RegexShowValue = () => {
    const targetReplace = ["\\*", "/", "\\+", "\\-"];

    const replaceValue = [" × ", " ÷ ", " + ", " - "];

    let modifiedString = value;
    targetReplace.forEach((item, index) => {
      modifiedString = modifiedString.replace(
        new RegExp(item, "g"),
        replaceValue[index]
      );
    });

    return modifiedString;
  };

  const handleChange = (type, newValue) => {
    if (type == "number" || type == "operator" || type == "dot") {
      setValue((prev) => prev + newValue);
    }
    if (type == "delete") {
      setValue((prev) => prev.slice(0, -1));
    }
    if (type == "clear") {
      setValue("");
    }
    if (type == "equal") {
      handleCalculate();
    }
  };

  const buttonClick = (id) => {
    const btnId = document.getElementById(id);
    const btnIdActive = document.getElementById(`${id}-active`);
    if (btnId) {
      btnId.style.transition = "all ease 0.3s";
      btnId.style.transform = "translateY(15px)";
      btnIdActive.style.display = "block";
      setTimeout(() => {
        btnId.style.transition = "all ease 0.3s";
        btnId.style.transform = "translateY(0px)";
        btnIdActive.style.display = "none";
      }, 50);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-start w-full">
        <Transition
          show={show}
          enter="transform transition duration-[300ms] delay-[100ms]"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transform duration-[300ms] transition ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
          className="flex flex-col justify-center items-center w-full h-full"
        >
          <div
            className={`bg-daisy-bush-950 relative shadow-inner md:max-w-2xl z-0 overflow-hidden w-full px-4 py-4 rounded-md text-daisy-bush-50 h-[85vh]`}
          >
            <div className="w-full mb-5 px-3 py-2 relative z-20 overflow-hidden">
              <div
                type="text"
                name="preview"
                id="preview"
                className="w-full text-right relative overflow-hidden rounded-md z-20 px-5 h-24 overflow-x-auto bg-daisy-bush-900/40 shadow-daisy-bush-100/30 shadow-inner text-daisy-bush-100 font-bold text-4xl flex justify-end items-center"
              >
                <RegexShowValue />
                <Transition
                  show={answered}
                  enter="transform transition duration-[300ms] delay-[100ms]"
                  enterFrom="opacity-0 translate-y-24"
                  enterTo="opacity-100 translate-y-0"
                  leave="transform duration-[300ms] transition ease-in-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-24"
                  className="absolute w-full fa-fade -top-0 right-0 bg-gradient-to-t from-daisy-bush-400/20 to-daisy-bush-400/0 h-full"
                ></Transition>
              </div>
            </div>
            <Transition
              show={show}
              enter={`transform transition duration-[300ms] delay-[4000ms]`}
              enterFrom="opacity-0 scale-110"
              enterTo="opacity-100 scale-100"
              leave="transform duration-[300ms] transition ease-in-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
              className="grid grid-cols-4 h-[67vh] z-20 md:h-[62vh] gap-4 px-3 py-2"
            >
              <Button value={7} type={"number"} name={7} key={7} />
              <Button value={8} type={"number"} name={8} key={8} />
              <Button value={9} type={"number"} name={9} key={9} />
              <Button
                value={"DEL"}
                type={"delete"}
                name={"backspace"}
                key={"Backspace"}
              />
              <Button value={4} type={"number"} name={4} key={4} />
              <Button value={5} type={"number"} name={5} key={5} />
              <Button value={6} type={"number"} name={6} key={6} />
              <Button value={"+"} type={"operator"} name={"+"} key={"+"} />
              <Button value={1} type={"number"} name={1} key={1} />
              <Button value={2} type={"number"} name={2} key={2} />
              <Button value={3} type={"number"} name={3} key={3} />
              <Button value={"-"} type={"operator"} name={"-"} key={"-"} />
              <Button value={"."} type={"dot"} name={"."} key={"."} />
              <Button value={0} type={"number"} name={0} key={0} />
              <Button value={"/"} type={"operator"} name={"/"} key={"/"} />
              <Button value={"*"} type={"operator"} name={"×"} key={"*"} />
              <Button value={"AC"} type={"clear"} name={"AC"} key={"Delete"} />
              <Button value={"="} type={"equal"} name={"="} key={"Enter"} />
            </Transition>
          </div>
        </Transition>
      </div>
    </>
  );
};
