import { Star, ThumbsUp } from "lucide-react"
import styles from './Card.module.css'
import cn from 'classnames'

export default function Card({ item }) {
    return (
        <div className={cn(styles["card-wrapper"])}>
            <div className={cn(styles["image-info"])}>
                <img src={item.imageSrc} alt="photo" />
                <span className={cn(styles["image-fav"])}><Star /> {item.countFav}</span>
            </div>
            <div className={cn(styles["card-title"])}>{item.title}</div>
            <div className={cn(styles["card-fav"])}><ThumbsUp /> <span>В избранное</span></div>
        </div>
    )
}
