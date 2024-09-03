import Image from "next/image";
import logo from '../../public/logo.png'

export default function Component3() {
  return (
    <>
    <div id="comp3">
        <div className="items-center">
            <Image src={logo}
            width={42}
            alt="logo"/>
            <h2>AI/Powered/</h2>
            <h2>Public Goods Funding</h2>
            <p>A Proactive Grants Program and Movement to build</p>
            <p>towards a Funding AGR</p>
            <button>Learn More</button>
        </div>
    </div>
    </>
  )
}
