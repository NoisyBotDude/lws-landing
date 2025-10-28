import React, { useEffect, useState, useRef, useCallback } from 'react'
import { client } from '../config/sanityClient';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(false);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const debounceRef = useRef(null)
    const PAGE_SIZE = 9

    const fetchPage = useCallback(async ({ append = false, term = searchTerm, startFrom = offset } = {}) => {
        append ? setLoadingMore(true) : setLoading(true)
        try {
            const end = startFrom + PAGE_SIZE - 1
            const params = {
                q: term && term.trim() !== '' ? `${term.trim()}*` : '',
                offset: startFrom,
                end,
            }

            const query = `{
                "items": *[_type == "post" && ($q == '' || title match $q || excerpt match $q)]
                    | order(publishedAt desc) [$offset...$end]{
                        title,
                        "slug": slug.current,
                        mainImage{asset->{url}},
                        publishedAt,
                        excerpt
                    },
                "total": count(*[_type == "post" && ($q == '' || title match $q || excerpt match $q)])
            }`

            const { items, total } = await client.fetch(query, params)

            setPosts(prev => {
                const next = append ? [...prev, ...items] : items
                const map = new Map()
                for (const p of next) map.set(p.slug, p)
                return Array.from(map.values())
            })

            setOffset(startFrom + items.length)
            setTotal(total)
            setHasMore(startFrom + items.length < total)
        } catch (err) {
            console.error(err)
        } finally {
            append ? setLoadingMore(false) : setLoading(false)
        }
    }, [offset, searchTerm])

    useEffect(() => {
        fetchPage({ append: false, startFrom: 0 })
    }, [])

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            setOffset(0)
            setHasMore(true)
            fetchPage({ append: false, term: searchTerm, startFrom: 0 })
        }, 400)
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current)
        }
    }, [searchTerm, fetchPage])

    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="stars-container">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
            </div>

            <div
                className="absolute left-1/2 top-1/4 w-[600px] h-[600px] rounded-full -z-5"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: 'translate(-50%, -50%)',
                }}
            />

            <div className="container mx-auto px-4 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-[#8B5CF6]">Blog</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Insights, tutorials, and updates from our team
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-16"
                >
                    <div className="relative">
                        <MagnifyingGlassIcon aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] transition-all duration-300"
                        />
                    </div>
                </motion.div>

                {loading && posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 border-4 border-[#8B5CF6] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-400 text-lg">Loading...</p>
                    </motion.div>
                )}

                {posts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link to={`/blogs/blog/${post.slug}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                        }}
                                    >
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-transparent to-transparent" />
                                        </div>

                                        {post.mainImage?.asset?.url && (
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={post.mainImage.asset.url}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            </div>
                                        )}

                                        <div className="relative p-6">
                                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors duration-300">
                                                {post.title}
                                            </h3>

                                            {post.excerpt && (
                                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            )}

                                            <div className="flex items-center justify-between">
                                                <p className="text-gray-500 text-sm">
                                                    {new Date(post.publishedAt).toLocaleDateString(
                                                        'en-US',
                                                        { year: 'numeric', month: 'short', day: 'numeric' }
                                                    )}
                                                </p>
                                                <span className="text-[#8B5CF6] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Read more →
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}

                {!loading && posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-gray-400 text-lg">
                            {searchTerm
                                ? `No articles found matching "${searchTerm}"`
                                : 'No blog posts available yet. Check back soon!'}
                        </p>
                    </motion.div>
                )}

                {!loading && posts.length > 0 && hasMore && (
                    <div className="flex justify-center py-10">
                        <button
                            type="button"
                            onClick={() => fetchPage({ append: true, startFrom: offset })}
                            disabled={loadingMore}
                            className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                        >
                            {loadingMore ? (
                                <span className="inline-flex items-center gap-2">
                                    <span className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></span>
                                    Loading more...
                                </span>
                            ) : (
                                'Load more'
                            )}
                        </button>
                    </div>
                )}
                {!loading && !loadingMore && !hasMore && posts.length > 0 && (
                    <p className="text-center text-gray-500 py-8">You've reached the end.</p>
                )}
            </div>
        </section>
    )
}
