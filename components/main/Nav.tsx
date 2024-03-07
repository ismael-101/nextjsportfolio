import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export default function Nav() {
  const links = [
    { path: "/", name: "home" },
    { path: "/about", name: "about" },
    { path: "/projects", name: "projects" },
    { path: "/contact", name: "contact" },
  ];

  const pathname = usePathname();
  const MotionLink = motion(Link);

  const useLinkMotion = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const textX = useTransform(x, (latest) => latest * 0.5);
    const textY = useTransform(y, (latest) => latest * 0.5);
    return { x, y, textX, textY };
  };

  return (
    <AnimatePresence mode="wait" >
      <motion.nav
        className="flex flex-col lg:flex-row"
        initial={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <ul className="flex flex-col lg:flex-row justify-center gap-10 select-none">
          {links.map((link) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { x, y, textX, textY } = useLinkMotion();
            return (
              <motion.li
                className=""
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  const bounds = item.getBoundingClientRect();
                  const relativeX = event.clientX - bounds.left;
                  const relativeY = event.clientY - bounds.top;
                  const xRange = (relativeX / bounds.width) * 2 - 1;
                  const yRange = (relativeY / bounds.height) * 2 - 1;
                  x.set(xRange * 10);
                  y.set(yRange * 10);
                }}
                key={link.path}
                onPointerLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={cn(
                    "relative rounded-md  text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-base-300",
                    pathname === link.path
                      ? "btn-sm btn-active btn-neutral hover:bg-blue-900"
                      : ""
                  )}
                  href={link.path}
                  scroll={false}
                >
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className="z-10 relative"
                  >
                    {link.name}
                  </motion.span>
                  {pathname === link.path && (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute w-full h-full rounded-md left-0 bottom-0 bg-neutral"
                    ></motion.div>
                  )}
                </MotionLink>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}
