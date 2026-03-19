import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import { ShoppingBasket, SquareArrowRightExit, SquareMenu } from 'lucide-react'
import Button from "../../components/Button/Button";
import cn from 'classnames'

export default function Layout() {
    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img src="../../../public/Avatar.svg" alt="avatar" />
                    <div className={styles['name']}>Test</div>
                    <div className={styles['email']}>@mail.ru</div>
                </div>
                <div className={styles['menu']}>
                    <NavLink to={"/"} className={({ isActive }) => cn(styles['link'], { [styles.active]: isActive })}>
                        <SquareMenu />
                        Меню
                    </NavLink>
                    <NavLink to={"/cart"} className={({ isActive }) => cn(styles['link'], { [styles.active]: isActive })}>
                        <ShoppingBasket />
                        Корзина
                    </NavLink>
                </div>
                <Button className={styles['exit']}>
                    <SquareArrowRightExit />
                    Выйти
                </Button>
            </div>
            <div className={styles['content']}>
                <Outlet />
            </div>
        </div>
    )
}
