import { motion, type Easing } from 'framer-motion'
import { Arrow } from './Arrow'

const ease: Easing = [0.22, 1, 0.36, 1]
const viewport = { once: true, amount: 0.85 }

export function AboutMe() {
  return <motion.section className="bg-[#deddd6] py-28 max-[700px]:py-17.5" id="about">
    <div className="mx-auto grid w-[calc(100%-72px)] max-w-7xl grid-cols-[1fr_2fr] gap-5 max-[700px]:w-[calc(100%-36px)] max-[700px]:grid-cols-1 max-[700px]:gap-11">
      <motion.p className="font-mono text-[10px] tracking-[.02em] uppercase" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.55, ease }}>( 01 &mdash; About me )</motion.p>
      <div>
        <motion.h2 className="m-0 font-display text-[clamp(48px,6vw,89px)] leading-[.93] font-medium tracking-[-.06em]" initial={{ opacity: 0, y: 56 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.85, delay: 0.28, ease }}>I bring <motion.em className="inline-block font-medium" initial={{ rotate: 4, y: 10 }} whileInView={{ rotate: 0, y: 0 }} viewport={viewport} transition={{ duration: 0.9, delay: 0.45, ease }}>clarity</motion.em><br />to complex work.</motion.h2>
        <motion.p className="mt-12 mb-7.5 max-w-130 text-[18px] leading-[1.45] max-[700px]:mt-7.75 max-[700px]:text-[16px]" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.65, delay: 0.24, ease }}>I&apos;m Chidera Marvis, a multidisciplinary professional with a foundation in law and a practical interest in people, operations, and emerging technology. I care about making useful things feel more considered.</motion.p>
        <motion.a href="#contact" className="group relative isolate inline-flex items-center gap-3.5 overflow-hidden px-5 py-3 font-medium text-inherit no-underline transition-colors duration-500 hover:text-[#f5f4f0]" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ x: 7 }} whileTap={{ scale: 0.97 }} viewport={viewport} transition={{ duration: 0.45, delay: 0.58, ease }}><span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#774c0c] transition-transform duration-500 ease-out group-hover:scale-x-100" />Let&apos;s work together <span className="transition-transform duration-500 group-hover:translate-x-1"><Arrow /></span></motion.a>
      </div>
    </div>
  </motion.section>
}
