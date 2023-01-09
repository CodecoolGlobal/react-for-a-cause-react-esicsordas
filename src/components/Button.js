export default function MyButton (props) {
    let buttontext = props.text;
    return (
        <button>
            {buttontext}
        </button>
    )
}