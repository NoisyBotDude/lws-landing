import { motion } from 'framer-motion';

export default function OptionTile({ opt, isSelected, isPending, onClick, variant = 'single' }) {
    const baseClass = variant === 'single' ? 'w-full text-left px-4 py-3 sm:px-5 sm:py-5 rounded-lg' : 'px-3 py-3 sm:px-4 sm:py-4 rounded-lg';
    const stateClass = isSelected || isPending ? 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-lg' : 'bg-gray-900 text-gray-200 hover:bg-gray-800';

    return (
        <motion.button
            onClick={onClick}
            whileTap={{ scale: 0.985 }}
            className={`${baseClass} transition-all duration-200 flex items-center justify-between ${stateClass}`}
        >
            <div className="flex items-center gap-3">
                <div className="shrink-0">{opt.icon}</div>
                <div className="text-sm sm:text-base font-medium">{opt.label}</div>
            </div>
            {(isSelected || isPending) && (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            )}
        </motion.button>
    );
}
