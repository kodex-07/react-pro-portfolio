import PageNav from "./PageNav";

const projects = [
  {
    number: "01",
    title: "Keeper App",
    description:
      "A clean React note-taking app for creating and managing notes.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/keeper-app.jpg",
    links: [
      {
        label: "Live Demo",
        href: "https://react-keeper-app-lovat.vercel.app/",
      },
    ],
  },
  {
    number: "02",
    title: "Pizza Ordering App",
    description:
      "A modern and responsive pizza ordering web app built with React and Vite. Users can browse pizzas, view details, customize their order, and interact with the ordering interface.",
    stack: ["React ", "Vite", "JavaScript", "Responsive UI"],
    image: "/reference-project-card.jpg",
    links: [
      {
        label: "Live Demo",
        href: "https://react-vite-pizza-app-nine.vercel.app",
      },
    ],
  },
  {
    number: "03",
    title: "Drum Kit",
    description:
      "An interactive browser-based drum kit that lets you play drum sounds using the keyboard or on-screen controls.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/drum-kit-reference.jpg",
    links: [
      {
        label: "Live Demo",
        href: "https://kodex-07.github.io/drum-kit/",
      },
    ],
  },
];

function Project() {
  return (
    <>
      <PageNav />
      <main className="projects-page">
        <header className="projects-intro">
          <p className="about-eyebrow">Selected work</p>
          <h1 className="projects-title">Projects</h1>
          <p>
            A collection of ideas brought to life through code, design, and
            experimentation.
          </p>
        </header>

        <section className="projects-grid" aria-label="Project portfolio">
          {projects.map(
            ({ number, title, description, stack, visual, image, links }) => (
              <article className="project-card" key={number}>
                <div
                  className={`project-card__visual project-card__visual--${visual ?? "orbit"}${image ? " project-card__visual--image" : ""}`}
                >
                  {image ? (
                    <img
                      alt={`${title} screenshot`}
                      className="project-card__image"
                      src={image}
                    />
                  ) : (
                    <div aria-hidden="true" className="project-card__artwork">
                      <span className="project-card__visual-mark">
                        {number}
                      </span>
                      <span className="project-card__visual-line" />
                      <span className="project-card__visual-line" />
                      <span className="project-card__visual-line" />
                    </div>
                  )}
                </div>
                <div className="project-card__body">
                  <p className="project-card__number">PROJECT / {number}</p>
                  <h2>{title}</h2>
                  <p className="project-card__description">{description}</p>
                  <ul className="project-card__stack" aria-label="Technologies">
                    {stack.map((technology, index) => (
                      <li key={`${technology}-${index}`}>{technology}</li>
                    ))}
                  </ul>
                  {links?.length > 0 && (
                    <div className="project-card__links">
                      {links.map(({ label, href }) => (
                        <a
                          href={href}
                          key={label}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ),
          )}
        </section>
      </main>
    </>
  );
}

export default Project;
