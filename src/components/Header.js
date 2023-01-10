
import MyButton from './Button';
import logo from './logo.png'
import Home from './Home'
import About from './About'
import Contact from './Contact'


export default function Header() {

    const buttontext1 = "Rólunk";
    const buttontext2 = "Főoldal";
    const buttontext3 = "Kapcsolat";
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='img'/>
            </div>
            <div className="navbar">
                <MyButton text={buttontext1} onClick={About}/>
                <MyButton text={buttontext2} onClick={Home}/>
                <MyButton text={buttontext3} onClick={Contact}/>
            </div>
        </div>
    )
}
