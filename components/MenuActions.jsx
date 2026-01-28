"use client";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ToastContainer, toast } from "react-toastify";
import richTextToMarkdown from "@/utils/richTextToMarkdown";

export default function MenuActions({ menu }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  const markdown = richTextToMarkdown(menu.description);

  return (
    <>
      <ToastContainer />

      {/* Options */}
      <div className="mb-10">
        <div className="text-md font-semibold mb-2">Select Option</div>

        <div className="grid grid-cols-2 gap-2">
          {menu.option?.data?.map((item, i) => (
            <div
              key={i}
              className={`border rounded-md py-3 text-center font-medium
                ${
                  item.availiable
                    ? "cursor-pointer hover:border-black"
                    : "cursor-not-allowed opacity-40 bg-black/10"
                }
                ${selectedOption === item.option ? "border-black" : ""}
              `}
              onClick={() => {
                if (!item.availiable) return;
                setSelectedOption(item.option);
                setShowError(false);
              }}
            >
              {item.option}
            </div>
          ))}
        </div>

        {showError && (
          <p className="text-red-600 mt-2">Option selection is required</p>
        )}
      </div>

      <button
        className="w-full py-4 rounded-full bg-black text-white text-lg"
        onClick={() => {
          if (!selectedOption) {
            setShowError(true);
            return;
          }
          notify();
        }}
      >
        Add to Cart
      </button>

      <div className="mt-10">
        <h2 className="text-lg font-bold mb-5">Details</h2>
        <div className="markdown text-md mb-5">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
