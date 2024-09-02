import Link from "next/link";

export default function Component1() {
  return (
    <div id="comp1">
        <div className="landing topic">
            <h1>The Free, Open Funding Stack for Public Goods.</h1>
        </div>
        <div className="landing box">
            <p className="my-3">Build open source end to end tools for anyone to create their own funding solution.</p>
            <div className="button">
                <Link href="#"><span className="button get-start">Get Started</span></Link>
                <Link href="#"><span className="button learn-more">Learn More</span></Link>
            </div>
            <div className="box">
                Lorem ipsum dolor islet Lorem ipsum dolor islet Lorem ipsum dolor islet Lorem ipsum dolor islet
            </div>
        </div>
        <div>
            <h4>My Footer</h4>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
        </div>
    </div>
  )
}
