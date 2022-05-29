
export default function Button({ props }) {
  return (
    <div className={props.className}>
      <button className="btn btn-primary"
        onClick={props.action}
      >
        {props.text}
      </button>
    </div>
  )
}
