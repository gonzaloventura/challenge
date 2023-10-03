'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import './search.css'

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter()

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isNaN(parseInt(searchValue))) {
            router.push(`/machines/${parseInt(searchValue)}`)
        } else {
            router.push(`/machines?q=${searchValue}`)
        }
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="">
            <input onChange={handleChange} id='buscador' className="search" type="text" placeholder='Buscar máquina'></input>
            <input type="submit" hidden />
        </form>
    )
}