import { LOGO_COLORS } from "@/lib/logos";

export function BrandingAssets() {
  return (
    <div className="flex flex-col w-full mx-auto p-5 lg:w-1/2 lg:p-0 items-center justify-center h-full mt-36">
      <div className="mx-auto w-full text-center">
        <h1 className="text-4xl lg:text-7xl font-bold">Branding Assets</h1>
        <p className="text-muted-foreground mt-2">Download Zen Browser branding assets for your website or project.</p>
      </div>
      <div className="flex w-full lg:w-2/3 flex-col mt-10">
        <h2 className="text-2xl font-bold mt-10">Logos</h2>
        <p className="text-muted-foreground mt-2">
          Download the Zen Browser logo in different colors.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 w-full">
          {LOGO_COLORS.map((color) => (
            <div key={color} className="flex flex-col items-center">
              <img src={`/logos/zen-${color}.svg`} alt={`Zen Browser ${color} logo`} className="w-24 h-24 mt-4" />
              <div className="flex items-center my-2">
                <a
                  href={`/logos/zen-${color}.svg`}
                  className="text-blue-500 text-md ml-2"
                >
                  {color}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full lg:w-2/3 flex-col mt-10">
        <h2 className="text-2xl font-bold mt-10">Empty Logos</h2>
        <p className="text-muted-foreground mt-2">
          Download the Zen Browser logo in different colors without a filled Zen letter.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 w-full">
          {LOGO_COLORS.map((color) => (
            <div key={color} className="flex flex-col items-center">
              <img src={`/logos/zen-alpha-${color}.svg`} alt={`Zen Browser ${color} logo`} className="w-24 h-24 mt-4" />
              <div className="flex items-center my-2">
                <a
                  href={`/logos/zen-alpha-${color}.svg`}
                  download={`zen-alpha-${color}.png`}
                  className="text-blue-500 text-md ml-2"
                >
                  {color}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold">License</h2>
        <p className="text-muted-foreground mt-2">
          All branding assets are licensed under the{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            CC BY-SA 4.0
          </a>
          . Thanks to <a href="https://www.onnno.nl/" className="text-blue-500">Donno (mr. Logos)</a> for the assets.
          <br />
          These logos however shall not be modified in a way that suggests the licensor endorses you or your use.
          <br />
          <br />
          You are free to share and adapt the assets for any purpose, even commercially.
        </p>
      </div>
    </div>
  );
}
