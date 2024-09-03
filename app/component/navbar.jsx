import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Link href="#" className='flex items-center space-x-2'>
        <Image 
        src={logo}
        alt=''
        width={50}
        quality={100}
        placeholder='blur' />
        <h1 className='font-extrabold'>POTLOCK</h1>
        </Link>
        <Link href="#">For Projects/Anyone</Link>
        <Link href="#">For Funders</Link>
        <Link href="#">Our Products</Link>
        <Link href="#">Testimonials</Link>
        <Link className="relative" href="#">AI-PGF
        <div className="badge" />
        </Link>
        <Link href="#"><span className="nav-button">Launch App</span></Link>
     </nav>
  )
}
