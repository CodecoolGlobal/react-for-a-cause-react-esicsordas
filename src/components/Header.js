
import MyButton from './Button';
import logo from './logo.png'



export default function Header() {

    const button1 = ["Rólunk", "About"];
    const button2 = ["Főoldal", "Home"];
    const button3 = ["Kapcsolat", "Contact"];
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='img'/>
            </div>
            <div className="navbar">
                <MyButton text={button1}/>
                <MyButton text={button2}/>
            </div>

        </div>
    )
}
