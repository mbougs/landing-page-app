export default function Component2() {
  return (
    <div id="comp2">
        <div className="comp2-header">
            <h1 className="inline text-3xl font-serif font-bold">Grow your Impact</h1>
            <button className="funders">For Funders</button>
            <button className="projects">For Projects/Anyone</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <section className="rounded">
            <h3 className="font-serif font-bold">Participate In Ongoing Pots</h3>
            <p>Participate in existing funding rounds to reach a wider audience & access early stage capital</p>
            <p>Apply to pots</p>
          </section>
          <section className="rounded">
            <h3 className="font-serif font-bold">Create Your Own Campaigns</h3>
            <span className="rounded-full py-3 px-6">new</span>
            <p>Launch custom campaigns for specific funding needs with built-in goals and secure funding.</p>
            <p>Launch Campaigns</p>
          </section>
          <section className="rounded">
            <h3 className="font-serif font-bold">Curate Your Ecosystem</h3>
            <span className="rounded-full py-3 px-6">new</span>
            <p>Create on chain lists of your favorite projects, and build your own discovery portal.</p>
            <p>Create List</p>
          </section>
          <section className="rounded">
            <h3 className="font-serif font-bold">Transparent Fundraising</h3>
            <p>Build trust with your supporters through clear financial reporting.</p>
            <p>Launch App</p>
          </section>
          <section className="rounded">
            <h3 className="font-serif font-bold">Direct Donations</h3>
            <p>Receive direct contributions to support your initiative.</p>
            <p>Launch App</p>
            <svg class="rtl:rotate-45 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
          </section>
          <section className="rounded">
            <h3 className="font-serif font-bold">Easy-To-Use-Platform</h3>
            <p>Effortlessly manage your Fundraising efforts.</p>
            <p>Launch App</p>
          </section>
        </div>
    </div>
  )
}
