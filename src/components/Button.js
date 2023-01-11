export default function MyButton (props) {
    return (
        <button type = {props.Type} onClick={props.onClickButton}>{props.text}</button>
    )
}
