import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'To accelerate India\'s transition to clean energy through innovative solar solutions'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Building lasting relationships through exceptional service and support'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology for maximum energy efficiency'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Creating value for customers, communities, and the environment'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">SolarGrid</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Based in the heart of Indore, SolarGrid is a leading solar EPC (Engineering, Procurement, and Construction) company dedicated to making clean energy accessible to everyone.
              </p>

              <p>
                We specialize in designing and installing high-performance solar rooftop systems for residential, commercial, and industrial clients. Our end-to-end solutions ensure a seamless transition to renewable energy.
              </p>

              <p>
                As authorized distributors of Waaree and trusted partners with Adani Solar and Tata Power Solar, we bring you the best technology and support in the industry.
              </p>

              <div className="bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-orange-500/30 rounded-xl p-6 mt-8">
                <p className="text-white font-semibold mb-2">Our Commitment</p>
                <p className="text-gray-300">
                  Every project is backed by our promise of quality, reliability, and exceptional after-sales service. We don't just install solar panels – we build energy solutions that last decades.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-900/50 to-black border border-orange-500/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/50 rounded-xl p-6 text-center border border-orange-500/20">
                  <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 text-center border border-blue-500/20">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50MW+</div>
                  <div className="text-gray-400 text-sm">Installed Capacity</div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 text-center border border-blue-500/20">
                  <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 text-center border border-orange-500/20">
                  <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction Rate</div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl p-6 text-center">
                <p className="text-white font-semibold text-lg">Indore's Most Trusted Solar Partner</p>
                <p className="text-white/80 text-sm mt-2">Certified by ISO & Government of India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-black/50 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500 transition-all group"
            >
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
