
// eslint-disable-next-line react/prop-types
const Badge = ({ title }) => {
    return (
        <div
            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {title}
        </div>
    );
};

export default Badge;