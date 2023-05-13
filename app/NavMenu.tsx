import Link from "next/link";
import React from "react";

export const dynamic = "force-static";

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center p-8">
      <Link href={"/"}>
        <div className="bg-cover bg-no-repeat bg-[url(/fire_animated.gif)] w-[65px] h-[65px]"></div>
      </Link>
      <ul className="flex justify-center item-center text-white">
        <li className="m-2">
          <Link href={"/pro"}>PRO</Link>
        </li>
        <li className="m-2">
          <Link href={"/labs"}>Labs</Link>
        </li>
        <li className="m-2">
          <Link href={"/courses"}>Courses</Link>
        </li>
      </ul>
    </nav>
  );
}
