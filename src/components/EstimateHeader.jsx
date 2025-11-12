import { motion } from 'framer-motion';

export default function EstimateHeader({ title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl font-bold sm:text-4xl gradient-text">{title}</h2>
            <p className="mt-4 text-lg text-gray-300">{subtitle}</p>
        </motion.div>
    );
}
