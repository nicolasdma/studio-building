import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import FlipWords from "./ui/FlipWords";
import { basedIn } from "../data";

const Hero = () => {
  const basedList = basedIn.sort(() => Math.random() - 0.5);
  return (
    <div className="pb-48 pt-1 h-[100vh]">
      <div className="flex h-screen w-full items-center justify-center bg-black-100 dark:bg-black-100 absolute top-0 left-0">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="flex relative py-5 sm:mt-10 sm:mb-20 z-10 h-[80vh]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start sm:items-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Unleashing the Dynamic Power
            </p>

            <TextGenerateEffect
              words="Turning Smooth Ideas into Bold Digital Journeys"
              className="text-left text-[45px] md:text-5xl lg:text-8xl lg:tracking-tighter"
            />
            <p className="text-left text-white color- md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl w-full h-24">
              Hi, I&apos;m Nicolás, an Argentine Developer Based in [{" "}
              {<FlipWords words={basedList} />}].
            </p>
          </div>

          <a href="about">
            <MagicButton
              title="Send me a message"
              trailingIcon={<FaLocationArrow />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
