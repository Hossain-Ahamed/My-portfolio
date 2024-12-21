import { Link } from 'react-router-dom';

const Email = () => {
    return (
        <li className="mr-5 shrink-0 text-xs">
            <Link className="block hover:text-slate-200"
                to="mailto:contact.hossainahamed@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Email (opens in a new tab)"
                title="Email"><span className="sr-only">Emaail</span>
                <i className="fas fa-envelope h-7 w-7"></i>
            </Link>
        </li>
    );
};

export default Email;