import { Routes, Route } from 'react-router-dom'
import He from './Header.tsx'
import Contact from './Contact.tsx'
import Home from './Home.tsx'
import About from './about.tsx'
import Footer  from './Footer.tsx'
import Project from './Projects.tsx'
// import SearchBar from './SearchBar.tsx'

function App(){
  return(
   <div className='app'>
     <He/>
     {/* <SearchBar/> */}
    

     

     <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>

      <Footer/>


      </div>
    
  );
}
export default App;