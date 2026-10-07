function TechnologyLogo({ name, className = "tech-logo" }) {
  const props = {
    "aria-hidden": true,
    className: `${className} tech-logo--${name}`,
    viewBox: "0 0 48 48",
  };

  switch (name) {
    case "javascript":
      return (
        <svg {...props}>
          <path fill="#f7df1e" d="M5 5h38v38H5z" />
          <text
            x="24"
            y="35"
            fill="#111"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="-1.2"
            textAnchor="middle"
          >
            JS
          </text>
        </svg>
      );
    case "react":
      return (
        <svg {...props}>
          <g fill="none" stroke="#61dafb" strokeWidth="2">
            <ellipse cx="24" cy="24" rx="19" ry="7.5" />
            <ellipse
              cx="24"
              cy="24"
              rx="19"
              ry="7.5"
              transform="rotate(60 24 24)"
            />
            <ellipse
              cx="24"
              cy="24"
              rx="19"
              ry="7.5"
              transform="rotate(120 24 24)"
            />
          </g>
          <circle cx="24" cy="24" r="3.5" fill="#61dafb" />
        </svg>
      );
    case "html5":
      return (
        <svg {...props}>
          <path fill="#e44d26" d="m8 4 2.8 34L24 42l13.2-4L40 4H8Z" />
          <path fill="#f16529" d="M24 7h12.5l-2.4 28.4L24 39V7Z" />
          <path
            fill="#fff"
            d="M14 12h20l-.4 4H18l.4 4h14.9l-1.2 12.8L24 35.5l-8.1-2.7-.5-6h4l.3 3 4.3 1.4 4.5-1.4.5-5H14.9L14 12Z"
          />
        </svg>
      );
    case "css3":
      return (
        <svg {...props}>
          <path fill="#1572b6" d="m8 4 2.8 34L24 42l13.2-4L40 4H8Z" />
          <path fill="#33a9dc" d="M24 7h12.5l-2.4 28.4L24 39V7Z" />
          <path
            fill="#fff"
            d="M14 12h20l-.4 4H18l.3 4h14.8l-1.2 12.8-8 2.7-8.1-2.7-.5-6h4l.3 3 4.3 1.4 4.5-1.4.5-5H15l-.3-4.8h-.1l-.3-4H14l-.4-4Z"
          />
        </svg>
      );
    case "bootstrap":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="40" height="40" rx="9" fill="#7952b3" />
          <path
            fill="#fff"
            d="M16 11h9.2c5.1 0 7.8 2.2 7.8 6.1 0 2.4-1.2 4-3.2 4.8 2.7.7 4.2 2.5 4.2 5.3 0 4.3-3.2 6.8-8.4 6.8H16V11Zm6 4.3v5h3c2 0 3-.8 3-2.5s-1-2.5-3-2.5h-3Zm0 9.3v5.2h3.6c2.2 0 3.3-.8 3.3-2.6 0-1.7-1.1-2.6-3.3-2.6H22Z"
          />
        </svg>
      );
    case "git":
      return (
        <svg {...props}>
          <path
            fill="#f05032"
            d="M45 21 27 3a4.2 4.2 0 0 0-6 0L17 7l7 7a5 5 0 0 1 6.3 6.3l6.8 6.8L45 27a4.2 4.2 0 0 0 0-6Z"
          />
          <path
            fill="#f05032"
            d="m14 10-11 11a4.2 4.2 0 0 0 0 6l18 18a4.2 4.2 0 0 0 6 0l4-4-7-7a5 5 0 0 1-6.3-6.3l-6.8-6.8a5 5 0 0 1 3.1-7.6L14 10Z"
          />
          <path
            fill="#fff"
            d="M24 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 12a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0v-7Z"
          />
        </svg>
      );
    case "github":
      return (
        <svg {...props}>
          <path
            fill="#f0edf6"
            d="M24 4a20 20 0 0 0-6.3 39c1 .2 1.4-.4 1.4-1v-3.8c-5.7 1.2-6.9-2.4-6.9-2.4-.9-2.3-2.3-2.9-2.3-2.9-1.9-1.3.1-1.3.1-1.3 2.1.1 3.2 2.1 3.2 2.1 1.9 3.2 4.9 2.3 6.1 1.8.2-1.4.7-2.3 1.3-2.8-4.6-.5-9.4-2.3-9.4-10.1 0-2.2.8-4 2.1-5.4-.2-.5-.9-2.6.2-5.4 0 0 1.7-.5 5.5 2.1a19 19 0 0 1 10 0c3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8.4 4.9.2 5.4a7.8 7.8 0 0 1 2.1 5.4c0 7.8-4.8 9.6-9.4 10.1.7.6 1.4 1.8 1.4 3.6V42c0 .6.4 1.2 1.4 1A20 20 0 0 0 24 4Z"
          />
        </svg>
      );
    case "vscode":
      return (
        <svg {...props}>
          <path
            fill="#0065a9"
            d="M34.8 4.1 20.1 17.5 9.3 9.3 3 12.1v23.8l6.3 2.8 10.8-8.2 14.7 13.4 9.2-3.5V7.6l-9.2-3.5ZM9.3 16.4l6.2 7.6-6.2 7.6V16.4Zm17 7.6 8.3-6.6v13.2L26.3 24Z"
          />
          <path
            fill="#007acc"
            d="m20.1 17.5 6.2 6.5-6.2 6.5-4.6-6.5 4.6-6.5Z"
          />
          <path fill="#1f9cf0" d="m34.8 4.1 9.2 3.5v30.2l-9.2 3.5V4.1Z" />
        </svg>
      );
    case "vercel":
      return (
        <svg {...props}>
          <path fill="#f5f5f7" d="M24 5 45 42H3L24 5Z" />
        </svg>
      );
    case "react-router":
      return (
        <svg {...props}>
          <path
            fill="none"
            stroke="#f5f5f7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M10 10v10a5 5 0 0 0 5 5h8m0 0-4-4m4 4-4 4M29 11h5m-5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM14 36h5m-5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
          />
        </svg>
      );
    case "api":
      return (
        <svg {...props}>
          <path
            fill="none"
            stroke="#b89bda"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M18 15 14 11a6 6 0 0 0-8 9l6 6a6 6 0 0 0 9 0l2-2m7-4 4 4a6 6 0 0 0 8-9l-6-6a6 6 0 0 0-9 0l-2 2m-12 8 16-8"
          />
        </svg>
      );
    case "ai":
      return (
        <svg {...props}>
          <path
            fill="none"
            stroke="#b89bda"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M24 7v34M9 15l30 18M9 33l30-18M24 7l-3 4m3-4 3 4M24 41l-3-4m3 4 3-4M9 15l5 1m-5-1 1 5m29 13-5-1m5 1-1-5M9 33l5-1m-5 1 1-5m29-13-5 1m5-1-1 5"
          />
          <circle cx="24" cy="24" r="4" fill="#b89bda" />
        </svg>
      );
    default:
      return null;
  }
}

export default TechnologyLogo;
