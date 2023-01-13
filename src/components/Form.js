export default function Form(props) {
  return (
    <div className={props.name}>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.subtitle}
        defaultValue={props.value}
      />
    </div>
  );
}
