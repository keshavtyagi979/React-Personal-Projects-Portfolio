function About() {
  return (
    <div className="Aboutbody">
      <div className="resume-icon">
        <div className="resume-img">
          <img src="src/img/resume-icon.png" alt="Resume preview" />
        </div>

        <div className="resume-icon-text">
          <h3>About Me</h3>
          <p>
            I am a young developer focused on building clean,
            responsive, and user-friendly applications.
            I am learning  React, backend systems, and modern UI design.
          </p>

          <a
            href="src/img/resume-icon.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
