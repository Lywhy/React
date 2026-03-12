import { Bookmark, LogIn, User } from "lucide-react";
import styles from './Header.module.css'
import cn from 'classnames'
import { useEffect, useState } from "react";
import Button from "../../Button/Button";

export default function Header() {
    const [isLog, setIsLog] = useState(false);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const hasLoggedInUser = users.some(user => user.isLogined);
        setIsLog(hasLoggedInUser);
    }, []);

    const handleLogout = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        const updatedUsers = users.map(user => ({
            ...user,
            isLogined: false
        }));

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setIsLog(false);
    };

    return (
        <header>
            <div>
                <a href="#"><Bookmark color="white" /></a>
            </div>
            <div className={cn(styles["links"])}>
                <a href="#">Поиск фильмов</a>
                <a href="#">Мои фильмы</a>
                {!isLog ?
                    <div className={cn(styles["link-icon"])}>
                        <a href="#">Войти</a>
                        <LogIn color="white" />
                    </div> :
                    <>
                        <div className={cn(styles["link-icon"])}>
                            <a href="#">{JSON.parse(localStorage.getItem('users')).find(user => user.isLogined === true).name}</a>
                            <User color="white" />
                        </div>
                        <Button text={"Выйти"} onClick={handleLogout} />
                    </>
                }
            </div>
        </header>
    )
}
