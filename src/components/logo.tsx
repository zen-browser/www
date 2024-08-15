import Image from "next/image";
export default function Logo({ withText, ...props }: any) {
  return (
    <div className="flex items-center m-0" {...props}>
      <Image src="/logo.png" alt="Zen Logo" width={50} height={50} />
      {withText && <span className="text-2xl font-bold ml-2">Zen</span>}
    </div>
  );
}
