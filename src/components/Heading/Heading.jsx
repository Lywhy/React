import styles from './Heading.module.css'
import cn from 'classnames'

export default function Heading({ title }) {
    return (
        <h1 className={cn(styles["heading-title"])}>{title}</h1>
    )
}
