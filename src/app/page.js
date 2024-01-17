/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5Oj3Yl6VEJr
 */
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectsData from "../data/projects.json";
import Contact from "@/components/tools/email";
export default function Home() {
  const projectGrid = ProjectsData.map((project) => (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={project.live}>
          <img class="rounded-t-lg" src={project.image} alt={project.image} />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  ));
  return (
    <section className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-500 dark:text-gray-400" href="#about">
            About
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#projects">
            Projects
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <section className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Angel Puente
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Full Stack Developer | React | Node.js | MongoDB
          </p>
        </section>
        <section className="flex flex-col items-center space-y-4 text-center">
          <img
            alt="Avatar"
            className="rounded-full border"
            height="200"
            src="/photos/me.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            I'm a full stack developer with a passion for creating beautiful and
            functional web applications.
          </p>
          <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Skills
          </h3>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            React, Node.js, MongoDB, Express.js, JavaScript, HTML, CSS, Angular,
            Next.js, and more
          </p>
        </section>
        <section
          className="flex flex-col items-center space-y-4 text-center"
          id="projects"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
            {projectGrid}
          </div>
        </section>
        <Contact />
      </main>
    </section>
  );
}
