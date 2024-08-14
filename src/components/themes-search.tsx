import { SearchIcon } from "lucide-react";

export default function ThemesSearch({
  input, setInput
}: {
  input: string;
  setInput: (input: string) => void;
}) {
  return (
    <div className="flex w-full p-2 bg-muted/50 rounded-full mt-10 items-center border border-muted">
      <SearchIcon className="w-6 h-6 mx-4 text-muted" />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search themes"
        className="w-full bg-transparent border-none focus:outline-none focus:border-none focus:ring-0 text-white placeholder-muted"
      />
    </div>
  );
}
