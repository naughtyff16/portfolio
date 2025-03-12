export default function ({ fill = "currentColor", className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 32 32"
    >
      <g>
        <path
          d="M6.41 18.29 16 8.7l9.59 9.59a2 2 0 0 0 2.82 0 2 2 0 0 0 0-2.83l-11-11a2 2 0 0 0-2.82 0l-11 11a2 2 0 0 0 2.82 2.83z"
          fill="currentColor"
        ></path>
        <path
          d="M3.59 27.54a2 2 0 0 0 2.82 0L16 18l9.59 9.59a2 2 0 0 0 2.82 0 2 2 0 0 0 0-2.83l-11-11a2 2 0 0 0-2.82 0l-11 11a2 2 0 0 0 0 2.78z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
