import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.nav
      className="mx-auto flex h-18 w-[calc(100%-72px)] max-w-7xl items-center justify-between border-b border-[#d9d8d3] text-[11px] max-[700px]:h-15 max-[700px]:w-[calc(100%-36px)]"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#top"
        className="text-[21px] font-semibold tracking-[-1.5px] text-inherit no-underline"
      >
        CM<span className="ml-px align-top text-[7px]">&reg;</span>
      </a>
      <div className="ml-36.25 flex gap-7.25 max-[700px]:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative inline-block pb-1 text-inherit no-underline"
          >
            {link.label}
            <span className="absolute bottom-0.5 left-0 h-0.5 w-0 bg-[#cf933a] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
      <a
        className="flex items-center gap-1.75 text-inherit no-underline max-[700px]:text-[9px]"
        href="mailto:hello@chideramarvis.com"
      >
        <i className="size-1.75 rounded-full bg-[#bbd83e]" /> Available for
        opportunities
      </a>
    </motion.nav>
  );
}
