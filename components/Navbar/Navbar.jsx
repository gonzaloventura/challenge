import Search from '@/components/Search/Search'
import './navbar.css'
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="navbar">
            <div className='flex gap-0 items-center'>
                <Image
                    src={'/assets/logo35x35.png'}
                    width={24}
                    height={24}
                    alt='Logo'
                />
                <Image
                    src={'/assets/unimap_blanco.svg'}
                    width={100}
                    height={100}
                    alt='Unimap'
                />
            </div>
            <div>
                <Search />
            </div>
            <div>
               <h1 className='bg-gray-300 text-gray-500 text-sm rounded-full p-2'>GV</h1>
            </div>
        </header>
    )
}