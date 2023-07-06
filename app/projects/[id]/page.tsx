"use client";

import { schoolClasses, SchoolClassesI } from "@/data/schoolClassInfo";
import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Righteous } from "next/font/google";
import { BtnToggleLang } from "@/app/components/btnToggleLang";
import { ptTextProjectsMap } from "@/data/pt/projects";
import { enTextProjectsMap } from "@/data/en/projects";
import { ProjectDetailItem } from "@/app/components/projectDetailItem";

export interface TextProjectsI {
  id: string;
  projectSubtitle: string;
  projectDescription: Array<string>;
}

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const defaultText = {
    id: "",
    projectSubtitle: "",
    projectDescription: [""],
  };

  const [textHome, setTranslations] = useState(defaultText);

  ptTextProjectsMap;

  const dataClass: SchoolClassesI = {
    label: "",
    name: "",
    imagePrimary: "",
    imagesDetail: [],
  };

  const [dataInfo, setDataInfo] = useState(dataClass);

  useEffect(() => {
    if (params.id) {
      const data = schoolClasses.find((el) => el.name === params.id);

      if (data) {
        setDataInfo(data);
        handleSelectLang(localStorage.getItem("lang") || "pt-br");
        // setTranslations(mapLang.get(params.id) || defaultText)
      }
    }
  }, []);

  const handleSelectLang = (lang: string) => {
    const mapLang = lang === "pt-br" ? ptTextProjectsMap : enTextProjectsMap;
    setTranslations(mapLang.get(params.id) || defaultText);
  };

  return (
    <main className="h-[100vh] overflow-scroll">
      <BtnToggleLang toggleLang={handleSelectLang} />
      <header className="absolute z-20 w-full bg-zinc-800 flex p-3 items-center justify-between rounded-b-[20px]">
        <Link href="/">
          <button className="h-10 text-zinc-800 w-10 rounded-full flex justify-center items-center bg-zinc-50">
            <ArrowLeft size={20} />
          </button>
        </Link>
        {dataInfo?.label || "--"}
        <div className="w-10 "></div>
      </header>

      <div>
        {dataInfo.imagePrimary}
        <div
          style={{
            backgroundImage: `url(../${dataInfo.imagePrimary})`,
            filter: "blur(8px)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 1,
          }}
          className="h-[100vh] absolute w-full top-0"
        ></div>
        <section className="z-10 absolute flex  items-center py-20 page-wrapper relative h-[100vh]">
          <header className={`text-center text-2xl ${righteous.className}`}>
            {textHome.projectSubtitle}
          </header>
          <div
            className="rounded-xl border-zinc-100 border-1 p-4 m-8"
            style={{
              // backgroundColor: "rgb(0,0,0)",
              backgroundColor: "rgba(255,255,255, 0.4)",
            }}
          >
            <div className="w-full">
              <div className="text-zinc-800 font-medium h-[70vh]">
                <ul className="">
                  {textHome.projectDescription.map((el, i) => (
                    <li key={i} className="mb-4">
                      <ProjectDetailItem str={el} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800  page-wrapper p-5 rounded-t-[32px]">
            <h1 className="text-3xl mt-8">Fotos</h1>
            <ul>
              {dataInfo.imagesDetail.map((el, i) => (
                // <li
                //   className="mb-4 w-full text-zinc-700 text-center flex items-center justify-center h-[200px] bg-zinc-200 rounded-2xl"
                // >
                //   {el}
                // </li>
                <img
                  loading="lazy"
                  key={i}
                  src={`../${el}`}
                  className="object-cover mb-8 rounded-2xl border border-zinc-600 shadow-xl"
                ></img>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
