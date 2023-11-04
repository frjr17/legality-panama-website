import Image from "next/image";

export default function Home() {
  return (
    <div className="banner flex h-screen md:h-[30rem]">
      <div className="content flex flex-col md:gap-6 gap-12 my-auto mdjustify-center md:items-start items-center w-full md:w-1/2 text-center md:pr-40">
        <Image
          className="decor hidden md:block"
          src={"/images/banner-decor.png"}
          width={75}
          height={75}
          alt={"banner decor"}
        />
        <h1 className="text-5xl">
          Transformando <br /> Urgencias en <br /> Realidades Legales
        </h1>
        <p>
          Somos la solución legal integral para empresas y particulares en
          Panamá y más allá.
        </p>
        <button className="bg-yellow-500 p-6 text-daintree-950 w-5/6 font-bold">
          Agenda tu Cita con Nosotros
        </button>
      </div>
      <div className="w-1/2 hidden md:flex justify-center items-end h-full">
        <Image
          className="decor w-fit h-fit"
          src={"/images/banner-decor.png"}
          width={75}
          height={75}
          alt={"banner decor"}
        />
      </div>
    </div>
  );
}
