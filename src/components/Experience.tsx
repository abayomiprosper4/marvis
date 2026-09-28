import { motion, type Easing } from "framer-motion";

const ease: Easing = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.3 };

export function Experience() {
  return (
    <section
      className="overflow-hidden bg-[#885812] py-28 max-[700px]:py-18"
      id="experience"
    >
      <div className="text-white mx-auto grid w-[calc(100%-72px)] max-w-7xl grid-cols-[1fr_2fr_1fr] max-[700px]:w-[calc(100%-36px)] max-[700px]:grid-cols-1 max-[700px]:gap-11">
        <motion.p
          className="font-mono text-[10px] tracking-[.02em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
        >
          ( 05 &mdash; Experience )
        </motion.p>
        <div>
          <motion.p
            className="mt-0 mb-5.5 font-mono text-[10px] uppercase"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.05, ease }}
          >
            Current chapter
          </motion.p>
          <motion.h2
            className="m-0 font-display text-[clamp(48px,6vw,89px)] leading-[.93] font-medium tracking-[-.06em]"
            initial={{ opacity: 0, scale: 0.92, y: 38 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewport}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.1,
            }}
          >
            NitHub
            <br />
            <em className="font-medium">UNILAG</em>
          </motion.h2>
          <motion.p
            className="mt-10.5 mb-0 max-w-75 leading-normal"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.28, ease }}
          >
            Contributing to an ecosystem where innovation, collaboration, and
            new ideas are given room to move.
          </motion.p>
        </div>
        <motion.div
          className="justify-self-end text-right font-mono text-[12px] max-[700px]:-mt-3.75 max-[700px]:justify-self-start max-[700px]:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.22, ease }}
        >
          2026
          <br />
          <span className="text-[#c0d056]">&mdash; Present</span>
        </motion.div>
      </div>
    </section>
  );
}
