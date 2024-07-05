import Feature from "./feature";
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
        <img src="/sidebar.png" alt="Split Views" className="w-80 h-80 absolute right-0 top-0" style={{
          transform: "translate(5px, -5px)"
        }} />
      </Feature>
      <Feature 
        title="Profiles"
        description="Switch between profiles with ease. Create multiple profiles to keep your work and personal browsing separate."
        color="#8CE7C0">
        <>TODO</>
      </Feature>
    </div>
  );
}
