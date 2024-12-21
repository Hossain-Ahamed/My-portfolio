import { Link } from "react-router-dom";

const Information = () => {
    return (
        <section aria-label="My Information detail">
            <div
      className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
   <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
     About me</h2>
 </div>
              <p className="mb-4">I’m a developer who loves creating user interfaces that are both accessible and visually stunning, combining careful design with solid engineering. I thrive on projects that sit at the crossroads of design and development, delivering experiences that are not only aesthetically pleasing but also finely tuned for performance and ease of use.</p>
                <p className="mb-4">Currently, I'm a working as Remote Enrolment Officer at <Link
                     className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                     to="https://albrightinstitute.edu.au/"
                     target="_blank"
                     rel="noreferrer noopener"
                     aria-label="Klaviyo (opens in a new tab)">Albright Institute of Business and Language</Link>. As a Remote Enrollment Officer, I manage the admission process, assist prospective students, and ensure smooth communication, all while working remotely.</p>
                <p className="mb-4">In the past, I've had the
                  opportunity to work as an Full stack developer for an e-commerce comapny - 
                   <Link
                     className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                     to="https://wwww.gogoshopbd.com/"
                     target="_blank"
                     rel="noreferrer noopener"
                     aria-label="advertising agency (opens in a new tab)">GogoshopBD</Link>, a startup in Bangladesh.</p>
             
              </section>
       
    );
};

export default Information;