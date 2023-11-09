import Image from "next/image";

export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <div className="banner mt-[-50px] md:mt-10 flex items-center h-screen md:h-fit">
        <div
          className="background opacity-20 absolute top-0 left-0 w-screen h-screen z-[-1]"
          style={{
            background: "url(/images/banner-photo.png)",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="text-part flex flex-col gap-10 w-full text-center md:text-left md:w-1/2">
          <div className="decor hidden md:block">
            <Image
              src="/images/banner-decor.png"
              width={75}
              height={75}
              alt="Decor"
            />
          </div>
          <h1 className="text-4xl md:text-5xl w-full">
            Transformando <br className="hidden md:block" />
            Urgencias en <br className="hidden md:block" />
            Realidades Legales
          </h1>
          <p className="text-yellow-500 w-full mx-auto md:mx-0">
            Somos la solución legal integral para empresas y particulares en
            Panamá y más allá.
          </p>
          <button className="bg-yellow-500 text-lg md:text-xl w-fit mx-auto md:mx-0 font-bold text-daintree-950 px-7 py-4">
            Agenda tu cita con Nosotros
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
