"use client";

import { schoolClasses } from "@/data/schoolClassInfo";
import { ArrowDown } from "@phosphor-icons/react";
import { Love_Ya_Like_A_Sister, Righteous } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BtnToggleLang } from "./components/btnToggleLang";
import { ptTextsHome } from "../data/pt/home";
import { enTextsHome } from "@/data/en/home";
import { SplashAnimate } from "./components/splashAnimate";

export interface TextHomeI {
  subTitle: string;
  descriptionFair: string;
  showMore: string;
  expositionLabel: string;
}

const fLoveYaKikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});
const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [textHome, setTranslations] = useState(ptTextsHome);
  const [splashIsVisible, finiSplash] = useState(true);
  // const [isExpanded, toggleExpand] = useState(false);

  useEffect(() => {
    const text: TextHomeI =
      localStorage.getItem("lang") === "pt-br" ? ptTextsHome : enTextsHome;
    setTranslations(text);
  }, []);

  return (
    <>
      {splashIsVisible ? (
        <SplashAnimate
          onFinishAnimation={() => {
            console.log("acabo");
            finiSplash(false)
          }}
        />
      ) : (
        ""
      )}
      <main className="page-wrapper px-5">
        <BtnToggleLang
          toggleLang={(newLang) => {
            console.log("muda ", newLang);
            const text: TextHomeI =
              newLang === "pt-br" ? ptTextsHome : enTextsHome;
            setTranslations(text);
          }}
        />
        <section className="h-[100vh] flex flex-col justify-between">
          <div>
            <header
              className={`text-center mt-16 text-4xl ${fLoveYaKikeASister.className}`}
            >
              STEAM FAIR
            </header>
            <section
              className={`text-center mt-16 text-md ${righteous.className}`}
            >
              {textHome.subTitle}
            </section>

            <p className="mt-16 text-justify	">{textHome.descriptionFair}</p>
          </div>
          <footer className="flex justify-center mb-8">
            <a href="#cardsArea" className="flex flex-col items-center">
              {textHome.showMore}
              <ArrowDown size={22}></ArrowDown>
            </a>
          </footer>
        </section>
        <section id="cardsArea">
          <h2 className="text-3xl mt-8">{textHome.expositionLabel}</h2>
          <div>
            <ul className="flex flex-wrap mt-8">
              {schoolClasses.map((el, i) => (
                <li key={i} className="w-1/2 lg:w-1/3">
                  <Link
                    href={`/projects/${el.name}`}
                    className="flex flex-col items-center mb-8 justify-center"
                  >
                    <img
                      src={el.imagePrimary}
                      className="h-[40vw] md:h-[220px] w-[40vw] md:w-[220px] rounded-full bg-zinc-50 object-cover"
                    ></img>
                    {el.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
