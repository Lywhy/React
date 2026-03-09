import { Star, ThumbsUp } from "lucide-react";
import './card.css'

export default function Card({ item }) {
    return (
        <div className="card-wrapper">
            <div className="image-info">
                <img src={item.imageSrc} alt="photo" />
                <span className="image-fav"><Star /> {item.countFav}</span>
            </div>
            <div className="card-title">{item.title}</div>
            <div className="card-fav"><ThumbsUp /> <span>В избранное</span></div>
        </div>
    )
}
