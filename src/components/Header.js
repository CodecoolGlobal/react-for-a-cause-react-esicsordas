import About from './About'


export default function Header() {
    return (
        <div className="header">
            <div className="logo">
            </div>
            <div className="navbar">
                <div>Home</div>
                <button onClick={About}>About</button>
                <a href="./Contact.js">Contact</a>
            </div>
        </div>
    )
}