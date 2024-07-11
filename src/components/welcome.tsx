"use client";

import WordPullUp from "./ui/word-pull-up";

export default function WelcomePage() {
  return (
    <div className="w-full relative min-h-screen flex flex-col items-center justify-center">
      <WordPullUp className="text-6xl text-center" words="Welcome to Zen Browser!" />
      <p className="max-w-90 text-lg mt-12">A Firefox based browser with a focus on privacy and customization.<br/>Start using it by clicking on the sidebar icon or trying out the split view feature!</p>
    </div>
  );
}
