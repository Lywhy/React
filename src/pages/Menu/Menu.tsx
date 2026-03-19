import Headling from "../../components/Headling/Headling";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <>
            <div className={styles['head']}>
                <Headling>Menu</Headling>
                <Search />
            </div>
            <div>
                <ProductCard id={1} name={'Наслаждение'} description={"Салями, руккола, помидоры, оливки"} rating={4.5} price={300} image="../../../public/pleasure.png" />
                <ProductCard id={2} name={'Наслаждение'} description={"Салями, руккола, помидоры, оливки"} rating={4.5} price={300} image="../../../public/pleasure.png" />
            </div>
        </>
    )
}
