import Link from "next/link";

export default function Component2() {
  return (
    <div id="comp2">
        <div className="comp2-header">
            <h1 className="inline text-3xl font-serif font-bold">Grow your Impact</h1>
            <button className="funders">For Funders</button>
            <button className="projects">For Projects/Anyone</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Link href="#"><section>
            <h3 className="font-serif font-bold">Participate In Ongoing Pots</h3>
            <p className="text-sm">Participate in existing funding rounds to reach a wider audience & access early stage capital</p>
            <span className="grid grid-cols-2">
              <p className="text-xs">Apply to pots</p>
              <span className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                  </svg>
                </span>
            </span>
          </section></Link>
          <Link href="#"><section>
            <h3 className="font-serif font-bold">Create Your Own Campaigns<span className="new-badge">New</span></h3>
            <p className="text-sm">Launch custom campaigns for specific funding needs with built-in goals and secure funding.</p>
            <span className="grid grid-cols-2">
              <p className="text-xs">Launch Campaigns</p>
              <span className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </section></Link>
          <Link href="#"><section>
            <h3 className="font-serif font-bold">Curate Your Ecosystem<span className="new-badge">New</span></h3>
            <p className="text-sm">Create on chain lists of your favorite projects, and build your own discovery portal.</p>
            <span className="grid grid-cols-2">
              <p className="text-xs">Create List</p>
              <span className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                  </svg>
              </span>
            </span>
          </section></Link>
          <Link href="#"><section>
            <h3 className="font-serif font-bold">Transparent Fundraising<span className="new-badge">New</span></h3>
            <p className="text-sm">Build trust with your supporters through clear financial reporting.</p>
            <span className="grid grid-cols-2">
              <p className="text-xs">Launch App</p>
              <span className="svg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                      </svg>
                </span>
            </span>
          </section></Link>
          <Link href="#"><section>
            <h3 className="font-serif font-bold">Direct Donations</h3>
            <p className="text-sm">Receive direct contributions to support your initiative.</p>
            <span className="grid grid-cols-2">
              <p className="text-xs justify-self-start">Launch App</p>
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </section></Link>
          <Link href="#"><section>
            <h3 className="font-serif font-bold">Easy-To-Use-Platform</h3>
            <p className="text-sm">Effortlessly manage your Fundraising efforts.</p>
            <span className="grid grid-cols-2">
              <p className="text-xs">Launch App</p>
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </section></Link>
        </div>
    </div>
  )
}
