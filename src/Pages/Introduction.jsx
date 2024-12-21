import Email from "../components/Email";
import Github from "../components/Github";
import LinkedIn from "../components/LinkedIn";

const Introduction = () => {
  return (
    <>
      <section id="about"
        className="mb-16"
        aria-label="information">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Hossain Ahamed</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            MERN stack Developer</h2>
          <p className="mt-4 max-w-xs leading-normal">I build  pixel-perfect and user-friendly digital experiences for the web.</p>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <Github />
          <LinkedIn />
          <Email/>
        
        </ul>
      </section>
    </>
  );
};

export default Introduction;