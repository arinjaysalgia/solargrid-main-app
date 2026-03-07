import { MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

export default function Hero() {
  const [form, setForm] = useState({ full_name: '', mobile: '', pincode: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.full_name.trim()) return setErrorMsg('Please enter your full name.');
    if (!/^\d{10}$/.test(form.mobile.trim())) return setErrorMsg('Please enter a valid 10-digit mobile number.');
    if (!/^\d{6}$/.test(form.pincode.trim())) return setErrorMsg('Please enter a valid 6-digit pincode.');

    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
      setStatus('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="home" className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=218+Sukhdev+Nagar+Main+Rd+Airport+Rd+Anjani+Nagar+Indore+Madhya+Pradesh+452005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-300 rounded-full px-4 py-2 hover:bg-orange-200 transition-colors"
            >
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-orange-600 text-sm font-medium">Indore's Trusted Solar EPC Partner</span>
            </a>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
              Empowering India with
              <span className="text-orange-500"> Clean Energy</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              End-to-end solar rooftop solutions for homes, commercial spaces, and industries.
              Transform sunlight into savings with SolarGrid's expert installation and trusted partnerships.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-sm hover:bg-blue-900 hover:text-white transition-all"
              >
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">2MW+</div>
                <div className="text-sm text-gray-500">Installed Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-500">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-200 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-blue-900">Thank You!</h3>
                  <p className="text-gray-500">We'll call you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Get Free Consultation</h3>
                  <p className="text-gray-500 text-sm mb-6">Our expert will contact you within 24 hours</p>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-blue-900 font-medium text-sm mb-1">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-900 font-medium text-sm mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-900 font-medium text-sm mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        placeholder="Enter 6-digit pincode"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                    {errorMsg && (
                      <p className="text-red-500 text-sm">{errorMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors shadow-md shadow-orange-500/30"
                    >
                      {status === 'loading' ? 'Submitting...' : 'Get Free Consultation'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
