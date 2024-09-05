import Link from "next/link";

export default function Component5() {
  return (
    <div id="comp5">
      <div className="subscribe">
        <h3>Subscribe to Receive Updates</h3>
        <form>            
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
        </form>
      </div>
        <div className="sides">
            <div className="side-1">
                <h3 className="font-bold font-serif mb-1">The Free, Open Funding Stack for Public Goods</h3>
                <p className="text-sm">Build open source end to end tools for anyone to create their own funding solution</p>
            </div>
            <div className="side-2">
                <section>
                    <h6>Start here</h6>
                    <ul>
                        <li>Donate</li>
                        <li>Create Project</li>
                        <li>View Rounds</li>
                    </ul>
                </section>
                <section className="mt-14">
                    <h6>Products</h6>
                    <ul>
                        <li>AI-PGF</li>
                        <li>Agentoor</li>
                        <li>dePotlock App</li>
                        <li>Potlock App</li>
                        <li>Nadabot</li>
                        <li>Grantpicks</li>
                    </ul>
                </section>
                <section className="mt-14">
                    <h6>Learn</h6>
                    <ul>
                        <li>Docs</li>
                        <li>Github</li>
                        <li>Blog</li>
                        <li>Backlog</li>
                        <li>Roadmap</li>
                    </ul>
                </section>
                <section>
                    <h6>Get involved</h6>
                    <ul>
                        <li>Volunteer</li>
                        <li>Contribute</li>
                        <li>Contact</li>
                    </ul>
                </section>
            </div>
        </div>
        <footer>
            <div className="footer-items">
                <div className="footer-items1 text-sm">
                    <Link href="#" className="pr-3">Privacy Policy</Link>
                    <Link href="#">Terms of use</Link>
                </div>
                <div className="footer-items2 flex">
                    <div className="footer-icons">
                        <span>ICON1</span>
                        <span>ICON2</span>
                        <span>ICON3</span>
                        <span>ICON4</span>
                        <span>ICON5</span>
                        <span>ICON6</span>
                        <span>ICON7</span>
                        <span>ICON8</span>
                    </div>
                    <Link href="#"><button>Launch app</button></Link>
                </div>
            </div>
        </footer>
    </div>
  )
}
