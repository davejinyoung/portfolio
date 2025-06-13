interface Props {
  company: string;
  dateRange: string;
  position: string;
  link: string;
}

export default function Work({ company, dateRange, position, link }: Props) {
  return (
    <div className="block p-3 backdrop-blur-xs border border-gray-600 dark:text-neutral-400 rounded-sm hover:shadow-md transition">
      <div className="flex justify-between items-center text-sm">
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-white">{company}</h3>
            <p className="ml-5">{dateRange}</p>
          </div>
          <p>{position}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-5 h-5 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
