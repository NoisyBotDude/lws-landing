import { motion } from 'framer-motion';
import { UserGroupIcon, CodeBracketIcon, ServerStackIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';
import { TEAM_CORE, TEAM_DEVELOPER, TEAM_MARKETING } from '../assets';

const people = [
    {
        name: 'Marketing & Design Team',
        img: TEAM_MARKETING,
        accent: 'from-[#8B5CF6] to-purple-600',
        icon: PresentationChartLineIcon,
        span: ''
    },
    {
        name: 'Core Team',
        img: TEAM_CORE,
        accent: 'from-blue-500 to-cyan-500',
        icon: CodeBracketIcon,
        span: ''
    },
    {
        name: 'Developer Team',
        img: TEAM_DEVELOPER,
        accent: 'from-emerald-500 to-green-500',
        icon: ServerStackIcon,
        span: ''
    }
];

const PlaceholderImage = ({ label = 'Add image' }) => (
    <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-xl border border-dashed border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-gray-500">{label}</span>
        </div>
    </div>
);

const TeamCard = ({ person, index }) => {
    const Icon = person.icon;
    return (
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
                        <img src={person.img} alt={person.name} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
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
                        {/* <p className="text-gray-400 text-sm">{person.role}</p> */}
                    </div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${person.accent} opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center`}>
                        {Icon ? <Icon className="w-5 h-5 text-white" /> : null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

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

                    {/* Collage Grid - three focused team tiles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {people.map((p, i) => (
                            <TeamCard key={p.name} person={p} index={i} />
                        ))}
                    </div>
            </div>
        </section>
    );
}
