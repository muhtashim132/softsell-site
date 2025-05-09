'use client';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      
      {/* Header */}
      <header className="p-4 shadow-md flex justify-between items-center" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        <div className="flex-1 text-center">
          <div className="inline-block border border-blue-600 text-blue-600 text-2xl font-bold px-4 py-2 rounded bg-white dark:bg-gray-900">
            SoftSell
          </div>
        </div>
        <div className="absolute right-4">
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Sell Your Unused Software Licenses</h1>
        <p className="text-lg mb-6">SoftSell helps you turn unused software into cash — quickly and safely.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Sell My Licenses</button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
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
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ['⚡', 'Fast Process', 'Quick valuation and payment turnaround.'],
            ['🔒', 'Secure', 'Your data and licenses are safe with us.'],
            ['💼', 'Trusted by Businesses', 'Join hundreds of companies who trust SoftSell.'],
            ['📞', 'Support', 'Friendly team ready to help anytime.'],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="p-4 rounded shadow text-center" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
              <div className="text-4xl mb-2">{icon}</div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
            <p>&quot;SoftSell made it incredibly easy to offload our old licenses. Great value!&quot;</p>
            <p className="mt-4 font-semibold">— Alex Turner, CTO, TechCorp</p>
          </div>
          <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
            <p>"We recovered thousands in unused software with minimal effort. Highly recommended!"</p>
            <p className="mt-4 font-semibold">— Lisa Wong, Procurement, DataWorks</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-2xl mx-auto p-6 rounded shadow space-y-4" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
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
