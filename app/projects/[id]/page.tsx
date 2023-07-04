"use client";

import { schoolClasses } from "@/data/schoolClassInfo";
import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const dataClass = {
    label: "",
    name: "",
    imagePrimary: "",
  };

  const [dataInfo, setDataInfo] = useState(dataClass);

  useEffect(() => {
    if (params.id) {
      const data = schoolClasses.find((el) => el.name === params.id);

      console.log(data);
      if (data) {
        setDataInfo(data);
      }
    }
  }, []);

  return (
    <main>
      <header className="flex p-3 items-center justify-between">
      <Link href="/">
        <button className="h-10 text-zinc-800 w-10 rounded-full flex justify-center items-center bg-zinc-50">
          <ArrowLeft size={20}/>
        </button>
      </Link>
        {dataInfo?.label || "--"}
      <div></div>
      </header>

      <div className="page-wrapper"></div>
    </main>
  );
}
