import { motion } from "motion/react";

export default function Pillar({ icon: Icon, title, blurb, badge }){
    return (
        <motion.div
            whileHover={{ rotate: -1.5, y: -2 }}
            className="relative p-5 pt-6 rounded-[28px] bg-white/95 border-2 border-black shadow-[4px_4px_0_0_#1c2b2d]"
        >
            <div className="absolute -top-3 -left-3">
            <span className="inline-flex items-center gap-1 text-xs font-bold tracking-wide uppercase bg-[#ffd166] border-2 border-black shadow-[2px_2px_0_0_#1c2b2d] rounded-full px-3 py-1">
                {badge}
            </span>
            </div>
            <div className="flex items-start gap-4">
            <div className="shrink-0">
                <div className="inline-flex p-3 rounded-2xl bg-[#c9f0e1] border-2 border-black shadow-[3px_3px_0_0_#1c2b2d]">
                <Icon className="w-6 h-6" />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-extrabold text-[#1c2b2d]">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#1c2b2d]">{blurb}</p>
            </div>
            </div>
        </motion.div>
    );
}