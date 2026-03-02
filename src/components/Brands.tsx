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
    <section id="brands" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm">Trusted Partnerships</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Brand Partners</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We collaborate with India's leading solar manufacturers to deliver the highest quality solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br from-blue-950/50 to-black rounded-2xl p-8 border-2 transition-all hover:shadow-2xl ${
                brand.highlight
                  ? 'border-orange-500 hover:shadow-orange-500/30'
                  : 'border-blue-500/20 hover:border-blue-500 hover:shadow-blue-500/20'
              }`}
            >
              {brand.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured Partner</span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500/20 to-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-orange-400" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{brand.name}</h3>

                <div className="inline-block bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-1 mb-4">
                  <span className="text-orange-400 text-sm font-semibold">{brand.status}</span>
                </div>

                <p className="text-gray-400 leading-relaxed">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-12 text-center">
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
