import Card from "../Card/Card";
import imageOne from "../../../assets/1+1.jpg"
import imageTwo from "../../../assets/gentelemen.png"
import imageThree from "../../../assets/shou.png"
import './cardList.css'

const testData = [
    {
        title: '1+1 (2011)',
        countFav: 2764406,
        imageSrc: imageOne,
        favourites: false
    },
    {
        title: 'Джентльмены (2019)',
        countFav: 2452240,
        imageSrc: imageTwo,
        favourites: false
    },
    {
        title: 'Побег из Шоушенка (1994)',
        countFav: 1117473,
        imageSrc: imageThree,
        favourites: false
    }
]

export default function CardList() {
    return (
        <>
            <div className="card-list">
                {testData.length === 0 ? <div>Тут ничего нет</div> : testData.map(item => {
                    return (
                        <Card item={item} />
                    )
                })}
            </div>
        </>
    )
}
