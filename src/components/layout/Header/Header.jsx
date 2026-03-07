import { Bookmark, LogIn } from "lucide-react";
import './header.css'


export default function Header() {
    return (
        <header>
            <div>
                <a href="#"><Bookmark color="white" /></a>
            </div>
            <div className="links">
                <a href="#">Поиск фильмов</a>
                <a href="#">Мои фильмы</a>
                <div className="link-log">
                    <a href="#">Войти</a>
                    <LogIn color="white" />
                </div>
            </div>
        </header>
    )
}
