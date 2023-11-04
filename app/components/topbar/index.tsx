"use client";
import Image from "next/image";
import Navbar from "../navbar";
import { useState } from "react";

function MobileTopbar(props: { toggleBar: boolean; setToggleBar(): void }) {
  return (
    <nav
      className={`top-bar py-5 border-b border-slate-600 flex justify-between items-center`}
    >
      <div className=""></div>
      <div className="">
        <Image
          src={"/svg/logo-gold.svg"}
          width={200}
          height={200}
          alt={"Legality logo"}
        />
      </div>
      <div className="" onClick={props.setToggleBar}>
        <Image src={"/svg/bars.svg"} width={40} height={40} alt={"Menu Icon"} />
      </div>
      <div
        className={`fixed ${
          props.toggleBar ? "md:hidden" : "hidden"
        } bg-white w-screen h-screen top-0 left-0`}
      >
        <Image
          onClick={props.setToggleBar}
          className=" absolute top-1 right-1"
          src={"/svg/close-icon.svg"}
          width={40}
          height={40}
          alt={"Close Icon"}
        />
        {/* <Navbar /> */}
      </div>
    </nav>
  );
}

export default function Topbar() {
  const [toggleBar, setToggleBar] = useState(false);
  return (
    <>
      <nav
        className={`top-bar py-5 border-b border-slate-600 md:flex hidden justify-between items-center`}
      >
        <Image
          src={"/svg/logo-gold.svg"}
          width={200}
          height={200}
          alt={"Legality logo"}
        />
        <div className="ctas flex gap-8 items-center">
          <div className="cart-container flex items-center gap-3">
            <Image
              src={"/images/cart-icon.png"}
              width={30}
              height={30}
              alt={"CartIcon"}
            />
            <span>Tu Carrito (0)</span>
          </div>
          <button className="py-5 px-8 bg-white/10">Agenda una Cita</button>
        </div>
      </nav>
      <MobileTopbar
        setToggleBar={() => setToggleBar(!toggleBar)}
        toggleBar={toggleBar}
      />
    </>
  );
}
