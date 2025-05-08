// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header / Logo */}
      <header className="p-4 bg-white shadow-md flex justify-center">
        <div className="text-xl font-bold text-blue-600">SoftSell</div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Sell Your Unused Software Licenses</h1>
        <p className="text-lg mb-6">SoftSell helps you turn unused software into cash — quickly and safely.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Sell My Licenses</button>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">📤</div>
            <h3 className="font-semibold mb-2">Upload License</h3>
            <p>Send us details about your software license.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-semibold mb-2">Get Valuation</h3>
            <p>We analyze the resale value and give you an offer.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-semibold mb-2">Get Paid</h3>
            <p>Accept the offer and receive payment quickly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h4 className="font-semibold mb-1">Fast Process</h4>
            <p>Quick valuation and payment turnaround.</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="text-4xl mb-2">🔒</div>
            <h4 className="font-semibold mb-1">Secure</h4>
            <p>Your data and licenses are safe with us.</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="text-4xl mb-2">💼</div>
            <h4 className="font-semibold mb-1">Trusted by Businesses</h4>
            <p>Join hundreds of companies who trust SoftSell.</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="text-4xl mb-2">📞</div>
            <h4 className="font-semibold mb-1">Support</h4>
            <p>Friendly team ready to help anytime.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded shadow">
          <p>&quot;SoftSell made it incredibly easy to offload our old licenses. Great value!&quot;</p>
            <p className="mt-4 font-semibold">— Alex Turner, CTO, TechCorp</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
          <p>&quot;We recovered thousands in unused software with minimal effort. Highly recommended!&quot;</p>
            <p className="mt-4 font-semibold">— Lisa Wong, Procurement, DataWorks</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-2xl mx-auto bg-white p-6 rounded shadow space-y-4">
          <input className="w-full p-2 border rounded" type="text" placeholder="Name" required />
          <input className="w-full p-2 border rounded" type="email" placeholder="Email" required />
          <input className="w-full p-2 border rounded" type="text" placeholder="Company" />
          <select className="w-full p-2 border rounded" required>
            <option value="">License Type</option>
            <option>Microsoft</option>
            <option>Adobe</option>
            <option>Autodesk</option>
            <option>Other</option>
          </select>
          <textarea className="w-full p-2 border rounded" rows={4} placeholder="Message" required></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
