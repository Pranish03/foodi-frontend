"use client";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToBag } from "@/store/bagSlice";

export default function MenuClient({ menu }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [showError, setShowError] = useState(false);

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-center",
      theme: "dark",
    });
  };

  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <div className="mb-10">
        <div className="text-md font-semibold mb-2 text-gray-900">
          Select Option
        </div>

        <div className="relative flex items-center">
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setShowError(false);
            }}
            className={`w-full appearance-none border rounded-md py-3 px-3 text-md ${showError ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>

            {menu.option?.data?.map((item, i) => (
              <option key={i} value={item.option} disabled={!item.availiable}>
                {item.option} {!item.availiable ? "(Unavailable)" : ""}
              </option>
            ))}
          </select>
          <span className="absolute right-2.5 text-gray-700">
            <FiChevronDown size={24} />
          </span>
        </div>

        {showError && (
          <p className="text-red-600 mt-2">Option selection is required</p>
        )}
      </div>

      <button
        className="bg-green-700 hover:bg-green-700/95 text-lg text-white w-full py-2.5 rounded-lg cursor-pointer flex justify-center items-center gap-2"
        onClick={() => {
          if (!selectedOption) {
            setShowError(true);
            return;
          }

          dispatch(
            addToBag({
              ...menu,
              selectedOption,
              oneQuantityPrice: menu.price,
            }),
          );

          notify();
        }}
      >
        Add to Bag
      </button>
    </>
  );
}
