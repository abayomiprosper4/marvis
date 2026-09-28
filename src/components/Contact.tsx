import { motion, type Easing } from "framer-motion";
import { Arrow } from "./Arrow";

const ease: Easing = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.25 };

type SocialPlatform =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "twitter"
  | "whatsapp";

const socials: { name: string; href: string; platform: SocialPlatform }[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    platform: "instagram",
  },
  { name: "Facebook", href: "https://www.facebook.com/", platform: "facebook" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", platform: "linkedin" },
  { name: "Twitter", href: "https://x.com/", platform: "twitter" },
  { name: "WhatsApp", href: "https://www.whatsapp.com/", platform: "whatsapp" },
];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const iconClass = "size-4";

  switch (platform) {
    case "instagram":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.6V3.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10H8.2v3h2.6v8h2.9Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.2 8.2H3.3V21h2.9V8.2ZM4.8 3A1.8 1.8 0 1 0 4.8 6.6 1.8 1.8 0 0 0 4.8 3ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.7H9.7V21h2.9v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V21H21v-7.3Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.9 2.8h3.7l-8.1 9.3L24 21.2h-7.4l-5.8-7.1-6.2 7.1H.9l8.7-9.9L.5 2.8h7.6l5.2 6.4 5.6-6.4Zm-1.3 16.2h2L7 4.8H4.9L17.6 19Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M20.5 11.4a8.4 8.4 0 0 1-12.4 7.4L3.5 20l1.2-4.3a8.4 8.4 0 1 1 15.8-4.3Z" />
          <path
            d="M9 7.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.6 1.2 1.6 2.1 2.8 2.7l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.5.7-.5.2-1 .4-1.6.3-2.7-.4-5.5-3.2-5.9-5.9-.1-.6 0-1.1.3-1.6Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
  }
}

export function Contact() {
  return (
    <footer
      className="relative overflow-hidden bg-[#111] py-22.25 pb-6.25 text-[#f6f5f0]"
      id="contact"
    >
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/2 size-120 rounded-full border border-[#cf933a]/30"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7, rotate: -25 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={viewport}
        transition={{ duration: 1.1, ease }}
        animate={{ y: [0, -18, 0] }}
      />
      <div className="relative z-10 mx-auto w-[calc(100%-72px)] max-w-7xl max-[700px]:w-[calc(100%-36px)]">
        <motion.p
          className="font-mono text-[10px] tracking-[.02em] uppercase"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
        >
          ( 06 &mdash; Contact )
        </motion.p>
        <div className="mt-16.5 mb-24.5 max-[700px]:mt-12 max-[700px]:mb-17.5">
          <motion.p
            className="mt-0 mb-3 text-[#aaa]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            Have a project, opportunity, or idea?
          </motion.p>
          <div className="flex items-end justify-between gap-8 max-[700px]:flex-col max-[700px]:items-start">
            <motion.h2
              className="m-0 font-display text-[clamp(65px,10vw,142px)] leading-[.93] font-medium tracking-[-.06em] max-[700px]:text-[18vw]"
              initial={{ opacity: 0, y: 68 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, delay: 0.12, ease }}
            >
              Let&apos;s make
              <br />
              <em className="font-medium">contact.</em>
            </motion.h2>
            <motion.nav
              className="flex gap-2.5 max-[700px]:mb-2"
              aria-label="Social links"
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.32, ease }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-[#5b5b5b] text-[#f6f5f0] transition-colors hover:border-[#cf933a] hover:text-white"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.1, rotate: index % 2 ? -6 : 6 }}
                  whileTap={{ scale: 0.92 }}
                  viewport={viewport}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 18,
                    delay: 0.4 + index * 0.06,
                  }}
                >
                  <SocialIcon platform={social.platform} />
                </motion.a>
              ))}
            </motion.nav>
          </div>
          <motion.a
            href="mailto:hello@chideramarvis.com"
            className="group relative isolate mt-10 inline-flex items-center gap-5 overflow-hidden px-5 py-3 text-[16px] text-inherit no-underline transition-colors duration-500 hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.32, ease }}
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#774c0c] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            magbethmarvis@gmail.com{" "}
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              <Arrow />
            </span>
          </motion.a>
        </div>
        <motion.div
          className="flex justify-between border-t border-[#474747] pt-4.5 font-mono text-[10px] text-[#969696] max-[700px]:flex-col max-[700px]:gap-4.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <span>&copy; 2026 Chidera Marvis</span>
          <div className="flex gap-6.25">
            <a className="transition-colors hover:text-[#f6f5f0]" href="#top">
              Back to top &uarr;
            </a>
            <a
              className="transition-colors hover:text-[#f6f5f0]"
              href="mailto:hello@chideramarvis.com"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
