import { motion, type Easing } from 'framer-motion'

const capabilities = ['Machine Learning', 'Management', 'Legal Aids', 'Caregiving']
const ease: Easing = [0.22, 1, 0.36, 1]
const viewport = { once: true, amount: 0.88 }

export function Capabilities() {
  return <section className="overflow-hidden bg-[#121212] py-26 text-[#f5f4f0] max-[700px]:py-17"><div className="mx-auto w-[calc(100%-72px)] max-w-7xl max-[700px]:w-[calc(100%-36px)]">
    <div className="flex justify-between border-b border-[#444] pb-16 max-[700px]:block max-[700px]:pb-9.25"><motion.p className="font-mono text-[10px] tracking-[.02em] uppercase" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ duration: 0.5, ease }}>( 03 &mdash; Capabilities )</motion.p><motion.p className="m-0 max-w-72.5 leading-[1.45] text-[#aaa] max-[700px]:mt-7.5" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ duration: 0.6, delay: 0.1, ease }}>A thoughtful blend of analytical, operational, and deeply human work.</motion.p></div>
    <div>{capabilities.map((skill, index) => <motion.div className="grid h-31.25 grid-cols-[1fr_4fr_30px] items-center border-b border-[#444] max-[700px]:h-21.5 max-[700px]:grid-cols-[34px_1fr_25px]" key={skill} initial="hidden" whileInView="visible" whileHover="hover" viewport={viewport} variants={{ hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: index * 0.1, ease } }, hover: { backgroundColor: '#1d1d1d', transition: { duration: 0.25 } } }}><span className="font-mono text-[10px] text-[#aaa]">0{index + 1}</span><motion.h3 className="m-0 font-display text-[clamp(34px,4.3vw,62px)] font-medium tracking-[-.06em]" variants={{ hover: { x: 14, transition: { type: 'spring', stiffness: 280, damping: 22 } } }}>{skill}</motion.h3><motion.span className="text-[28px] font-extralight text-[#b9d632]" variants={{ hover: { rotate: 90, scale: 1.25, transition: { type: 'spring', stiffness: 300, damping: 16 } } }}>+</motion.span></motion.div>)}</div>
  </div></section>
}
