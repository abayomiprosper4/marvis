import { Arrow } from './Arrow'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const shell = 'mx-auto w-[calc(100%-72px)] max-w-[1280px] max-[700px]:w-[calc(100%-36px)]'
const name = 'Chidera Marvis'

export function Hero() {
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    let characterIndex = 0
    let typingTimer: number | undefined
    const startTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        characterIndex += 1
        setTypedName(name.slice(0, characterIndex))

        if (characterIndex === name.length) {
          window.clearInterval(typingTimer)
        }
      }, 190)
    }, 390)

    return () => {
      window.clearTimeout(startTimer)
      if (typingTimer) window.clearInterval(typingTimer)
    }
  }, [])

  const [firstName = '', lastName = ''] = typedName.split(' ')

  return <section className={`${shell} min-h-165 max-[700px]:min-h-147.5`} id="top">
    <p className="mt-18 mb-8.5 flex items-center gap-3 font-mono text-[10px] tracking-[.02em] uppercase max-[700px]:mt-10.5">hello, <span className="h-px w-12 bg-[#222]" /> my name is</p>
    <div className="flex items-end justify-between max-[700px]:flex-wrap">
      <motion.h1
        className="m-0 font-display text-[clamp(100px,15vw,225px)] leading-[.72] font-medium tracking-[-.075em] max-[700px]:text-[25vw] max-[700px]:leading-[.8]"
        initial={{ opacity: 0, x: -56 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      ><span aria-hidden="true">{firstName}</span><br /><em className="font-medium" aria-hidden="true">{lastName}</em><span className="sr-only">{name}</span></motion.h1>
      <motion.div
        className="mb-0.75 flex items-end gap-12.25 max-[700px]:mt-10 max-[700px]:gap-3"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.65, delay: 2.48, ease: [0.22, 1, 0.36, 1] }}
      ><p className="m-0 text-[13px] leading-[1.45] text-[#3a3936] max-[700px]:text-[11px]">Legal mind. Human focus.<br />Ready for what&apos;s next.</p><motion.a href="#about" className="grid size-13 place-items-center rounded-full border border-[#111] text-inherit max-[700px]:size-10.5 hover:bg-black hover:text-white" aria-label="Explore portfolio" initial="rest" animate="rest" whileHover="hover" whileTap={{ scale: 0.96 }} variants={{ rest: { y: 0, scale: 1 }, hover: { y: -1, scale: 1.38 } }} transition={{ type: 'spring', stiffness: 500, damping: 18 }}><motion.span className="block" variants={{ rest: {x: 0 }, hover: {x: 0.1} }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}><Arrow /></motion.span></motion.a></motion.div>
    </div>
    <motion.div
      className="mt-26.5 flex justify-between border-t border-[#cfcfc9] pt-3.5 max-[700px]:mt-18.75"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, delay: 2.94, ease: [0.22, 1, 0.36, 1] }}
    ><p className="m-0 max-w-82.5 text-[12px] leading-[1.4]">Building thoughtful systems at the intersection of law, care, management, and machine intelligence.</p><p className="m-0 font-mono flex items-center text-[6px] sm:text-[10px] leading-[1.4] uppercase animate-bounce"><span className="mr-1.5 text-[15px]">&darr;</span>Scroll to explore</p></motion.div>
  </section>
}
