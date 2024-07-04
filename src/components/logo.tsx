
export default function Logo({ withText, ...props }: any) {
  return (
    <div className="flex items-center m-0" {...props}>
      <img src="/logo.png" alt="Zen Logo" className="w-12 h-12" />
      {withText && <span className="text-2xl font-bold ml-2">Zen</span>}
    </div>
  );
}
