"use client";

import { useThemeStore } from "@/store";
import { ReactNode, useEffect, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        <body data-theme={themeStore.mode} className="scrollbar-thin scrollbar-track-primary-content scrollbar-thumb-accent">{children}</body>
      ) : (
        <body className="flex font-bold h-screen text-6xl items-center justify-center text-primary">
          <h1>Refresh Me</h1>
        </body>
      )}
    </>
  );
}
