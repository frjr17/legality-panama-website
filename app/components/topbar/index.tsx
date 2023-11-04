import Image from "next/image";
import Navbar from "../navbar";

function MobileTopbar() {
  return (
    <nav className="top-bar md:hidden py-5 border-b border-slate-600 flex justify-between items-center">
      <div className=""></div>
      <div className="">
        <Image
          src={"/svg/logo-gold.svg"}
          width={200}
          height={200}
          alt={"Legality logo"}
        />
      </div>
      <div className="">
        <Image src={"/svg/bars.svg"} width={40} height={40} alt={"Menu Icon"} />
      </div>
      <div className="fixed  bg-white w-screen h-screen top-0 left-0">
        <Navbar />
      </div>
      {/* <div className="ctas flex gap-8 items-center">
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
      </div> */}
    </nav>
  );
}

export default function Topbar() {
  return (
    <>
      <nav className="top-bar hidden py-5 border-b border-slate-600 md:flex justify-between items-center">
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
      <MobileTopbar />
    </>
  );
}
