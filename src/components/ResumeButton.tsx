import { Arrow } from "./Arrow";

export function ResumeButton() {
  return (
    <a
      href="/Marvis%20Resume..pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="Open resume PDF in a new tab"
      className="resume-button group relative isolate inline-flex h-12 items-center gap-5 overflow-hidden border border-current px-4 font-mono text-[13px] tracking-[.08em] text-inherit uppercase no-underline transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cf933a]"
    >
      <span className="absolute inset-0 z-0 -translate-x-full bg-[#925f13] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-focus-visible:translate-x-0 motion-reduce:transition-none" />
      <span className="relative z-10 pl-5">Resume</span>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
        <Arrow />
      </span>
    </a>
  );
}
