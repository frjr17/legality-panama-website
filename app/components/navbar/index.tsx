import { navbarNavs } from "@/app/lib";
import Link from "next/link";
import CTA from "./cta";

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
        <CTA
          iconUrl="/images/phone-icon.png"
          alt="phone-icon"
          label="Llámanos al:"
          text="+507 6226-6183"
        />
        <CTA
          iconUrl="/images/email-icon.png"
          alt="email-icon"
          label="Escríbenos al Correo:"
          text="legality.pa@gmail.com"
        />
      </div>
    </nav>
  );
}
