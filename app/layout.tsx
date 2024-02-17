// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Nav from "../components/main/Nav";
// import Hydrate from "@/components/Hydrate";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ismael Ali",
//   description: "Ismael Ali is a web developer ",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <Hydrate>
//         <body className={`${inter.className}`}>
//           <Nav />
//           {children}
//         </body>
//       </Hydrate>
//     </html>
//   );
// }

"use client";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { metadata } from "@/components/Metadata";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/main/Nav";
import Hydrate from "@/components/Hydrate";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en">
      <Hydrate>
        <body className={`${inter.className}`}>
          <Nav />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            {children}
          </AnimatePresence>
        </body>
      </Hydrate>
    </html>
  );
}
