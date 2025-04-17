/* eslint-disable react/prop-types */
import arrow from "../../assets/Icons/arrowup.svg";

export default function ProjectCard({ project }) {
  return (
    <article className="relative rounded shadow-lg bg-white z-10 w-[280px] h-[280px] overflow-hidden">
      <a href={project.linkto}>
        <img
          src={`${project.img}`}
          className="w-full bg-cover h-auto flex"
        ></img>
      </a>
      <img
        src={arrow}
        className="z-10 absolute top-2/3 right-1/2 flex justify-center animate-bounce"
      ></img>
      <section className="h-[70px] z-20 hover:h-full transition-all overflow-hidden bg-primary-100 text-primary-900 backdrop-blur-lg w-full absolute bottom-0 left-0 p-2">
        <div className="px-1 flex justify-between">
          <p>{project.category}</p>
          <p>{project.year}</p>
        </div>
        <h3 className="text-xl font-semibold m-1">{project.title}</h3>
        <p className="text-md m-1 mt-3">{project.desc}</p>
      </section>
    </article>
  );
}
