
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button'; // Assuming I can import Button here if I fix/use it, or just use Link again. I'll use styled Link to be safe based on previous issues, or just standard <a> for now. actually I removed Button import in other file. I'll try to use standard tags or the same styled Link pattern.

// For static export, we need to generate params for all routes
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectLayout({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
            <Link
                href="/projects"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> 프로젝트 목록으로 돌아가기
            </Link>

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                        {project.title}
                    </h1>
                    <div className="flex gap-4">
                        <Link
                            href={project.repoLink}
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 h-9 px-4 text-sm border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-200"
                        >
                            <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                        <Link
                            href={project.demoLink}
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 h-9 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-gray-100 mr-2">기술 스택:</span>
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="prose dark:prose-invert max-w-none mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">프로젝트 소개</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            {project.content}
                        </p>
                        {/* Here you would verify a markdown renderer if content was markdown */}
                    </div>
                </div>
            </div>
        </article>
    );
}
