
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/Button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    안녕하세요, <span className="text-blue-600 dark:text-blue-500">형진</span>입니다.
                </h1>
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 sm:text-3xl md:text-4xl">
                    풀스택 개발자
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    프론트엔드부터 백엔드까지, 확장 가능한 사용자 중심의 애플리케이션을 구축합니다.
                    깔끔한 코드와 최신 기술에 열정을 가지고 있습니다.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex gap-4"
            >
                <Link href="/projects">
                    <Button size="lg" className="gap-2">
                        프로젝트 보기 <ArrowRight size={16} />
                    </Button>
                </Link>
                <Link href="#contact">
                    <Button variant="outline" size="lg">
                        연락하기
                    </Button>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex gap-6 text-gray-500 dark:text-gray-400"
            >
                <Link href="https://github.com/hangjin01" target="_blank" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="mailto:khyoungjin011@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                </Link>
            </motion.div>
        </section>
    );
}
