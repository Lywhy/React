import './button.css'

export default function Button({ text, onClick }) {
    return (
        <button className={"button-primary"} onClick={(event) => onClick(event)}>{text}</button>
    )
}
