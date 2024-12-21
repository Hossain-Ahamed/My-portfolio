
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';

const Experience = () => {
    return (
        <section id="experience"
            className="mb-16"
            aria-label="Work experience">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
                    Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                aria-label="2024 to Present">
                                Dec 2023 — Present
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <div>
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                            to="https://albrightinstitute.edu.au/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="Remote Enrolment Officer at Albright (opens in a new tab)">
                                            <span>Remote Enrolment Officer

                                                <span className="inline-block ml-2"> Albright <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentcolor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd">
                                                    </path>
                                                </svg></span></span></Link>
                                    </h3>
                                </div>
                                <p className="mt-2 text-sm leading-normal">
                                    As a Remote Enrollment Officer, I manage the complete admissions process to create a smooth experience for potential students. I offer assistance and support to applicants, promptly addressing their questions and concerns. Additionally, I facilitate effective communication between students and the institution, all while working from a remote setting.</p>

                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                aria-label="2024 to Present">
                                March 2023 — Nov 2023
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <div>
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                            to="https://www.gogoshopbd.com/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="Remote Enrolment Officer at Albright (opens in a new tab)">
                                            <span>MERN Stack Developer

                                                <span className="inline-block ml-2"> GogoshopBD <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentcolor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd">
                                                    </path>
                                                </svg></span></span></Link>
                                    </h3>
                                </div>
                                <p className="mt-2 text-sm leading-normal">
                                As a MERN stack Developer, I was hired to build the website for Gogoshop, a client project. I focused on both the frontend and backend to create a streamlined platform and, after completing the development, handed it over to the team.
                                </p>
                                <ul className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used">
                                    {
                                        [  
                                            "MUI",
                                            "Tailwind",
                                            "Mongoose",
                                            "Firebase",
                                            "cPanel",     
                                        ].map(i => <li className="mr-1.5 mt-2" key={i}>
                                            <Badge title={i} />
                                        </li>)
                                    }


                                </ul>
                            </div>
                        </div>
                    </li>

                </ol>
                <div className="mt-12">
                    <Link className="inline-flex items-baseline  leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                        to="https://drive.google.com/file/d/1xEmBe0ZOe5FtBGu9UEN5dIiyyqypHycV/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View Full Résumé (opens in a new tab)"><span>View <span className="inline-block">Resume<svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentcolor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true">
                            <path fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd">
                            </path>
                        </svg></span></span></Link>
                </div>
            </div>
        </section>
    );
};

export default Experience;