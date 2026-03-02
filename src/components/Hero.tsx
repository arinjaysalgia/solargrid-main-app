import { ArrowRight, MapPin, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm">Indore's Trusted Solar EPC Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Empowering India with
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent"> Clean Energy</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              End-to-end solar rooftop solutions for homes, commercial spaces, and industries.
              Transform sunlight into savings with SolarGrid's expert installation and trusted partnerships.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/10 transition-all"
              >
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50MW+</div>
                <div className="text-sm text-gray-400">Installed Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-900/50 to-black border border-orange-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-black/50 p-4 rounded-xl border border-orange-500/10">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Residential Solutions</h3>
                    <p className="text-gray-400 text-sm">Solar rooftops for homes with maximum efficiency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-black/50 p-4 rounded-xl border border-blue-500/10">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Commercial Projects</h3>
                    <p className="text-gray-400 text-sm">Scalable solutions for businesses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-black/50 p-4 rounded-xl border border-orange-500/10">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Industrial Scale</h3>
                    <p className="text-gray-400 text-sm">Large-scale installations for industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
