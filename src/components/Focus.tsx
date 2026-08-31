import { motion, type Easing } from 'framer-motion'

const projects = [
  { number: '01', title: 'Legal Access', category: 'Legal aids / Systems thinking', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=85' },
  { number: '02', title: 'Care, considered', category: 'Caregiving / Human-centred service', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85' },
  { number: '03', title: 'Intelligent futures', category: 'Machine learning / Exploration', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=85' },
]
const ease: Easing = [0.22, 1, 0.36, 1]
const viewport = { once: true, amount: 0.2 }

export function Focus() {
  return <section className="mx-auto w-[calc(100%-72px)] max-w-7xl py-32.5 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-20" id="focus">
    <div className="mb-14.5 grid grid-cols-[1fr_1.4fr_1fr] items-end max-[700px]:mb-10 max-[700px]:block"><motion.p className="font-mono text-[10px] tracking-[.02em] uppercase" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5, ease }}>( 04 &mdash; Selected focus )</motion.p><motion.h2 className="m-0 font-display text-[clamp(48px,6vw,89px)] leading-[.93] font-medium tracking-[-.06em] max-[700px]:my-8.25" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.75, delay: 0.08, ease }}>Work with<br /><em className="font-medium">purpose.</em></motion.h2><motion.p className="m-0 max-w-57.5 text-[12px] leading-[1.4] max-[700px]:max-w-70" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.6, delay: 0.18, ease }}>Experiences that connect rigorous thinking with real human needs.</motion.p></div>
    <div className="grid grid-cols-3 gap-4.5 max-[700px]:grid-cols-1 max-[700px]:gap-8.75">{projects.map((project, index) => <motion.article className="group" key={project.title} initial="hidden" whileInView="visible" whileHover="hover" viewport={viewport} variants={{ hidden: { opacity: 0, y: 52 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: index * 0.13, ease } }, hover: { y: -10, transition: { type: 'spring', stiffness: 260, damping: 22 } } }}>
      <div className={`relative h-96.25 overflow-hidden bg-[#d7d5cd] ${project.number === '02' ? 'mt-18.75 max-[700px]:mt-0' : ''} max-[700px]:h-80`}><motion.img className="size-full object-cover saturate-[.65]" src={project.image} alt="" variants={{ hover: { scale: 1.09, rotate: 1, transition: { duration: 0.7, ease } } }} /><motion.span className="absolute top-3.5 left-3.75 grid size-7.5 place-items-center rounded-full bg-[#f5f4f0] font-mono text-[9px]" variants={{ hover: { scale: 1.18, rotate: -10 } }}>{project.number}</motion.span></div><p className="mt-3.75 mb-2 font-mono text-[9px] uppercase text-[#666]">{project.category}</p><div className="flex justify-between border-t border-[#c4c3bd] pt-2.5"><h3 className="m-0 text-[20px] font-medium tracking-[-.04em]">{project.title}</h3><motion.span variants={{ hover: { x: 5, y: -5, transition: { type: 'spring', stiffness: 350, damping: 18 } } }}>&nearr;</motion.span></div>
    </motion.article>)}</div>
  </section>
}
