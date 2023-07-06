"use client";

import {  useState } from "react";
import { SplashAnimate } from "./components/splashAnimate";
import { useRouter } from "next/navigation";

export interface TextHomeI {
  subTitle: string;
  descriptionFair: string;
  showMore: string;
  expositionLabel: string;
  prizeDrawTitle: string;
  prizeDrawSubtitle: string;
  prizeDrawBtn: string;
}

export default function Home() {
  const router = useRouter();
  const [splashIsVisible, finiSplash] = useState(true);
  // const [isExpanded, toggleExpand] = useState(false);

  return (
    <>
      {splashIsVisible ? (
        <SplashAnimate
          onFinishAnimation={() => {
            console.log("acabo");
            finiSplash(false);
            router.push("/home");
          }}
        />
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <button>ver mais</button>
        </div>
      )}
    </>
  );
}
