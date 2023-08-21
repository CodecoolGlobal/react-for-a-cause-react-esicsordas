export default function SubmitMessage(props) {
  return (
    <div className="content">
      <h1 className="title">
        {props.content1} <br></br>
        {props.content2}
        <br></br> {props.content3}
      </h1>
    </div>
  );
}
