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
    <div class="max-w-sm bg-gray border border-gray-200 rounded-lg shadow dark:border-gray-700">
      <a href={project.live}>
        <img class="rounded-t-lg" src={project.image} alt={project.image} />
      </a>
      <div class="p-5 flex flex-col h-80">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-white">{project.description}</p>
        <a
          href={project.git}
          class="inline-flex mt-auto mx-auto items-center  px-3 py-2 text-sm font-medium text-center rounded-lg h-20 w-20"
        >
          <svg viewBox="0 0 128 128">
            <g fill="#f8594e">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              ></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  ));
  return (
    <section className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 primaryBG shrink-0 md:px-6">
        <nav className="font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-white" href="#projects">
            projects
          </Link>
          <Link className="text-white" href="#contact">
            contact
          </Link>
          <Link className="text-white" href="/angelpuenteResumeJ2024.pdf">
            resume
          </Link>
        </nav>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] secondaryBG flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <section className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
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
              backgroundColor: "black",
              backgroundImage: `url(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            width="200"
          />
          <hr></hr>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Software Engineer with significant experience in the insurance and
            finance industry. Skilled in customer service, excelling through
            standardized work processes, and having an aptitude for learning new
            coding languages.
          </p>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-white">
            skills
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            React, Node.js, MongoDB, Express.js, JavaScript, HTML, CSS, Angular,
            Next.js, and more
          </p>
        </section>
        <section
          className="flex flex-col items-center space-y-4 text-center"
          id="projects"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-white">
            projects
          </h2>
          <hr></hr>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projectGrid}
          </div>
        </section>
        <Contact />
      </main>
    </section>
  );
}
