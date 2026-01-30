import { Link } from 'react-router-dom'
function HeaderPrac(){
    return (<>

        <div className="top-bar">
        <span className='email'> Keshavtyagi979@gmail.com</span>
        <span className='mobile'> +91 1234567890</span>
        </div>


        <header className="Header">

            <Link to="/" className="logo"><img src="/src/img/Keshav-icon.png" alt="Main Logo" /></Link>
            <nav className="nav">
                <Link to="/" className="btn">home</Link>
                <Link to="/About" className="btn">about</Link>
                <Link to="/Contact" className="btn">Contact</Link>
                <Link to="/Project" className="btn">Project</Link>
            </nav>
        </header>
        </>
    );
}

export default  HeaderPrac;