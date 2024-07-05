import { ny } from "@/lib/utils";

export default function Feature({
  title,
  description,
  children,
  color,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center relative mx-auto mt-32">
      <div
        className={"ml-32 flex flex-col justify-center max-w-96"}
      >
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-3">{description}</p>
      </div>
      <div className={ny(`ml-64 w-96 h-96 rounded-lg relative overflow-hidden`)} style={{ backgroundColor: color }}>
        {children}
      </div>  
    </div>
  );
}

