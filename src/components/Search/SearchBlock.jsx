import Button from "../Button/Button";
import Input from "../Input/Input";
import { Search } from 'lucide-react';
import { useState } from "react";
import styles from './Search.module.css'
import cn from 'classnames'

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
        <div className={cn(styles["search-wrapper"])}>
            <Input text={text} placeholder="Введите название" onChange={handleChangeText}><Search color="white" /></Input>
            <Button text={"Сохранить"} onClick={handleSubmit} />
        </div>
    )
}
