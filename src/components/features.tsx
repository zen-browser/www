import Feature, { FeatureCard } from "./feature";
import { Button } from "./ui/button";
import TextReveal from "./ui/text-reveal";

export default function Features() {
  return (
    <div>
      <TextReveal text="Zen will change the way you browse the web. 🌟" />
      <Feature 
        title="Split Views" 
        description="View multiple tabs at once. Divide your screen into multiple views and browse multiple websites at the same time."
        color="#EEDBF9">
        <img src="/split-view.png" alt="Split Views" className="w-64 h-64 absolute left-1/2 top-1/2" style={{
          transform: "translate(-50%, -50%)"
        }} />
      </Feature>
      <Feature 
        title="Sidebar" 
        description="Access websites with ease. The sidebar allows you to quickly access your favorite websites without disrupting your browsing experience."
        color="#F5ED97">
        <img src="/sidebar.png" alt="Split Views" className="absolute left-1/2 top-1/2 w-4/5 rounded-lg overflow-hidden" style={{
          transform: "translate(-50%, -50%)"
        }} />
      </Feature>
      <Feature 
        title="Profiles"
        description="Switch between profiles with ease. Create multiple profiles to keep your work and personal browsing separate."
        color="#C2E3B7">
        <img src="/profiles.png" alt="Profiles" className="absolute left-1/2 w-3/4 top-1/2" style={{
          transform: "translate(-50%, -50%)"
        }} />
      </Feature>
      <div className="my-40 w-full flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center font-bold w-1/2">Want more?</h1>
        <p className="text-muted-foreground text-center mt-3 w-1/2">Zen is packed with features that will change the way you browse the web. Download it today and experience a new way to browse the web.</p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <FeatureCard title="Beautifully designed"
              description="Zen is designed to be easy to use and beautiful to look at." />
          <FeatureCard title="Customizable"
              description="Customize Zen to fit your needs. Change the theme, layout, and more." />
          <FeatureCard title="Workspaces"
              description="Create workspaces to keep your tabs organized." 
              todo />
          <FeatureCard title="Better new tab page"
              description="The new tab page in Zen is designed to help you get to your favorite websites faster." />
          <FeatureCard title="Tab groups"
              description="Organize your tabs into groups to keep your browsing experience organized."
              todo />
          <FeatureCard title="Vertical tabs"
              description="Keep your tabs organized with vertical tabs." />
        </div>
        <Button onClick={() => window.location.href = "/download"} className="mt-8">Download Zen Browser</Button>
      </div>
    </div>
  );
}
