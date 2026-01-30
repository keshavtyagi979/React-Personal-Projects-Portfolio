function Project() {
  const ProjectsObj = [
    {
      title: "Blood Cancer Detection Using CNN",
      secondheading: "This is the second heading",
      desc: "Developed this by training an LLM model using images",
      image:
        "https://images.unsplash.com/photo-1631048005681-79a19681e4fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/keshavtyagi979",
      tag: "PROJECT",
    },
    {
      title: "E-commerce using Django",
      secondheading: "This is the second heading",
      desc: "Developed this by training an LLM model using images",
      image:
        "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770",
      link: "https://github.com/keshavtyagi979",
      tag: "PROJECT",
    },
    {
      title: "Flappy bird using Pygame",
      secondheading: "This is the second heading",
      desc: "Developed this by training an LLM model using images",
      image:
        "https://plus.unsplash.com/premium_photo-1731765064003-303e6aee9749",
      link: "https://github.com/keshavtyagi979",
      tag: "PROJECT",
    },
    {
      title: "Entity Framework Core Example",
      secondheading: "This is the second heading",
      desc: "Developed this by training an LLM model using images",
      image:
        "https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e",
      link: "https://github.com/keshavtyagi979",
      tag: "PROJECT",
    },
    {
      title: "Power-Bi",
      secondheading: "This is the second heading",
      desc: "Developed this by training an LLM model using images",
      image:
        "https://plus.unsplash.com/premium_photo-1721910821871-f8caece8d381?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/keshavtyagi979",
      tag: "PROJECT",
    },
     {
    title: "Youtube Home Page",
    secondheading: "This is the second heading",
    desc:"Some description for the project",
    image: "https://images.unsplash.com/photo-1540655037529-dec987208707?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
    {
    title: "Keshav",
    secondheading: "This is the second heading",
    desc: "Developed this by training an LLM model using images",
    image: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Tyagi",
    secondheading: "This is the second heading",
    desc: "Developed this by training an LLM model using images",
    image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  ];

  return (
    <div className="Projectbody">
      {ProjectsObj &&
        ProjectsObj.map((project) => {
          return (
            <div className="project-section">
              <div className="project-image"><a href={project.link} target="_blank" rel="noopener noreferrer"><img src={project.image} alt="project-image" /></a>  
              </div>
              <div className="project-text">
                <h1>{project.title}</h1>
                <h3>{project.secondheading}</h3>
                <span className="project-tag">{project.tag}</span>
                <p>{project.desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Project;
