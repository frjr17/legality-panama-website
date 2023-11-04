import { navbarNavs } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center py-5 border-b border-slate-600">
      <div className="navs flex w-1/2 justify-between">
        {navbarNavs.map((nav) => (
          <Link href={nav.href} key={nav.name} className="nav text-xl">
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="ctas flex w-1/2 justify-end gap-10">
        <div className="cta flex gap-2">
          <Image
            src={"/images/phone-icon.png"}
            className="icon"
            width={50}
            height={50}
            alt={"phone-icon"}
          />
          <div className="cta-content ">
            <span className="label text-yellow-500 text-sm ">Llámanos Al:</span>
            <p className="text leading-none text-lg">+507 6226-6183</p>
          </div>
        </div>
        <div className="cta flex gap-2">
          <Image
            src={"/images/email-icon.png"}
            className="icon"
            width={50}
            height={50}
            alt={"phone-icon"}
          />
          <div className="cta-content ">
            <span className="label text-yellow-500 text-sm ">
              Escríbenos al Correo:
            </span>
            <p className="text leading-none text-lg">legality.pa@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
