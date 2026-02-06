
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

import { projects } from '@/lib/data';

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                    Projects
                </h1>
                <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                    A collection of projects I've worked on.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                            {/* Placeholder for project image */}
                            <span className="text-sm">Project Image</span>
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <span className="text-xs text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">
                                    {project.date}
                                </span>
                            </div>
                            <CardDescription className="mt-2 text-sm line-clamp-3">
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Link
                                href={project.repoLink}
                                target="_blank"
                                className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-sm border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700"
                            >
                                <Github className="mr-2 h-4 w-4" /> Code
                            </Link>
                            <Link
                                href={project.demoLink}
                                target="_blank"
                                className="w-full inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
