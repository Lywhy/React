import './input.css'

export default function Input({ text, placeholder, onChange ,children }) {
    return (
        <form className="input-wrapper">
            {children}
            <input type="text" value={text} placeholder={placeholder} onChange={(event) => onChange(event)}/>
        </form>
    )
}
