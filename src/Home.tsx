import { useState} from "react";
import SearchBar from "./SearchBar";
function Home(){

    const projects = [
  {
    title: "E-commerce using Django",
    image: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Flappy bird using Pygame",
    image: "https://plus.unsplash.com/premium_photo-1731765064003-303e6aee9749",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Entity Framework Core Example",
    image: "https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Power-Bi",
    image: "https://plus.unsplash.com/premium_photo-1721910821871-f8caece8d381?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Youtube Home Page",
    image: "https://images.unsplash.com/photo-1540655037529-dec987208707?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Blood Cancer Detection Using CNN",
    image: "https://images.unsplash.com/photo-1631048005681-79a19681e4fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Keshav",
    image: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
  {
    title: "Tyagi",
    image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/keshavtyagi979",
    tag: "PROJECT",
  },
];
const [searchText, setSearchText] = useState("");
const [filteredProjects, setFilteredProjects] = useState(projects);

const handleSearch = () => {
const result = projects.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()));
setFilteredProjects(result);
};


    return (
        


        <div className="Homebody">

          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}/>


            <section className="hero">
            <h1>Hi, I'm Keshav</h1>
            <h3>React & Backend Development learner</h3>
            <p>I am building real-world projects to learn modern web development.</p>
            </section>



            <section className="about-section">
                <h2>Who Am I</h2>
                <p> I'm a developer learning React by building real-world projects.I am trying to develop this site to improve my knowledge ,my goal is to create a well functioning site without compromisind on any performance.</p>
            </section>

            


            {/* <section className="features"> */}
                {/* <a href="https://github.com/keshavtyagi979"  target="_blank" rel="noopener noreferrer"><div className="card"><img src="https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" /><span className="card-tag">PROJECT</span>
                <h5>E-commerce using Django</h5><p></p></div></a> */}

                {/* <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?fm=jpg&q=60&w=3000"alt="img"/><span className="card-tag">PROJECT</span><h5>E-commerce using Django</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://plus.unsplash.com/premium_photo-1731765064003-303e6aee9749?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Flappy bird using Pygame</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Entity Framework core Example</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://plus.unsplash.com/premium_photo-1721910821871-f8caece8d381?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Power-Bi</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://images.unsplash.com/photo-1540655037529-dec987208707?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Youtube Home Page</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://images.unsplash.com/photo-1631048005681-79a19681e4fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Blood Cancer Detection Using CNN</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Keshav</h5></div></a>

                <a href="https://github.com/keshavtyagi979"target="_blank"rel="noopener noreferrer"className="card-link"><div className="card"><img src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="img"/><span className="card-tag">PROJECT</span><h5>Tyagi</h5></div></a>

            </section> */}


            <section className="features">{filteredProjects.map((project, index) => (<a key={index} href={project.link}target="_blank" rel="noopener noreferrer" className="card-link"><div className="card"><img src={project.image} alt="img" /><span className="card-tag">{project.tag}</span><h5>{project.title}</h5></div></a>))}</section>


            <div className="info-section">
                <div className="info-image"><img src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="info-image" />
                </div>
                <div className="info-text"><h1>Developing a raw site By Myself</h1><h3>Learning React Fundamentals</h3>
                <p>The Site Still Uses Vanilla Css but I will Later Incorporate Tailwind Css as i will Learn The Newer Versions</p></div>
            </div>

        </div>
    );  
}
export default Home;