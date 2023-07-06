"use client";

import { ArrowDown, ArrowLeft, CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface Props {
  toggleLang: (value: string) => void;
}

export const BtnToggleLang: React.FC<Props> = ({ toggleLang }: any) => {
  const [currentLang, setDataInfo] = useState("pt-br");
  const [isExpanded, toggleExpand] = useState(false);

  useEffect(() => {
    setDataInfo(localStorage.getItem("lang") || "pt-br");
  }, []);

  return (
    <div className="fixed text-sm text-zinc-700   rounded-b-full top-0 right-4 p-2 z-30 bg-zinc-50">
      {!isExpanded ? (
        <button
          className=" flex flex-col  items-center border-transparent border-2 px-1"
          onClick={() => {
            toggleExpand(!isExpanded);
          }}
        >
          {currentLang === "pt-br" ? "🇧🇷" : "🇨🇦"}
          <CaretDown />
        </button>
      ) : (
        <div className="flex flex-col">
          {[
            { value: "pt-br", flag: "🇧🇷" },
            { value: "en-ca", flag: "🇨🇦" },
          ].map((el) => (
            <button
              key={el.value}
              className={`border-2 px-1
                ${
                  currentLang == el.value
                    ? "border-red-200"
                    : "border-transparent"
                }`}
              onClick={() => {
                setDataInfo(el.value);
                toggleExpand(!isExpanded);
                localStorage.setItem("lang", el.value);
                toggleLang(el.value)
              }}
            >
              {el.flag}
            </button>
          ))}

          {/* <button
            onClick={() => {
              setDataInfo("pt-br");
              toggleExpand(!isExpanded);
            }}
          >
            🇧🇷
          </button> */}
        </div>
      )}
    </div>
  );
};
