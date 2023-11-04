import Image from "next/image";

export interface ICTAProps {
  attributes?: any;
  iconUrl: string;
  alt: string;
  label: string;
  text: string;
}

export default function CTA(props: ICTAProps) {
  return (
    <div {...props.attributes} className="cta cursor-pointer flex gap-2">
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
