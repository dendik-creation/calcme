import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { findCity } from "./RequestAPI";

export const ContentApp = () => {
  const [show, setShow] = useState(false);
  const [finding, setFinding] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const loadContent = () => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  };
  loadContent();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchCity = (e) => {
    e.preventDefault();
    if (search) {
      setFinding(true);
      findCity(search)
        .then((res) => {
          setTimeout(() => {
            setFinding(false);
            setData(res);
          }, 200);
        })
        .catch((err) => {
          setTimeout(() => {
            setFinding(false);
            setData(err);
          }, 200);
        });
    }
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
        <div
          className={`bg-blue-custom-950 max-w-7xl w-96 md:w-full px-4 py-4 rounded-md text-blue-custom-50 h-[600px] ${
            finding || data?.message ? "h-[600px]" : null
          }`}
        >
          {/* Search */}
          <form
            onSubmit={(e) => searchCity(e)}
            method="GET"
            className="flex justify-start items-center mb-6 mt-3 gap-3"
          >
            <div className="w-full relative">
              <input
                type="text"
                autoComplete="off"
                name="search"
                id="search"
                onChange={(e) => handleChange(e)}
                value={search}
                required
                placeholder="Cari Desa, Kecamatan, Kota"
                className="px-3 ps-8 py-2 rounded-md w-full selection:text-blue-custom-900 selection:bg-blue-custom-100 text-blue-custom-900 focus:outline-none"
              />
              <i className="bi bi-geo-fill text-lg text-blue-custom-950 absolute left-1.5 opacity-70 top-1.5"></i>
            </div>
            <button
              className="rounded-md bg-blue-custom-800 px-3 py-2 h-full"
              type="submit"
            >
              <i className="bi bi-search mb-2 font-semibold text-blue-custom-100"></i>
            </button>
          </form>

          {/* Data */}
          <Transition
            show={data == null}
            enter="transform transition duration-[300ms] delay-[500ms]"
            enterFrom="opacity-0 scale-110"
            enterTo="opacity-100 scale-100"
            leave="transform duration-[300ms] transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {" "}
            <div className="flex justify-center h-full mt-40 gap-7 items-center flex-col">
              <i className="bi bi-search text-8xl"></i>
              <div className="text-2xl">Cari Lokasi di Cuaca-Ku</div>
            </div>
          </Transition>

          <Transition
            show={!finding && data != null}
            enter="transform transition duration-[300ms] delay-[300ms]"
            enterFrom="opacity-0 scale-110"
            enterTo="opacity-100 scale-100"
            leave="transform duration-[300ms] transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {data?.message ? (
              <div className="flex justify-center h-full mt-40 gap-7 items-center flex-col">
                <i className="bi bi-patch-question-fill text-8xl"></i>
                <div className="text-2xl">Lokasi Tidak Ditemukan</div>
              </div>
            ) : (
              <div className="">
                <div className="flex justify-center items-center mb-8 flex-col">
                  <div className="flex justify-center items-center flex-col">
                    <div className="">
                      <img
                        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                        alt={data?.weather[0].description}
                        className="h-36"
                      />
                    </div>
                    <div className="text-6xl mb-2">
                      {Math.floor(data?.main.temp)}°c
                    </div>
                    <div className="text-md mb-2 capitalize">
                      {data?.weather[0].description}
                    </div>
                    <div className="text-3xl">{data?.name}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="flex justify-center gap-4 items-center">
                    <i className="bi bi-water text-2xl opacity-70"></i>
                    <div className="flex flex-col">
                      <span className="text-xl">{data?.main.humidity}%</span>
                      <div className="opacity-70 text-sm">Kelembaban</div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 items-center">
                    <i className="bi bi-arrow-bar-down text-2xl opacity-70"></i>
                    <div className="flex flex-col">
                      <span className="text-xl">
                        {data?.main.pressure} mbar
                      </span>
                      <div className="opacity-70 text-sm">Tekanan</div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 items-center">
                    <i className="bi bi-wind text-2xl opacity-70"></i>
                    <div className="flex flex-col">
                      <span className="text-xl">{data?.wind.speed} km/j</span>
                      <div className="opacity-70 hidden md:block text-sm">
                        Kecepatan Angin
                      </div>
                      <div className="md:hidden flex flex-col">
                        <span className="opacity-70 text-sm">Kecepatan</span>
                        <span className="opacity-70 text-sm">Angin</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 items-center">
                    <i className="bi bi-thermometer-half text-2xl opacity-70"></i>
                    <div className="flex flex-col">
                      <span className="text-xl">
                        {Math.floor(data?.main.feels_like)}°c
                      </span>
                      <div className="opacity-70 text-sm">Suhu Yang Terasa</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </Transition>
    </>
  );
};
