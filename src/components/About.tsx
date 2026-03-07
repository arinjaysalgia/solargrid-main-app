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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About <span className="text-orange-500">SolarGrid</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Based in the heart of Indore, SolarGrid is a leading solar EPC (Engineering, Procurement, and Construction) company dedicated to making clean energy accessible to everyone.
              </p>

              <p>
                We specialize in designing and installing high-performance solar rooftop systems for residential, commercial, and industrial clients. Our end-to-end solutions ensure a seamless transition to renewable energy.
              </p>

              <p>
                As authorized distributors of Waaree and trusted partners with Adani Solar and Tata Power Solar, we bring you the best technology and support in the industry.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mt-8">
                <p className="text-blue-900 font-semibold mb-2">Our Commitment</p>
                <p className="text-gray-600">
                  Every project is backed by our promise of quality, reliability, and exceptional after-sales service. We don't just install solar panels – we build energy solutions that last decades.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-200 rounded-3xl blur-3xl opacity-40"></div>
            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 text-center border border-orange-100">
                  <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-500 text-sm">Happy Customers</div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2MW+</div>
                  <div className="text-gray-500 text-sm">Installed Capacity</div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 text-center border border-orange-100">
                  <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-gray-500 text-sm">Satisfaction Rate</div>
                </div>
              </div>

              <div className="mt-8 bg-blue-900 rounded-xl p-6 text-center">
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
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-md transition-all group shadow-sm"
            >
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-blue-900 font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-500 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
