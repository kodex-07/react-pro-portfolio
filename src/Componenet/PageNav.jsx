import { NavLink } from "react-router-dom";

const routeLinks = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/About", label: "About Me", icon: "about" },
  { to: "/Skills", label: "Skills", icon: "skills" },
  { to: "/Projects", label: "Projects", icon: "projects" },
  { to: "/Contact", label: "Contact", icon: "contact" },
];

function RouteIcon({ name }) {
  const sharedProps = {
    "aria-hidden": true,
    className: "route-nav__icon",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "home":
      return (
        <svg {...sharedProps}>
          <path d="m3.5 10 8.5-7 8.5 7v10a1 1 0 0 1-1 1h-5.2v-6.4H9.7V21H4.5a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "about":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 20c.6-3.5 3.1-5.3 7-5.3s6.4 1.8 7 5.3" />
        </svg>
      );
    case "skills":
      return (
        <svg {...sharedProps}>
          <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M14 4l-4 16" />
        </svg>
      );
    case "contact":
      return (
        <svg {...sharedProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      );
    case "projects":
      return (
        <svg {...sharedProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v5m8-5v5m-9 5h3m3 0h3m-9 3h3" />
        </svg>
      );
    default:
      return null;
  }
}

function PageNav() {
  return (
    <aside className="route-nav">
      <p className="route-nav__eyebrow">Portfolio</p>
      <nav aria-label="Main navigation">
        <ul className="route-nav__list">
          {routeLinks.map(({ to, label, icon, end }) => (
            <li key={to}>
              <NavLink
                aria-label={label}
                className={({ isActive }) =>
                  `route-nav__link${isActive ? " is-active" : ""}`
                }
                end={end}
                to={to}
              >
                <RouteIcon name={icon} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default PageNav;
