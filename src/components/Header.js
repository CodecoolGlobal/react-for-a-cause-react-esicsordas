
import MyButton from './Button';
import logo from './logo.png'

export default function Header({onActivate}) {

    const button1 = ["Főoldal", "Home"];
    const button2 = ["Rólunk", "About"];
    const button3 = ["Kapcsolat", "Contact"];
    const button4 = ["Adomány", "Donate"];
    
    return (
        <div className="header">
            <div className="logo">
                <img id='headerimage' src={logo} alt='img'/>
            </div>
            <div className="navbar">
                <MyButton Type = {"button"}  onClickButton = {() => {onActivate(button1[1])}} text={button1[0]}/>
                <MyButton Type = {"button"} onClickButton = {() => {onActivate(button2[1])}} text={button2[0]}/>
                <MyButton Type = {"button"} onClickButton = {() => {onActivate(button3[1])}} text={button3[0]}/>
                <MyButton Type = {"button"} onClickButton = {() => {onActivate(button4[1])}} text={button4[0]}/>
            </div>

        </div>
    )
}
