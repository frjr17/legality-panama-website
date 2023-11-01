import Image from "next/image";

export default function Home() {
  return (
    <div
      className="banner h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/banner-photo.png)" }}
    >
      <div className="container mx-auto bg-daintree-950/80 h-screen px-10">
        <div className="top-bar py-5 border-b border-slate-600 flex justify-between items-center">
          <Image
            src={"/svg/logo-gold.svg"}
            width={200}
            height={200}
            alt={"Legality logo"}
          />
          <div className="ctas flex gap-8 items-center">
            <div className="cart-container flex items-center gap-3">
              <Image
                src={"/images/CartIcon.png"}
                width={30}
                height={30}
                alt={"CartIcon"}
              />
              <span>Tu Carrito (0)</span>
            </div>
            <button className="py-6 px-8 bg-white/10">Agenda una Cita</button>
          </div>
        </div>
      </div>
    </div>
  );
}
