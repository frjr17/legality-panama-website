import Image from "next/image";

export default function Topbar() {
  return (
    <nav className="top-bar py-5 border-b border-slate-600 flex justify-between items-center">
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
  );
}
