
import MyButton from './Button';
import logo from './logo.png'


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
                <MyButton text={buttontext1} />
                <MyButton text={buttontext2} />
                <MyButton text={buttontext3} />
            </div>
        </div>
    )
}
