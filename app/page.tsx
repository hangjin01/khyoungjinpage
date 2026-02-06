
import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Code2, Database, Layout, Server, Terminal, Smartphone } from 'lucide-react';

/* 
  Since this is a static site (output: export), we can hardcode some content here.
*/

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="mb-2 h-8 w-8 text-blue-500" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Server className="mb-2 h-8 w-8 text-green-500" />,
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="mb-2 h-8 w-8 text-purple-500" />,
    items: ["Git", "Docker", "AWS", "GitHub Actions", "Vercel"]
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />

      <section id="skills" className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            A comprehensive toolset for Full Stack Development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={index} className="border bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gray-100 dark:bg-gray-800 p-3 rounded-full w-fit">
                  {skill.icon}
                </div>
                <CardTitle className="mt-4">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-center text-gray-600 dark:text-gray-300">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="mt-8">
            <a
              href="mailto:khyoungjin011@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              메일 보내기
            </a>
            <div className="mt-4 text-gray-500 dark:text-gray-400">
              <p>Email: khyoungjin011@gmail.com</p>
              <p>Phone: 010-4905-9607</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
