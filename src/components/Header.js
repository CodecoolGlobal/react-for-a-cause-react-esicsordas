
import MyButton from './Button';
import logo from './logo.png'

export default function Header(props) {

    const button1 = ["Rólunk", "About"];
    const button2 = ["Főoldal", "Home"];
    const button3 = ["Kapcsolat", "Contact"];
    
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='img'/>
            </div>
            <div className="navbar">
                <MyButton onClickButton = {() => {props.onActivate(button1[1])}} text={button1[0]}/>
                <MyButton onClickButton = {() => {props.onActivate(button2[1])}} text={button2[0]}/>
                <MyButton onClickButton = {() => {props.onActivate(button3[1])}} text={button3[0]}/>
            </div>

        </div>
    )
}
