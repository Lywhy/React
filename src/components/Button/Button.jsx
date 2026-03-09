import styles from './Button.module.css'
import cn from 'classnames'

export default function Button({ text, onClick }) {
    return (
        <button className={cn(styles["button-primary"])} onClick={(event) => onClick(event)}>{text}</button>
    )
}
