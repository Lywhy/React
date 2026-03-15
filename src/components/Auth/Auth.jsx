import { useContext, useState } from "react";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UserContext } from "../../context/UserContext/UserContext";

export default function Auth() {
    const { refreshUser } = useContext(UserContext);
    const [loginName, setLoginName] = useState('');
    const [dataUsers, setDataUsers] = useState([]);

    function handleAuth(e) {
        e.preventDefault();

        const trimmedName = loginName.trim();
        setLoginName('')
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
        refreshUser()
    }

    return (
        <form>
            <Heading title={"Вход"} />
            <Input text={loginName} placeholder={"Ваше имя"} onChange={(e) => setLoginName(e.target.value)} />
            <Button text={"Войти в профиль"} onClick={(e) => handleAuth(e)} />
        </form>
    )
}
