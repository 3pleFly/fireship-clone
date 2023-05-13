"use client";

import {
  CSSProperties,
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export const FadeLeft: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "-30px" }}
    to={{ opacity: 1, translate: "0" }}
    animation={{ transition: "500ms ease-in-out" }}
  >
    {children}
  </AnimateIn>
);

export const ColorfulFadingBanner: FC<
  PropsWithChildren<{
    fromColor: string;
    toColor: string;
  }>
> = ({ children, fromColor, toColor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`
      ${
        onScreen
          ? `translate-x-0 opacity-100 ${toColor}`
          : `-translate-x-[50px] opacity-0 ${fromColor}`
      }
       inline-block text-gray7 px-6 py-4 text-4xl shadow-xl font-bold duration-500 ease-in-out transition-all`}
    >
      {children}
    </div>
  );
};

const AnimateIn: FC<
  PropsWithChildren<{
    from: CSSProperties;
    to: CSSProperties;
    animation?: CSSProperties;
  }>
> = ({ children, from, to, animation }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = {
    transition: "500ms ease-in-out",
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? { ...to, ...defaultStyles, ...animation }
          : { ...from, ...defaultStyles, ...animation }
      }
    >
      {children}
    </div>
  );
};

const useElementOnScreen = (ref: RefObject<Element>) => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};
