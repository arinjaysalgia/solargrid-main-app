import { Award, Shield, Star } from 'lucide-react';

export default function Brands() {
  const brands = [
    {
      name: 'Waaree',
      status: 'Authorised Distributor',
      description: 'India\'s largest solar panel manufacturer with 12GW+ capacity',
      highlight: true
    },
    {
      name: 'Adani Solar',
      status: 'Trusted Partner',
      description: 'Premium quality solar modules with world-class efficiency'
    },
    {
      name: 'Tata Power Solar',
      status: 'Certified Partner',
      description: 'Legacy of excellence with cutting-edge solar technology'
    }
  ];

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 text-sm font-medium">Trusted Partnerships</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Premium <span className="text-orange-500">Brand Partners</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We collaborate with India's leading solar manufacturers to deliver the highest quality solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl shadow-sm ${
                brand.highlight
                  ? 'border-orange-500 hover:shadow-orange-500/20'
                  : 'border-gray-200 hover:border-blue-600 hover:shadow-blue-600/10'
              }`}
            >
              {brand.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured Partner</span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>

                <h3 className="text-3xl font-bold text-blue-900 mb-2">{brand.name}</h3>

                <div className="inline-block bg-orange-50 border border-orange-200 rounded-full px-4 py-1 mb-4">
                  <span className="text-orange-600 text-sm font-semibold">{brand.status}</span>
                </div>

                <p className="text-gray-600 leading-relaxed">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Why Choose Authorized Partners?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white font-semibold mb-2">Genuine Products</div>
              <p className="text-white/80 text-sm">Authentic solar panels with manufacturer warranty</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white font-semibold mb-2">Years Warranty</div>
              <p className="text-white/80 text-sm">Industry-leading warranty coverage</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Support</div>
              <p className="text-white/80 text-sm">Dedicated customer service team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
