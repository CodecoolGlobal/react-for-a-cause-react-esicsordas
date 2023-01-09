import About from './About'
import Contact from './Contact'
import Home from './Home'


export default function Header() {
    return (
        <div className="header">
            <div className="logbgkjbbjkbjo">
            </div>
            <div className="navbar">
                <button onClick={Home}>Home</button>
                <button onClick={About}>About</button>
                <button onClick={Contact}>Contact</button>
            </div>
        </div>
        
    )
}