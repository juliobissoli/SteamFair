import {
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
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface Props {
  onFinishAnimation: () => void;
}

export const SplashAnimate: React.FC<Props> = ({ onFinishAnimation }: any) => {
  const iconsLis: Array<React.FC> = [
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
    // const clock = setInterval(() => {
    //   console.log("barte de um em um");
    //   //   setTime(indexTime + 1)
    // }, 1000);

    setTimeout(() => {
      console.log("quando bater aqui acaba");
      //   clearInterval(clock);
      onFinishAnimation();
    }, 2 * 1000);
  });

  return (
    <section className="fixed z-50 bg-zinc-700 h-[100vh] w-[100vw]">
      <div className="page-wrapper">
        <ul className="flex flex-wrap w-full">
          {fullList.map((el, j) => {
            const Component = el;
            return (
              <li
                key={j}
                className="w-1/5 h-[10vh] text-4xl flex justify-center items-center text-zinc-500"
              >
                {<Component />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
