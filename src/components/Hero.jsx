export default function Hero() {
  return (
    <section id="hero" className="hero fade-up">

      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          Hi, I am <br />
          <span>Moumita Bera</span>
        </h1>

        <p>
          Computer Science Engineering Student | Full Stack Developer
        </p>

        <a className="hero-btn">See more</a>
      </div>

      {/* RIGHT SIDE PHOTO */}
      <div className="hero-right">
        <div className="photo-ring">
          <img src="/profile.jpg" alt="Moumita Bera" />
        </div>
      </div>

    </section>
  );
}
