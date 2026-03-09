import { Bookmark, LogIn } from "lucide-react";
import styles from './Header.module.css'
import cn from 'classnames'

export default function Header() {
    return (
        <header>
            <div>
                <a href="#"><Bookmark color="white" /></a>
            </div>
            <div className={cn(styles["links"])}>
                <a href="#">Поиск фильмов</a>
                <a href="#">Мои фильмы</a>
                <div className={cn(styles["link-log"])}>
                    <a href="#">Войти</a>
                    <LogIn color="white" />
                </div>
            </div>
        </header>
    )
}
