import styles from './Paragraph.module.css'
import cn from 'classnames'

export default function Paragraph({ text }) {
    return (
        <p className={cn(styles["paragraph"])}>{text}</p>
    )
}
