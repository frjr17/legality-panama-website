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
            width={150}
            height={150}
            alt={"Legality logo"}
          />
          <div className="ctas flex gap-5 items-center">
            <div className="cart-container">
              <div className="cart-icon"></div>
              <span>Tu Carrito (0)</span>
            </div>
            <button className="py-4 px-7 bg-white/10">Agenda una Cita</button>
          </div>
        </div>
      </div>
    </div>
  );
}
