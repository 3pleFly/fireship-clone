import { ColorfulFadingBanner, FadeLeft } from "@/components/common/Animations";
import { PropsWithChildren, useRef } from "react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="px-8 lg:mt-20 max-w-[1536px] w-full">
        <div className="lg:flex gap-5 text-white">
          <div className="flex flex-col items-center justify-center lg:p-6 p-10 min-w-[50%]">
            <div className="flex lg:flex-col gap-4 flex-wrap items-center justify-center text-center lg:text-6xl  text-5xl">
              <h1 className="">LEARN TO CODE</h1>
              <h1 className="bg-gradient-to-b from-orange-500 to-yellow-300 text-transparent bg-clip-text">
                FASTER
              </h1>
            </div>
            <h5 className="my-7 text-2xl text-center">
              Fireship is a{" "}
              <span className="text-yellow-500">blazingly fast</span> &&{" "}
              <span className="text-pink-500">highly-amusing</span> way to level
              up your programming skills.
            </h5>
            <button className=" bg-green-500 px-6 py-2 text-sm font-bold">
              START HERE
            </button>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-full lg:bg-[url(/tv.png)] bg-no-repeat bg-cover lg:max-w-[700px] lg:w-[500px] min-h-[300px] mx-auto relative">
              <iframe
                className="w-full h-full lg:w-[330px] lg:h-[185px] mx-0 top-[54px] left-[48px] aspect-video lg:absolute"
                src="https://www.youtube.com/embed/cYoY_WbqNSw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <StyledHalfSection>
            <div className="flex flex-col items-center mb-[100px]">
              <a href="#hardTruthTarget">
                <ColorfulFadingBanner
                  fromColor={"bg-yellow-300"}
                  toColor={"bg-red-500"}
                >
                  <p>HARD TRUTH</p>
                </ColorfulFadingBanner>
              </a>
              <span className="animate-bounce text-5xl block mt-12">
                <a href="#hardTruthTarget">👇</a>
              </span>
            </div>
          </StyledHalfSection>

          <div id="hardTruthTarget" className="pt-[200px]">
            <FadeLeft>
              <p className="text-4xl text-gray-300 px-4 text-center">
                You{" "}
                <span className="text-red-500  animate-pulse font-display">
                  can't
                </span>{" "}
                learn to code by watching videos
              </p>
              <p className="animate-bounce text-center text-white mt-12 text-lg mb-[220px]">
                <a href="#solutionTarget">I'm sad 😢</a>
              </p>
            </FadeLeft>
          </div>

          <StyledFullSection target="solutionTarget">
            <div className="lg:w-2/3 mx-auto">
              <ColorfulFadingBanner
                fromColor={"bg-cyan-400"}
                toColor={"bg-green-500"}
              >
                <p>THE SOLUTION</p>
              </ColorfulFadingBanner>
              <FadeLeft>
                <p className="text-2xl text-gray-500 opacity-90 px-4 text-center mt-16">
                  Fireship is all about
                  <span className="text-green-500 font-display animate-pulse font-bold">
                    {" "}
                    project based
                  </span>{" "}
                  learning. I create short highly-focused videos that make
                  learning to code addicting.{" "}
                </p>
                <p className="animate-bounce text-center text-white mt-6 text-lg mb-[200px]">
                  <a href="#havefun">but like how? 🤔</a>
                </p>
              </FadeLeft>
            </div>
          </StyledFullSection>

          <StyledFullSection target="havefun">
            <div className="lg:w-2/3 mx-auto">
              <ColorfulFadingBanner
                fromColor={"bg-pink-600"}
                toColor={"bg-purple-500"}
              >
                <p>HAVE FUN</p>
              </ColorfulFadingBanner>
              <FadeLeft>
                <p className="text-2xl text-gray-500 opacity-90 px-4 text-center mt-16">
                  I built this one-of-a-kind learning platform to give you{" "}
                  <span className="text-pink-500 font-display animate-pulse font-bold">
                    dopamine
                  </span>{" "}
                  hits like XP and meme prizes for every little accomplishment
                </p>
                <p className="animate-bounce text-center text-white mt-6 text-lg mb-[200px]">
                  login now to start earning useless XP points 💎
                </p>
              </FadeLeft>
            </div>
          </StyledFullSection>

          <StyledFullSection>
            <div className="lg:w-2/3 mx-auto">
              <ColorfulFadingBanner
                fromColor={"bg-green-600"}
                toColor={"bg-yellow-500"}
              >
                <p>LET'S GO</p>
              </ColorfulFadingBanner>
              <FadeLeft>
                <p className="text-2xl text-gray-500 opacity-90 px-4 text-center mt-16">
                  There's tons of free content here, so{" "}
                  <span className="text-yellow-500 font-display animate-pulse font-bold">
                    play
                  </span>{" "}
                  around before you upgrade{" "}
                </p>
                <p className="animate-bounce text-center text-white mt-6 text-lg mb-[200px]">
                  every course starts free, try it out 🚀
                </p>
              </FadeLeft>
            </div>
          </StyledFullSection>
        </div>
      </div>
    </div>
  );
}

const StyledFullSection = ({
  children,
  target,
}: PropsWithChildren<{ target?: string }>) => {
  return (
    <div
      id={target}
      className="h-[75vh] grid place-content-center text-center pt-[250px]"
    >
      {children}
    </div>
  );
};

const StyledHalfSection = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-[50vh] grid place-content-center text-center">
      {children}
    </div>
  );
};
