import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Image 
        src={logo}
        alt=''
        width={50}
        quality={100}
        placeholder='blur' />
        <h1>POTLOCK</h1>
        <Link href="#">Link 1</Link>
        <Link href="#">Link 2</Link>
        <Link href="#">Link 3</Link>
        <Link href="#">Link 4</Link>
        <Link href="#">Link 5</Link>
        <Link href="#"><span className='pill'>Launch App</span></Link>
     </nav>
  )
}
