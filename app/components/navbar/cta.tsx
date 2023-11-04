import Image from "next/image";
import Link from "next/link";

export interface ICTAProps {
  ctaRef?: string;
  iconUrl: string;
  alt: string;
  label: string;
  text: string;
}

function Component(props: ICTAProps) {
  return (
    <div className="cta cursor-pointer flex gap-2">
      <Image
        src={props.iconUrl}
        className="icon"
        width={50}
        height={50}
        alt={props.alt}
      />
      <div className="cta-content ">
        <span className="label text-yellow-500 text-sm ">{props.label}</span>
        <p className="text leading-none text-lg">{props.text}</p>
      </div>
    </div>
  );
}

export default function CTA(props: ICTAProps) {
  return props.ctaRef ? (
    <Link href={props.ctaRef}>
      <Component {...props} />
    </Link>
  ) : (
    <Component {...props} />
  );
}
