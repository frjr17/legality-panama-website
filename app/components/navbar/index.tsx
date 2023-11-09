"use client";
import { navbarNavs } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICTAProps {
  href: string;
  icon: string;
  alt: string;
  label: string;
  text: string;
  onClick?: () => void;
}

export function CTA(props: ICTAProps) {
  return (
    <Link
      onClick={props.onClick ? props.onClick : undefined}
      href={props.href}
      className="cta flex gap-2 items-center"
    >
      <div className="cta-icon">
        <Image src={props.icon} width={40} height={40} alt={props.alt} />
      </div>
      <div className="content">
        <div className="label text-yellow-500 text-sm">{props.label}</div>
        <div className="text text-md">{props.text}</div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(true);
  return (
    <div className="w-full px-5 xl:px-32 fixed top-0 left-0 navbar text-white">
      <nav className="top hidden lg:flex flex-wrap justify-between border-b border-slate-600 py-6">
        <Image
          src="/svg/logo-gold.svg"
          alt={"Legality Logo"}
          width={175}
          height={175}
        />
        <div className="ctas mt-6 flex gap-8 items-center">
          <div className="cart">
            <div className="cart-icon flex items-center gap-4">
              <Image
                width={30}
                height={30}
                alt={"Cart Icon"}
                src="/images/cart-icon.png"
              />
              <span>Tu Carrito (0)</span>
            </div>
          </div>
          <button className="bg-white/30 px-7 py-4">Agenda una Cita</button>
        </div>
      </nav>
      <nav className="bottom hidden lg:flex flex-wrap justify-between items-center border-b border-slate-600 py-4">
        <div className="navs flex w-1/2 justify-between">
          {navbarNavs.map((nav) => {
            return (
              <Link key={nav.name} className="nav" href={nav.href}>
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className="ctas flex gap-10 justify-between">
          <CTA
            href="tel:+50762266183"
            icon="/images/phone-icon.png"
            alt="Phone Icon"
            label="Llámanos Al:"
            text="+507 6226-6183"
          />
          <CTA
            href="mailto:legality.pa@gmail.com"
            icon="/images/email-icon.png"
            alt="Email Icon"
            label="Escríbenos al Correo:"
            text="legality.pa@gmail.com"
          />
        </div>
      </nav>
      <MobileNavbar
        showMobileNav={showMobileNav}
        setShowMobileNav={() => setShowMobileNav(!showMobileNav)}
      />
    </div>
  );
}

function MobileNavbar(props: {
  showMobileNav: boolean;
  setShowMobileNav: () => void;
}) {
  return (
    <div className="sticky top-0 left-0 navbar text-white lg:hidden block">
      <nav className="relative border-b border-slate-600 py-6 flex">
        <div className="w-[40px]"></div>
        <Image
          className="mx-auto"
          src="/svg/logo-gold.svg"
          alt={"Legality Logo"}
          width={175}
          height={175}
        />

        <Image
          onClick={props.setShowMobileNav}
          src="/svg/bars.svg"
          className=""
          alt={"navbar"}
          width={30}
          height={30}
        />
      </nav>
      <nav
        className={`w-screen h-screen ${
          props.showMobileNav ? "block" : "hidden"
        } bg-daintree-950 fixed top-0 left-0`}
      >
        <header className="relative  py-6 px-5 flex">
          <div className="w-[40px]"></div>
          <Image
            className="mx-auto"
            src="/svg/logo-gold.svg"
            alt={"Legality Logo"}
            width={175}
            height={175}
          />

          <Image
            onClick={props.setShowMobileNav}
            src="/svg/close-icon.svg"
            alt={"navbar"}
            width={30}
            height={30}
          />
        </header>
        <div className="navs flex flex-col px-5 border-collapse">
          {navbarNavs.map((nav) => (
            <Link
              className="border-y border-slate-600 py-6"
              onClick={props.setShowMobileNav}
              key={nav.name}
              href={nav.href}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-6 px-5">
          <CTA
            onClick={props.setShowMobileNav}
            href="tel:+50762266183"
            icon="/images/phone-icon.png"
            alt="Phone Icon"
            label="Llámanos Al:"
            text="+507 6226-6183"
          />
          <CTA
            onClick={props.setShowMobileNav}
            href="mailto:legality.pa@gmail.com"
            icon="/images/email-icon.png"
            alt="Email Icon"
            label="Escríbenos al Correo:"
            text="legality.pa@gmail.com"
          />
        </div>
      </nav>
    </div>
  );
}
