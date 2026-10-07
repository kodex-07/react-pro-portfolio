import PageNav from "./PageNav";
import TechnologyLogo from "./TechnologyLogo";

const interests = [
  {
    icon: "music",
    title: "Music",
    description: "R&B, hip-hop, songwriting and discovering new sounds.",
  },
  {
    icon: "technology",
    title: "Technology",
    description: "Web development, AI, software and futuristic ideas.",
  },
  {
    icon: "creativity",
    title: "Creativity",
    description: "Visual concepts, storytelling, design and experimentation.",
  },
  {
    icon: "building",
    title: "Building",
    description: "Turning random ideas into actual projects.",
  },
];

const technologies = [
  { name: "JavaScript", logo: "javascript" },
  { name: "React", logo: "react" },
  { name: "HTML5", logo: "html5" },
  { name: "CSS3", logo: "css3" },
  { name: "Bootstrap", logo: "bootstrap" },
  { name: "Git", logo: "git" },
  { name: "GitHub", logo: "github" },
];

function InterestIcon({ name }) {
  const props = {
    "aria-hidden": true,
    className: `about-interest__icon about-interest__icon--${name}`,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.6,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "music":
      return (
        <svg {...props}>
          <path d="M9 18V5l11-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="17" cy="16" r="3" />
        </svg>
      );
    case "technology":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4m-4-9 2-2-2-2m5 4h3" />
        </svg>
      );
    case "creativity":
      return (
        <svg {...props}>
          <path d="M12 3a9 9 0 0 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h.8A4.1 4.1 0 0 0 21 10.5C21 6.4 17 3 12 3Z" />
          <circle cx="7.5" cy="10" r="1" />
          <circle cx="11" cy="7" r="1" />
          <circle cx="16" cy="8" r="1" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <path d="m4 8 8-4 8 4-8 4-8-4Z" />
          <path d="m4 12 8 4 8-4M4 16l8 4 8-4" />
        </svg>
      );
    default:
      return null;
  }
}

function About() {
  return (
    <>
      <PageNav />
      <main className="about-page">
        <header className="about-intro">
          <p className="about-eyebrow">About me</p>
          <h1>Hey, I'm Kamal.</h1>
          <div className="about-copy">
            <p>
              I'm a frontend developer and creative tech enthusiast who enjoys
              turning ideas into interactive digital experiences.
            </p>
            <p>
              I'm currently focused on JavaScript, React, and modern web
              development, building projects that help me sharpen my skills and
              understand how real-world applications work.
            </p>
            <p>
              Outside of coding, I'm into music, creativity, technology, and
              exploring new ideas. I enjoy experimenting with designs, building
              things from scratch, and finding unusual ways to turn imagination
              into something people can actually interact with.
            </p>
          </div>
        </header>

        <section className="about-section" aria-labelledby="interests-title">
          <div className="about-section__heading">
            <p className="about-eyebrow">Beyond the screen</p>
            <h2 id="interests-title">What I'm Into</h2>
          </div>
          <div className="about-interest-grid">
            {interests.map(({ icon, title, description }) => (
              <article className="about-interest" key={title}>
                <span className="about-interest__icon-wrap">
                  <InterestIcon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="exploring-title">
          <div className="about-section__heading">
            <p className="about-eyebrow">Learning by making</p>
            <h2 id="exploring-title">Currently Exploring</h2>
          </div>
          <div className="tech-grid">
            {technologies.map(({ name, logo }) => (
              <article className="tech-card" key={name}>
                <span className="tech-card__logo-wrap">
                  <TechnologyLogo name={logo} />
                </span>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
