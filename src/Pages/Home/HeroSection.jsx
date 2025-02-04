export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, Syazwani here!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Tech Explorer</span> <br />
            & Developer
          </h1>
          <p className="hero--section-description">
            Technology is a reflection of the human mind, and I thrive at its intersection.  
            Jack of all trades? More like a master of learning. I break down challenges—not just to solve them, but to understand them.  
            AI isn’t just a tool; it’s a conversation. Code isn’t just logic; it’s storytelling. And the future? I'm here to build it.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.gif" alt="Hero Section" />
      </div>
    </section>
  );
}
