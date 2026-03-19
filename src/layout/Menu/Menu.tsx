import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <div>
                <Link to={"/"}>Меню</Link>
                <Link to={"/cart"}>Корзина</Link>
            </div>
            <Outlet />
        </div>
    )
}
