import { useEffect, useRef, useState } from "react";
import PageNav from "./PageNav";
import TechnologyLogo from "./TechnologyLogo";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        logo: "html5",
        description: "Structuring clean and semantic web experiences.",
      },
      {
        name: "CSS3",
        logo: "css3",
        description: "Designing responsive and polished interfaces.",
      },
      {
        name: "JavaScript",
        logo: "javascript",
        description: "Building interactive logic and dynamic experiences.",
      },
      {
        name: "React",
        logo: "react",
        description: "Creating reusable component-based interfaces.",
      },
      {
        name: "Bootstrap",
        logo: "bootstrap",
        description: "Rapidly building responsive layouts and interfaces.",
      },
    ],
  },
  {
    id: "workflow",
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        logo: "git",
        description: "Tracking changes and managing development workflows.",
      },
      {
        name: "GitHub",
        logo: "github",
        description: "Hosting, collaborating on, and showcasing projects.",
      },
      {
        name: "VS Code",
        logo: "vscode",
        description: "My main environment for writing and managing code.",
      },
      {
        name: "Vercel",
        logo: "vercel",
        description: "Deploying projects and bringing them to the web.",
      },
    ],
  },
  {
    id: "exploring",
    title: "Currently Exploring",
    skills: [
      {
        name: "React Router",
        logo: "react-router",
        description: "Creating multi-page navigation experiences in React.",
      },
      {
        name: "APIs",
        logo: "api",
        description: "Connecting applications to external data and services.",
      },
      {
        name: "AI Integration",
        logo: "ai",
        description: "Exploring intelligent features and AI-powered experiences.",
      },
      {
        name: "Modern JavaScript",
        logo: "javascript",
        description: "Deepening my knowledge of modern JavaScript patterns.",
      },
    ],
  },
];

const allGroupsVisible = Object.fromEntries(
  skillGroups.map(({ id }) => [id, true]),
);

function Skills() {
  const gridRefs = useRef({});
  const [visibleGroups, setVisibleGroups] = useState(() => {
    const canRevealOnScroll =
      typeof window !== "undefined" &&
      "IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return canRevealOnScroll ? {} : allGroupsVisible;
  });

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { skillGroup } = entry.target.dataset;
            setVisibleGroups((current) => ({
              ...current,
              [skillGroup]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    Object.values(gridRefs.current).forEach((grid) => {
      if (grid) observer.observe(grid);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageNav />
      <main className="skills-page">
        <header className="skills-intro">
          <p className="about-eyebrow">A growing toolkit</p>
          <h1 className="skills-title">Skills</h1>
          <p className="skills-subtitle">
            Technologies and tools I use to turn ideas into working experiences.
          </p>
        </header>

        {skillGroups.map(({ id, title, skills }) => (
          <section
            className="skills-section"
            key={id}
            aria-labelledby={`skills-${id}-title`}
          >
            <div className="skills-section__heading">
              <h2 id={`skills-${id}-title`}>{title}</h2>
              <span>{String(skills.length).padStart(2, "0")}</span>
            </div>
            <div
              className={`skills-grid${visibleGroups[id] ? " is-visible" : ""}`}
              data-skill-group={id}
              ref={(node) => {
                if (node) gridRefs.current[id] = node;
              }}
            >
              {skills.map(({ name, logo, description }, index) => (
                <article
                  className="skill-card"
                  key={name}
                  style={{ "--card-index": index }}
                >
                  <span className="skill-card__logo">
                    <TechnologyLogo
                      className="skill-card__mark"
                      name={logo}
                    />
                  </span>
                  <div className="skill-card__copy">
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default Skills;
