import { navbarNavs } from "@/app/lib";
import Link from "next/link";
import CTA from "./cta";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center flex-wrap  border-b border-slate-600">
      <div className="navs flex w-1/2 min-w-[512px] my-5 mx-auto  justify-between">
        {navbarNavs.map((nav) => (
          <Link href={nav.href} key={nav.name} className="nav text-xl">
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="ctas flex w-1/2 min-w-[512px] my-5 mx-auto justify-end gap-10">
        <CTA
          ctaRef="tel:+50762266183"
          iconUrl="/images/phone-icon.png"
          alt="phone-icon"
          label="Llámanos al:"
          text="+507 6226-6183"
        />
        <CTA
          ctaRef="mailto:legality.pa@gmail.com"
          iconUrl="/images/email-icon.png"
          alt="email-icon"
          label="Escríbenos al Correo:"
          text="legality.pa@gmail.com"
        />
      </div>
    </nav>
  );
}
