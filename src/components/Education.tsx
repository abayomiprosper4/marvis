import { motion, type Easing } from 'framer-motion'

const ease: Easing = [0.22, 1, 0.36, 1]
const viewport = { once: true, amount: 0.4 }

export function Education() {
  return <section className="mx-auto w-[calc(100%-72px)] max-w-7xl pb-31.25 max-[700px]:w-[calc(100%-36px)] max-[700px]:pb-20 cursor pointer">
    <motion.p className="mt-8 mb-23.75 font-mono text-[10px] tracking-[.02em] uppercase max-[700px]:mt-6.25 max-[700px]:mb-12.5" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5, ease }}>( 02 &mdash; Education )</motion.p>
    <motion.div className="grid grid-cols-[1fr_4fr_2fr_30px] items-center border-y border-[#c4c3bd] py-7 max-[700px]:grid-cols-[25px_1fr_20px] max-[700px]:gap-2" initial={{ opacity: 0, y: 32, scaleX: 0.47 }} whileInView={{ opacity: 1, y: 0, scaleX: 1 }} whileHover={{ x: 8, backgroundColor: '#ecebe5' }} viewport={viewport} transition={{ duration: 0.7, delay: 0.8, ease }}>
      <span className="font-mono text-[10px]">01</span><h3 className="m-0 text-[25px] font-medium tracking-tighter max-[700px]:text-[20px]">BSc, Computer Science</h3><p className="m-0 text-[#64635f] max-[700px]:col-start-2 max-[700px]:text-[11px]">Imo State University</p><motion.span className="max-[700px]:col-start-3 max-[700px]:row-start-1" whileHover={{ rotate: 45, scale: 1.15 }}></motion.span>
    </motion.div>
  </section>
}
