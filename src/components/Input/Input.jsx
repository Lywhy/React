import styles from './Input.module.css'
import cn from 'classnames'

export default function Input({ text, placeholder, onChange, children }) {
    return (
        <form className={cn(styles["input-wrapper"])}>
            {children}
            <input type="text" value={text} placeholder={placeholder} onChange={(event) => onChange(event)} />
        </form>
    )
}
