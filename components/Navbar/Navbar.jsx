import Search from '@/components/Search/Search'
import './navbar.css'
import Image from "next/image"
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="navbar gap-2">
            <Link href={'/'} className='flex gap-0 items-center'>
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
            </Link>
            <div className='w-full text-center'>
                <Search />
            </div>
            <div>
               <h1 className='bg-gray-300 text-gray-500 text-sm rounded-full p-2'>GV</h1>
            </div>
        </header>
    )
}