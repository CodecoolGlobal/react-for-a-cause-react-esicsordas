export default function Form (props) {
 return (
    <div>
    <input
      type = {props.type}
      name = {props.name}
      placeholder = {props.subtitle}
      value = {props.value}
    />
  </div>
 )
}