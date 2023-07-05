"use client"

import { ArrowDown, ArrowLeft, CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const BtnToggleLang = () => {
  const [currentLang, setDataInfo] = useState("pt-br");

  useEffect(() => {
    setDataInfo(localStorage.getItem("lang") || "pt-br");
  }, []);

  return (
    <div className="fixed flex flex-col items-center text-sm text-zinc-700   rounded-b-full top-0 right-4 p-2 z-30 bg-zinc-50">
      <button
      onClick={()=> {
        setDataInfo(currentLang === "pt-br" ? 'en-ca' : 'pt-br')
      }}
      >{currentLang === "pt-br" ? "🇧🇷" : "🇨🇦"}</button>
      <CaretDown />
    </div>
  );
};
