import {
  Bird,
  Camera,
  CookingPot,
  FishSimple,
  LightbulbFilament,
  Lighthouse,
  Mountains,
  PaintBrush,
  Plant,
  Synagogue,
  Volleyball,
  Waves,
} from "@phosphor-icons/react";
import { Londrina_Shadow, Love_Ya_Like_A_Sister } from "next/font/google";
import { useEffect, useState } from "react";

interface Props {
  onFinishAnimation: () => void;
}

const londrinaShadow = Londrina_Shadow({
  subsets: ["latin"],
  weight: "400",
});

const fLoveYaKikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

export const SplashAnimate: React.FC<Props> = ({ onFinishAnimation }: any) => {
  const iconsLis: Array<React.FC> = [
    Camera,
    CookingPot,
    FishSimple,
    LightbulbFilament,
    Lighthouse,
    Bird,
    Mountains,
    PaintBrush,
    Plant,
    Synagogue,
    Volleyball,
    Waves,
  ];

  const fullList = [
    ...iconsLis,
    ...iconsLis,
    ...iconsLis,
    ...iconsLis,
    ...iconsLis,
  ];

  const [indexTime, setTime] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      console.log("quando bater aqui acaba");
      onFinishAnimation();
    }, 9 * 1000);
  });

  const handleGetColorFlag = (num: number) => {
    if (num < 2) return "changeColorPink";
    if (num < 4) return "changeColorWhite";
    return "changeColorBlue";
  };

  return (
    <section className="fixed z-40 bg-zinc-700 h-[100vh] w-[100vw]">
      <div className="page-wrapper">
        <ul
          // style={{ animationDelay: "5500ms" }}
          className="flex flex-wrap w-full remove-item"
        >
          {fullList.map((el, j) => {
            const Component = el;
            return (
              <li
                key={j}
                style={{ animationDelay: `${100 * j}ms` }}
                className={`w-1/6 h-[10vh] text-4xl flex text-zinc-600 justify-center items-center 
                ${handleGetColorFlag(j % 6)}`}
              >
                {<Component />}
              </li>
            );
          })}
        </ul>
        <div className="fixed items-center top-[50%] left-[50%] z-50 flex flex-col justify-center translate-x-[-50%] translate-y-[-50%] ">
          <h1
            style={{ animationDelay: "7s" }}
            className={`show-item text-red-500 text-[100px] shadow-[0_35px_60px_-15px_rgba(240, 62, 62, 0.5)] ${londrinaShadow.className}`}
          >
            Steam{" "}
          </h1>
          <h2
            style={{ animationDelay: `7s` }}
            className={`show-item text-red-500 text-[48px]  shadow-[0_35px_60px_-15px_rgba(240, 62, 62, 0.5)] ${fLoveYaKikeASister.className}`}
          >
            Fair
          </h2>
        </div>
      </div>
    </section>
  );
};
