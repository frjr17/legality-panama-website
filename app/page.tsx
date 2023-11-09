import Image from "next/image";

export default function Home() {
  return (
    <div className="md:container  md:mx-auto">
      <div className="banner pt-[205px] flex items-center h-screen">
        <div
          className="background opacity-20 absolute top-0 left-0 w-full h-screen z-[-1]"
          style={{
            background: "url(/images/banner-photo.png)",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="text-part flex flex-col gap-10 w-full h-full justify-center text-center lg:text-left lg:w-1/2">
          <div className="decor hidden lg:block">
            <Image
              src="/images/banner-decor.png"
              width={75}
              height={75}
              alt="Decor"
            />
          </div>
          <h1 className="text-4xl md:text-5xl w-full">
            Transformando <br className="hidden lg:block" />
            Urgencias en <br className="hidden lg:block" />
            Realidades Legales
          </h1>
          <p className="text-yellow-500 w-full mx-auto md:mx-0">
            Somos la solución legal integral para empresas y particulares en
            Panamá y más allá.
          </p>
          <button className="bg-yellow-500 text-lg md:text-xl w-fit mx-auto lg:mx-0 font-bold text-daintree-950 px-7 py-4">
            Agenda tu cita con Nosotros
          </button>
        </div>
        <div className="image-part hidden lg:flex h-full items-end justify-center w-full md:w-1/2">
          <Image
            className=""
            src="/images/banner-person.png"
            width={475}
            height={475}
            alt="Decor"
          />
        </div>
      </div>
      <div className="about h-screen  pt-[205px]  flex gap-10 md:container md:mx-auto justify-center items-center">
        <div className="pictures w-1/3 flex flex-col justify-center gap-16">
          <Image
            className=""
            src="/images/about-1.png"
            width={375}
            height={475}
            alt="Decor"
          />
          <Image
            src="/images/about-2.png"
            width={375}
            height={375}
            alt="Decor"
          />
        </div>
        <div className="content w-1/2 flex flex-col h-full gap-10 justify-center">
          <div className="title">
            <h1 className="text-3xl mb-5">
              Un Servicio excepcional en una amplia gama de Trámites Legales
            </h1>
            <Image
              src="/images/banner-decor.png"
              width={75}
              height={75}
              alt="Decor"
            />
          </div>
          <p className="">
            Queremos ser reconocidos como el destino número uno para aquellos
            que buscan soluciones legales rápidas y confiables, respaldadas por
            un equipo de expertos en derecho y mediación de conflictos. Nuestra
            misión es facilitar el camino hacia el éxito empresarial y la
            resolución efectiva de disputas, impulsando el crecimiento de Panamá
            y sirviendo como puente hacia oportunidades legales sin igual.
          </p>
          <div className="author flex gap-5 items-center">
            <div className="circle w-10 h-10 bg-red-500 rounded-full"></div>
            <h3 className="text-3xl">Lineth A. Domínguez</h3>
          </div>
          <div className="banners flex gap-10">
            <div className="w-52 h-16 bg-yellow-500"></div>
            <div className="w-52 h-16 bg-yellow-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
