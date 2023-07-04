"use client";

import { schoolClasses } from "@/data/schoolClassInfo";
import { ArrowDown } from "@phosphor-icons/react";
import { Love_Ya_Like_A_Sister, Righteous } from "next/font/google";
import Link from "next/link";

const fLoveYaKikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});
const righteous = Righteous({ subsets: ["latin"], weight: "400" });

// const schoolClasses = [
//   {
//     label: "Toddler & Nursery",
//     name: "toddler_and_nursery",
//     imagePrimary: "toddler_and_nursery_baner.png",
//   },
//   {
//     label: "JK",
//     name: "jk",
//     imagePrimary: "kj_baner.png",
//   },
//   {
//     label: "SK",
//     name: "sk",
//     imagePrimary: "sk_baner3.png",
//   },
//   {
//     label: "Year 1",
//     name: "year1",
//     imagePrimary: "year1_baner.png",
//   },
//   {
//     label: "Year 2",
//     name: "year2",
//     imagePrimary: "year2_baner.png",
//   },
//   {
//     label: "Year 3",
//     name: "year3",
//     imagePrimary: "year3_baner.png",
//   },
//   {
//     label: "Year 4",
//     name: "year4",
//     imagePrimary: "year4_baner.png",
//   },
//   {
//     label: "Year 5",
//     name: "year5",
//     imagePrimary: "year5_baner.png",
//   },
// ];


export default function Home() {
  return (
    <main className="page-wrapper px-5">
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
            Riquezas Sociais, Econômicas e Culturais do Espírito Santo -
            “Embarque nesta viagem e conheça os avanços do nosso Estado!
          </section>

          <p className="mt-16 text-justify	">
            “Steam Fair” é uma feira que prevê a interação dos conhecimentos de
            Ciência, Tecnologia, Engenharia, Artes e Matemática, possibilitando
            ao aluno assimilar conhecimentos de forma integrada, tendo como base
            de estudo um Projeto em comum que desperta a sua curiosidade,
            contribui para a compreensão de problemas ambientais e sociais e
            estimula o planejamento de ideias e resoluções criativas e
            tecnológicas! Esse ano cada turma irá abordar temas da cultura,
            história e belezas do nosso Espírito Santo!
          </p>
        </div>
        <footer className="flex justify-center mb-8">
          <button className="flex flex-col items-center">
            Ver mais
            <ArrowDown size={22}></ArrowDown>
          </button>
        </footer>
      </section>
      <section>
        <h2 className="text-3xl mt-8">Exposições</h2>
        <div>
          <ul className="flex flex-wrap mt-8">
            {schoolClasses.map((el, i) => (
              <li
                key={i}
                className="w-1/2 w-md-1/4 flex flex-col items-center mb-8"
              >
                <Link href={`/projects/${el.name}`}>
                  <img
                    src={el.imagePrimary}
                    className="h-[40vw] w-[40vw] h-md-[40vw] w-md-[40vw] rounded-full bg-zinc-50"
                  ></img>
                  {el.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
