import Link from "next/link";
import logo1 from "../../public/logo1.png"
import logo2 from "../../public/logo2.png"
import logo3 from "../../public/logo3.png"
import logo4 from "../../public/logo4.jpg"
import logo5 from "../../public/logo5.png"
import logo6 from "../../public/logo6.png"
import Image from "next/image";

export default function Component1() {
    const logos = [ logo1, logo2, logo3, logo4, logo5, logo6 ]
  return (
    <>
    <div id="comp1">
        <div className="landing topic">
            <h1>The Free, Open Funding Stack for Public Goods.</h1>
        </div>
        <div className="landing box">
            <p className="my-3 text-center">Build open source end to end tools for anyone to create their own funding solution.</p>
            <div className="button">
                <Link href="#"><span className="btn get-started">Get Started</span></Link>
                <Link href="#"><span className="btn learn-more">Learn More</span></Link>
            </div>
            <div className="inner-box">
                <p>### 200+ Active Projects ### $172,473.35 donations</p>
                <p>### 1,100 Unique donors</p>
            </div>
        </div>
    </div>
    <div className="footer">
        <h4 className="text-center pb-4">
            <Link href="#">ALL</Link>| 
            <Link href="#">BACKERS</Link>
            <Link href="#">BUILDERS</Link>
            <Link href="#">PARTNERS</Link>
        </h4>
        <div className="partners">
        {
            logos.map((logo) => (
                <span>
            <Image
            src={logo}
            width={50}
            alt="logo"
            />
            </span>)   
        )}
        <span><Image src={logo1} width={50} alt="logo" /></span>
        <span><Image src={logo2} width={50} alt="logo" /></span>
        <span><Image src={logo3} width={50} alt="logo" /></span>
        {
         logos.map((logo) => (
            <span>
            <Image
            src={logo}
            width={50}
            alt="logo"
            />
            </span>)   
        )}
        </div>
    </div>
    </>
  )
}
