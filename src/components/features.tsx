
import { useEffect, useState } from "react";
import Feature, { FeatureCard } from "./feature";
import { Button } from "./ui/button";
import TextReveal from "./ui/text-reveal";
import styled, { css, keyframes } from "styled-components";

const profileColors = [
  "#e8cd7d",
  "#C2E3B7",
  "#EEDBF9",
];

const enterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    left: 100%;
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
  }
`;

const exitAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
  }

  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    left: 0;
  }
`;

const ProfileImage = styled.img<{ enter: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  animation: ${({ enter }: any) => enter ? css`${enterAnimation} 0.5s` : css`${exitAnimation} 0.5s`} forwards;
`;

export default function Features() {
  const [currentProfileColor, setCurrentProfileColor] = useState(profileColors[0]);
  const [profile1Enter, setProfile1Enter] = useState(false);
  const [profile2Enter, setProfile2Enter] = useState(false);
  const [profile3Enter, setProfile3Enter] = useState(false);

  useEffect(() => {
    let currentProfile = 0;
    setProfile1Enter(true);
    setCurrentProfileColor(profileColors[currentProfile]);
    
    const profiles = document.querySelectorAll("#profile-1, #profile-2, #profile-3");
    setInterval(() => {
      currentProfile = (currentProfile + 1) % profiles.length;
      setProfile1Enter(currentProfile === 0);
      setProfile2Enter(currentProfile === 1);
      setProfile3Enter(currentProfile === 2);
      setCurrentProfileColor(profileColors[currentProfile]);
    }, 2500);
  }, []);
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
        color={currentProfileColor}>
        <ProfileImage enter={profile1Enter} src="/profile-1.png" alt="Profiles" id="profile-1" className="absolute left-1/2 w-3/4 top-1/2" />
        <ProfileImage enter={profile2Enter} src="/profile-2.png" alt="Profiles" id="profile-2" className="absolute left-1/2 w-3/4 top-1/2" />
        <ProfileImage enter={profile3Enter} src="/profile-3.png" alt="Profiles" id="profile-3" className="absolute left-1/2 w-3/4 top-1/2" />
      </Feature>
      <div className="my-40 w-full flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center font-bold w-1/2">Want more?</h1>
        <p className="text-muted-foreground text-center mt-3 w-1/2">Zen Browser is packed with features that will change the way you browse the web. Download it today and experience a new way to browse the web.</p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <FeatureCard title="Beautifully designed"
              description="Zen is designed to be easy to use and beautiful to look at." />
          <FeatureCard title="Customizable"
              description="Customize Zen to fit your needs. Change the theme, layout, and more." />
          <FeatureCard title="Workspaces"
              description="Create workspaces to keep your tabs organized." />
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
