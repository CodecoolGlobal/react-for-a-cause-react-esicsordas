export default function MyButton (props) {
    return (
        <button onClick={props.onClickButton}>{props.text}</button>
    )
}
