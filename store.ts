import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  mode:
    | "light"
    | "dark"
    | "cupcake"
    | "bumblebee"
    | "emerald"
    | "corporate"
    | "synthwave"
    | "retro"
    | "cyberpunk"
    | "valentine"
    | "halloween"
    | "garden"
    | "forest"
    | "aqua"
    | "lofi"
    | "pastel"
    | "fantasy"
    | "wireframe"
    | "black"
    | "luxury"
    | "dracula"
    | "cmyk"
    | "autumn"
    | "business"
    | "acid"
    | "lemonade"
    | "night"
    | "coffee"
    | "winter"
    | "dim"
    | "nord"
    | "sunset";
  toggleMode: (
    theme:
      | "light"
      | "dark"
      | "cupcake"
      | "bumblebee"
      | "emerald"
      | "corporate"
      | "synthwave"
      | "retro"
      | "cyberpunk"
      | "valentine"
      | "halloween"
      | "garden"
      | "forest"
      | "aqua"
      | "lofi"
      | "pastel"
      | "fantasy"
      | "wireframe"
      | "black"
      | "luxury"
      | "dracula"
      | "cmyk"
      | "autumn"
      | "business"
      | "acid"
      | "lemonade"
      | "night"
      | "coffee"
      | "winter"
      | "dim"
      | "nord"
      | "sunset"
  ) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "retro",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme-store" }
  )
);
