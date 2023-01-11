export default function Textarea (props) {
    return (
       <div className = {props.name}>
       <textarea
         type = {props.type}
         name = {props.name}
         placeholder = {props.subtitle}
         value = {props.value}
         cols = {50}
         rows = {5}
       />
     </div>
    )
   }