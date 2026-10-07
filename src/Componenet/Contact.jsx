import { useEffect, useRef, useState } from "react";
import PageNav from "./PageNav";

const contactLinks = [
  {
    label: "GitHub",
    detail: "@kodex-07",
    href: "https://github.com/kodex-07",
    icon: "github",
  },
  {
    label: "LinkedIn",
    detail: "YOUR_LINKEDIN_PROFILE",
    href: "https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    detail: "@kamal_jnr7",
    href: "https://www.instagram.com/kamal_jnr7",
    icon: "instagram",
  },
  {
    label: "WhatsApp",
    detail: "Message me directly",
    href: "https://wa.me/2349017434494",
    icon: "whatsapp",
  },
];

function ContactIcon({ name }) {
  const props = {
    "aria-hidden": true,
    className: "contact-icon",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.6,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "email":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.3" />
        </svg>
      );
    case "github":
      return (
        <svg
          aria-hidden="true"
          className="contact-icon contact-icon--brand"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.03c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.11.08 1.69 1.14 1.69 1.14.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          aria-hidden="true"
          className="contact-icon contact-icon--brand"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.2h2.97v9.54ZM6.45 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.84h-2.97V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.46V9.2h2.85v1.3h.04a3.13 3.13 0 0 1 2.82-1.55c3.02 0 3.57 1.99 3.57 4.58v5.21Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          aria-hidden="true"
          className="contact-icon contact-icon--brand"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          aria-hidden="true"
          className="contact-icon contact-icon--brand"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.372-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.265.489 1.697.626.713.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.438-9.884 9.893-9.884 2.644 0 5.129 1.03 6.99 2.894a9.825 9.825 0 0 1 2.89 6.997c-.003 5.45-4.44 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.893c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.88 11.88 0 0 0 5.684 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.479-8.412Z" />
        </svg>
      );
    default:
      return null;
  }
}

function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageNav />
      <main
        aria-labelledby="contact-title"
        className={`contact-page${isVisible ? " is-visible" : ""}`}
        ref={sectionRef}
      >
        <header className="contact-intro contact-reveal">
          <p className="about-eyebrow">Get in touch</p>
          <h1 className="contact-title" id="contact-title">
            Let&apos;s Build Something.
          </h1>
          <p className="contact-intro__copy">
            Have a project, idea, or opportunity in mind? Feel free to reach
            out. I&apos;m always open to learning, collaborating, and building
            something meaningful.
          </p>
        </header>

        <div className="contact-layout">
          <section
            aria-labelledby="contact-details-title"
            className="contact-details contact-reveal"
          >
            <div>
              <p className="contact-section-label" id="contact-details-title">
                Find me here
              </p>
              <ul className="contact-list">
                <li>
                  <a
                    className="contact-item"
                    href="mailto:adegbiteadedayo48@gmail.com"
                  >
                    <span className="contact-item__icon">
                      <ContactIcon name="email" />
                    </span>
                    <span className="contact-item__copy">
                      <span className="contact-item__label">Email</span>
                      <span className="contact-item__value">
                        adegbiteadedayo48@gmail.com
                      </span>
                    </span>
                    <span aria-hidden="true" className="contact-item__arrow">
                      <svg fill="none" viewBox="0 0 16 16">
                        <path
                          d="M4.5 11.5 11.25 4.75m0 0H5.5m5.75 0v5.75"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="contact-item">
                    <span className="contact-item__icon">
                      <ContactIcon name="location" />
                    </span>
                    <span className="contact-item__copy">
                      <span className="contact-item__label">Location</span>
                      <span className="contact-item__value">
                        Lagos, Nigeria
                      </span>
                    </span>
                  </div>
                </li>
                {contactLinks.map(({ label, detail, href, icon }) => (
                  <li key={label}>
                    <a
                      className="contact-item"
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="contact-item__icon">
                        <ContactIcon name={icon} />
                      </span>
                      <span className="contact-item__copy">
                        <span className="contact-item__label">{label}</span>
                        <span className="contact-item__value">{detail}</span>
                      </span>
                      <span aria-hidden="true" className="contact-item__arrow">
                        <svg fill="none" viewBox="0 0 16 16">
                          <path
                            d="M4.5 11.5 11.25 4.75m0 0H5.5m5.75 0v5.75"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="contact-availability">
              <span aria-hidden="true" className="contact-availability__dot" />
              <span>
                <span className="contact-availability__label">
                  Currently open to:
                </span>
                <br />
                Freelance projects <span aria-hidden="true">•</span>{" "}
                Collaborations <span aria-hidden="true">•</span> Junior
                opportunities
              </span>
            </p>
          </section>

          <section
            aria-labelledby="contact-form-title"
            className="contact-form-wrap contact-reveal"
          >
            <div className="contact-form-heading">
              <p className="contact-section-label">Have something in mind?</p>
              <h2 id="contact-form-title">Send me a message</h2>
              <p>I&apos;ll get back to you as soon as I can.</p>
            </div>
            <form
              action="mailto:adegbiteadedayo48@gmail.com"
              className="contact-form"
              encType="text/plain"
              method="post"
            >
              <div className="contact-form__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  autoComplete="name"
                  id="contact-name"
                  maxLength={100}
                  name="Name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  autoComplete="email"
                  id="contact-email"
                  maxLength={254}
                  name="Email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  maxLength={5000}
                  name="Message"
                  placeholder="Tell me a little about what you have in mind..."
                  required
                  rows={5}
                />
              </div>
              <button className="contact-submit" type="submit">
                Send Message
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4.17 10h11.66m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </button>
              <p className="contact-form__note">
                Submitting opens a new email in your mail app.
              </p>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
