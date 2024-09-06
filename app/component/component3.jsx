import Image from "next/image";
import logo from '../../public/robot-logo.png'

export default function Component3() {
  return (
    <>
    <div id="comp3">
        <div className="centered">
            <Image src={logo}
            width={120}
            alt="logo"/>
            <div className="info">
              <h2>AI/Powered/</h2>
              <h2>Public Goods Funding</h2>
              <p>A Proactive Grants Program and Movement to build</p>
              <p>towards a <strong>Funding AGR</strong></p>
            </div>
            <button className="learn-more">Learn More</button>
        </div>
    </div>
    </>
  )
}
