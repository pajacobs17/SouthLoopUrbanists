import { motion } from "motion/react";

import {
  MapPin
} from "lucide-react";

export default function EventCard({ when, what, where }){
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-4 rounded-2xl bg-white/95 border-2 border-black shadow-[3px_3px_0_0_#1c2b2d] list-none"
        >
            <div className="flex items-start gap-3">
            <div className="mt-1"><MapPin className="w-4 h-4"/></div>
            <div>
                <p className="text-sm font-semibold text-[#c5523f]">{when}</p>
                <p className="text-base font-bold">{what}</p>
                <p className="text-sm text-[#1c2b2d]">{where}</p>
            </div>
            </div>
        </motion.div>
    );
}