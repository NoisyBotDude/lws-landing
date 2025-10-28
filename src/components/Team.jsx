import { motion } from 'framer-motion';
import { UserGroupIcon } from '@heroicons/react/24/outline';

const people = [
    { name: 'Alex Carter', role: 'Founder & CTO', img: '', accent: 'from-[#8B5CF6] to-purple-600', span: 'md:col-span-2 lg:col-span-3 lg:row-span-2' },
    { name: 'Maya Singh', role: 'Product Lead', img: '', accent: 'from-blue-500 to-cyan-500', span: 'md:col-span-1 lg:col-span-2' },
    { name: 'Diego Alvarez', role: 'Senior Engineer', img: '', accent: 'from-emerald-500 to-green-500', span: 'md:col-span-1 lg:col-span-2' },
    { name: 'Jin Park', role: 'AI Engineer', img: '', accent: 'from-indigo-500 to-blue-600', span: 'md:col-span-2 lg:col-span-3' },
    { name: 'Sara Lee', role: 'Operations', img: '', accent: 'from-rose-500 to-pink-500', span: 'md:col-span-1 lg:col-span-2' },
    { name: 'Omar Khan', role: 'Design', img: '', accent: 'from-amber-500 to-orange-500', span: 'md:col-span-1 lg:col-span-2' },
];

const PlaceholderImage = ({ label = 'Add image' }) => (
    <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-xl border border-dashed border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-gray-500">{label}</span>
        </div>
    </div>
);

const TeamCard = ({ person, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        whileHover={{ y: -6 }}
        className={`group relative ${person.span}`}
    >
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900 backdrop-blur-sm">
            {/* Hover wash */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(500px 200px at 20% 10%, rgba(139, 92, 246, 0.08), transparent 60%)' }} />

            {/* Image area */}
            <div className="relative aspect-[4/3] overflow-hidden">
                {person.img ? (
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                ) : (
                    <PlaceholderImage />
                )}

                {/* Accent gradient ring */}
                <div className={`pointer-events-none absolute -left-6 -top-6 w-28 h-28 rounded-full bg-gradient-to-br ${person.accent} opacity-20 blur-2xl`} />
            </div>

            {/* Meta */}
            <div className="relative px-4 py-4 flex items-center justify-between">
                <div>
                    <p className="text-white font-semibold leading-tight">{person.name}</p>
                    <p className="text-gray-400 text-sm">{person.role}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${person.accent} opacity-20 group-hover:opacity-40 transition-opacity`} />
            </div>
        </div>
    </motion.div>
);

export default function Team() {
    return (
        <section id="team" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
            <div className="absolute left-1/3 -top-10 w-80 h-80 rounded-full bg-[#8B5CF6]/5 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1 bg-gray-900 rounded-full text-gray-300 text-sm mb-6"
                    >
                        <UserGroupIcon className="w-4 h-4 text-[#8B5CF6]" />
                        Our Team
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Builders. Operators. Doers.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        A lean team with senior talent across product, engineering, AI and ops.
                    </motion.p>
                </div>

                {/* Collage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-6">
                    {people.map((p, i) => (
                        <TeamCard key={p.name} person={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
