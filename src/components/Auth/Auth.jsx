import { useState } from "react";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Auth() {
    const [loginName, setLoginName] = useState('');

    const [dataUsers, setDataUsers] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('users') || '[]');
        } catch {
            return [];
        }
    });

    function handleAuth() {
        const trimmedName = loginName.trim();
        if (!trimmedName) return;

        const userIndex = dataUsers.findIndex(user => user.name === trimmedName);

        if (userIndex === -1) {
            const newUser = { name: trimmedName, isLogined: true };
            const updatedUsers = [...dataUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setDataUsers(updatedUsers);
        } else {
            const updatedUsers = dataUsers.map(user =>
                user.name === trimmedName
                    ? { ...user, isLogined: true }
                    : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setDataUsers(updatedUsers);
        }
    }

    return (
        <form>
            <Heading title={"Вход"} />
            <Input text={loginName} placeholder={"Ваше имя"} onChange={(e) => setLoginName(e.target.value)} />
            <Button text={"Войти в профиль"} onClick={handleAuth} />
        </form>
    )
}
