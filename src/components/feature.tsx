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
    <div className="flex flex-col lg:flex-row lg:p-10 items-center relative mx-auto mt-40 pb-40 border-b">
      <div
        className={"flex flex-col justify-center max-w-96"}
      >
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-3">{description}</p>
      </div>
      <div className={ny(`mt-10 lg:ml-auto lg:mt-0 w-96 h-96 rounded-lg relative overflow-hidden transition-all duration-300`)} style={{ backgroundColor: color }}>
        {children}
      </div>  
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  todo = false,
}: {
  title: string;
  description: string;
  todo?: boolean;
}) {
  return (
    <div className="bg-background relative max-w-64 overflow-hidden rounded-lg border p-5 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1">
      <div className="text-md font-medium mb-5">
        {title}
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        {description}
      </div>
      {todo && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium p-1 rounded-bl-lg">
          Coming soon
        </div>
      )}
    </div>
  );
}

