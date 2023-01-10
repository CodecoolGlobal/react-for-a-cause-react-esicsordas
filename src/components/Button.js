import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function MyButton (props) {
    let buttontext = props.text[0];
    let functionName = props.text[1];
    const handleClick = (data) => {
        console.log("handleClick");
        if(data==="Home"){
            Home();
        } else if(data==="About"){
            About();
        } else {
            Contact();
        }
      };
    return (
        <button onClick={()=>handleClick(functionName)}>
            {buttontext}
        </button>
    )
}