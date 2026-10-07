import PageNav from "./PageNav";

function Home() {
  return (
    <>
      {" "}
      <PageNav />
      <div className="home-hero">
        <div className="home-intro">
          <h1>Hey, I'm Kamal.</h1>
          <p>
            I’m a front developer, a learner, and a creator turning thoughts
            into things people can see, use, and experience. I’m still
            exploring. Still learning. Still building. Welcome to my little
            corner of the internet.
          </p>
        </div>
        <img className="home-portrait" src="/portfolio.jpeg" alt="Kamal" />
      </div>
    </>
  );
}
export default Home;
