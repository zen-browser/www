"use client";

import { useEffect, useRef, useState } from "react";
import { NavigationMenuTrigger as OriginalNavigationMenuTrigger } from "./navigation-menu";

export default function NavigationMenuTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  // init disable state
  const [disable, setDisable] = useState(false);

  // init reference array
  const targetRef = useRef<HTMLButtonElement[]>([]);

  // Create observer on first render
  useEffect(() => {
    // Callback function
    const observerCallback = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        console.log(mutation.target);
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-state" &&
          (mutation.target as HTMLElement).dataset.state === "open"
        ) {
          setDisable(true);
          const timeout = setTimeout(() => {
            setDisable(false);
            clearTimeout(timeout);
          }, 1000);
        }
      }
    };

    // Init MutationObserver
    const observer = new MutationObserver(observerCallback);

    // Add ref nodes to observer watch
    targetRef.current.forEach((element) => {
      if (element) {
        observer.observe(element, {
          attributes: true,
        });
      }
    });

    // Disconnect on dismount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <OriginalNavigationMenuTrigger
      ref={(ref) => {
        if (ref) {
          targetRef.current[0] = ref;
        }
      }}
      onClick={(e) => {
        if (disable) {
          e.preventDefault();
        }
      }}
    >
      {children}
    </OriginalNavigationMenuTrigger>
  );
}
