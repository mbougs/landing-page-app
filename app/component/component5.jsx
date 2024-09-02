import Link from "next/link";

export default function Component5() {
  return (
    <>
        <div>
            <h3>Subscribe to Receive Updates</h3>
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
        </div>
        <div className="flex">
            <Link href="#">POTLOCK</Link>
            <div className="grid grid-cols-4 grid-4">
                <section>
                    <h6>Title1</h6>
                    <ul>
                        <li>list 1</li>
                        <li>list 2</li>
                        <li>list 3</li>
                    </ul>
                </section>
                <section>
                    <h6>Title2</h6>
                    <ul>
                        <li>list 1</li>
                        <li>list 2</li>
                        <li>list 3</li>
                        <li>list 4</li>
                        <li>list 5</li>
                        <li>list 6</li>
                    </ul>
                </section>
                <section>
                    <h6>Title3</h6>
                    <ul>
                        <li>list 1</li>
                        <li>list 2</li>
                        <li>list 3</li>
                        <li>list 4</li>
                        <li>list 5</li>
                    </ul>
                </section>
                <section>
                    <h6>Title4</h6>
                    <ul>
                        <li>list 1</li>
                        <li>list 2</li>
                        <li>list 3</li>
                    </ul>
                </section>
            </div>
        </div>
    </>
  )
}
