import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client } from '../config/sanityClient'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        client
            .fetch(`*[_type == "post" && slug.current == $slug][0]{
                title,
                mainImage{asset->{url}},
                body,
                publishedAt,
                author->{name, image{asset->{url}}},
                categories[]->{title}
            }`, { slug })
            .then((data) => {
                setPost(data)
                if (data?.body) {
                    const wordCount = JSON.stringify(data.body).split(/\s+/).length
                    setReadingTime(Math.ceil(wordCount / 200))
                }
            })
            .catch(console.error)
    }, [slug]);

    const portableTextComponents = {
        block: {
            h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-5">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">{children}</h3>,
            h4: ({ children }) => <h4 className="text-lg md:text-xl font-semibold text-white mt-6 mb-3">{children}</h4>,
            normal: ({ children }) => <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">{children}</p>,
            blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#8B5CF6] pl-6 py-2 my-8 italic text-gray-400 bg-white/5 rounded-r-lg">
                    {children}
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 ml-4">{children}</ul>,
            number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300 ml-4">{children}</ol>,
        },
        listItem: {
            bullet: ({ children }) => <li className="text-gray-300 leading-relaxed">{children}</li>,
            number: ({ children }) => <li className="text-gray-300 leading-relaxed">{children}</li>,
        },
        marks: {
            strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
            em: ({ children }) => <em className="italic text-gray-200">{children}</em>,
            code: ({ children }) => (
                <code className="bg-[#8B5CF6]/20 text-[#8B5CF6] px-2 py-1 rounded text-sm font-mono">
                    {children}
                </code>
            ),
            link: ({ children, value }) => (
                <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B5CF6] hover:text-[#7C3AED] underline transition-colors"
                >
                    {children}
                </a>
            ),
        },
        types: {
            code: ({ value }) => (
                <pre className="bg-gray-900 border border-white/10 rounded-lg p-4 overflow-x-auto mb-6">
                    <code className="text-gray-300 text-sm font-mono">{value.code}</code>
                </pre>
            ),
            image: ({ value }) => (
                <div className="my-8 rounded-lg overflow-hidden">
                    <img
                        src={value?.asset?.url}
                        alt={value?.alt || 'Blog image'}
                        className="w-full h-auto"
                    />
                    {value?.caption && (
                        <p className="text-center text-gray-400 text-sm mt-2 italic">{value.caption}</p>
                    )}
                </div>
            ),
        },
    }

    if (!post) {
        return (
            <div className="relative min-h-screen bg-black flex items-center justify-center">
                <div className="absolute inset-0 -z-10">
                    <div className="stars-container">
                        <div id="stars"></div>
                        <div id="stars2"></div>
                        <div id="stars3"></div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <div className="w-16 h-16 border-4 border-[#8B5CF6] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg">Loading blog...</p>
                </motion.div>
            </div>
        )
    }

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
                className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full -z-5"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: 'translate(20%, -20%)',
                }}
            />

            <div className="container mx-auto px-4 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        to={-1}
                        className="inline-flex items-center text-gray-400 hover:text-[#8B5CF6] transition-colors"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to all articles
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-medium bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full border border-[#8B5CF6]/30"
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5" />
                            <span>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                        {readingTime > 0 && (
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-5 h-5" />
                                <span>{readingTime} min read</span>
                            </div>
                        )}
                        {post.author && (
                            <div className="flex items-center gap-2">
                                {post.author.image?.asset?.url && (
                                    <img
                                        src={post.author.image.asset.url}
                                        alt={post.author.name}
                                        className="w-6 h-6 rounded-full"
                                    />
                                )}
                                <span>By {post.author.name}</span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {post.mainImage?.asset?.url && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-5xl mx-auto mb-16"
                    >
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.title}
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>
                )}

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <div
                        className="prose prose-lg prose-invert max-w-none"
                        style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '1.5rem',
                            padding: '3rem',
                        }}
                    >
                        <PortableText value={post.body} components={portableTextComponents} />
                    </div>
                </motion.article>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-4xl mx-auto mt-16 text-center"
                >
                    <Link
                        to={-1}
                        className="inline-flex items-center px-6 py-3 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        View all articles
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
