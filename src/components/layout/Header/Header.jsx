import { Bookmark, LogIn, User } from "lucide-react";
import styles from './Header.module.css'
import cn from 'classnames'
import { useContext } from "react";
import Button from "../../Button/Button";
import { UserContext } from "../../../context/UserContext/UserContext";

export default function Header() {
    const { currentUser, refreshUser } = useContext(UserContext)

    const handleLogout = () => {
        const users = JSON.parse(localStorage.getItem('users'));

        const updatedUsers = users.map(user => {
            if (user.name === currentUser.name) {
                user.isLogined = false
            }
            return user
        })


        localStorage.setItem('users', JSON.stringify(updatedUsers));
        refreshUser()
    };

    return (
        <header>
            <div>
                <a href="#"><Bookmark color="white" /></a>
            </div>
            <div className={cn(styles["links"])}>
                <a href="#">Поиск фильмов</a>
                <a href="#">Мои фильмы</a>
                {!currentUser?.isLogined ?
                    <div className={cn(styles["link-icon"])}>
                        <a href="#">Войти</a>
                        <LogIn color="white" />
                    </div> :
                    <>
                        <div className={cn(styles["link-icon"])}>
                            <a href="#">{currentUser.name}</a>
                            <User color="white" />
                        </div>
                        <Button text={"Выйти"} onClick={handleLogout} />
                    </>
                }
            </div>
        </header>
    )
}
