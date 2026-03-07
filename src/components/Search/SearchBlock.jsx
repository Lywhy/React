import Button from "../Button/Button";
import Input from "../Input/Input";
import { Search } from 'lucide-react';
import './search.css'
import { useState } from "react";

export default function SearchBlock() {
    const [text, setText] = useState('')

    function handleChangeText(event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Поиск...')
        setText('')
    }

    return (
        <div className="search-wrapper">
            <Input text={text} placeholder="Введите название" onChange={handleChangeText}><Search color="white" /></Input>
            <Button text={"Сохранить"} onClick={handleSubmit} />
        </div>
    )
}
