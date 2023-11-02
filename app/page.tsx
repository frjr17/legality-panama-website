import Image from "next/image";

export default function Home() {
  return (
    <div className="banner flex h-[30rem]">
      <div className="content flex flex-col gap-6 my-auto justify-center w-1/2 pr-40">
        <Image
          className="decor"
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
      <div className="w-1/2 flex justify-center items-end h-full">
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
