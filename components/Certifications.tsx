"use client";

import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "@/data";
import { HoverEffect, Card, CardTitle, CardDescription } from "./ui/card-hover-effect";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Certifications = () => {
    return (
        <div className="py-20" id="certifications">
            <h1 className="heading">
                My Professional{" "}
                <span className="text-purple">Certifications</span>
            </h1>
            <p className="text-center text-white-200 mt-5 mb-10 text-sm md:text-base max-w-2xl mx-auto">
                Industry-recognized certifications that validate my expertise in modern web development technologies
            </p>

            <div className="max-w-6xl mx-auto px-8">
                <CertificationHoverEffect />
            </div>
        </div>
    );
};

// Custom certification hover effect using Aceternity UI
const CertificationHoverEffect = () => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
                <a
                    href={cert.link}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex flex-col justify-between h-[calc(100%-16px)] relative">
                            {/* Main Content */}
                            <div>
                                {/* FaAward Icon - Top Right */}
                                <div className="absolute top-2 right-2 z-10">
                                    <FaAward className="text-2xl text-[#a307f7] opacity-60" />
                                </div>

                                {/* Certificate Image */}
                                <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple/10 to-blue-500/10">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div title={cert.title}>
                                    <CardTitle className="text-lg md:line-clamp-2 xl:line-clamp-1">{cert.title}</CardTitle>
                                </div>

                                {/* Issuer and Date */}
                                <div className="flex items-center gap-2 mt-2 mb-3">
                                    <p className="text-purple font-semibold text-xs">
                                        {cert.issuer}
                                    </p>
                                    <span className="text-white-200 text-xs">•</span>
                                    <p className="text-white-200 text-xs">{cert.date}</p>
                                </div>

                                <CardDescription className="mt-4 text-xs line-clamp-3">
                                    {cert.description}
                                </CardDescription>

                                {/* Skills Tags */}
                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {cert.skills.slice(0, 3).map((skill, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.1] text-white-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 3 && (
                                            <span className="text-xs px-2 py-1 text-white-200">
                                                +{cert.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* View Link - Bottom */}
                            <div className="pt-6 flex items-center gap-2 text-purple text-sm font-medium group-hover:gap-3 transition-all">
                                View Certificate
                                <FaExternalLinkAlt className="text-xs" />
                            </div>
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export default Certifications;
