import { navbarNavs } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="md:container md:mx-auto sticky top-0 left-0 navbar text-white">
      <nav className="top hidden md:flex justify-between border-b border-slate-600 py-6">
        <Image
          src="/svg/logo-gold.svg"
          alt={"Legality Logo"}
          width={175}
          height={175}
        />
        <div className="ctas flex gap-8 items-center">
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
          <button className="bg-white/30 px-7 py-5">Agenda una Cita</button>
        </div>
      </nav>
      <nav className="bottom hidden md:flex justify-between items-center border-b border-slate-600 py-4">
        <div className="navs flex w-1/2 justify-between">
          {navbarNavs.map((nav) => {
            return (
              <Link className="nav" href={nav.href}>
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className="ctas flex gap-10 justify-between">
          <Link href="tel:+50762266183" className="cta flex gap-2 items-center">
            <div className="cta-icon">
              <Image
                src="/images/phone-icon.png"
                width={40}
                height={40}
                alt="Phone Icon"
              />
            </div>
            <div className="content">
              <div className="label text-yellow-500 text-sm">Llámanos Al:</div>
              <div className="text text-md">+507 6226-6183</div>
            </div>
          </Link>
          <Link
            href="mailto:legality.pa@gmail.com"
            className="cta flex gap-2 items-center"
          >
            <div className="cta-icon">
              <Image
                src="/images/email-icon.png"
                width={40}
                height={40}
                alt="Email Icon"
              />
            </div>
            <div className="content">
              <div className="label text-yellow-500 text-sm">
                Escríbenos al Correo:
              </div>
              <div className="text text-md">legality.pa@gmail.com</div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
