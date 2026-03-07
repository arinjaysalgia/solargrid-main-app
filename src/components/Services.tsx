import { Home, Building2, Factory, CheckCircle, Wrench, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Transform your home with clean energy. Reduce electricity bills by up to 80% with our customized rooftop solar solutions.',
      features: ['Custom Design', '25-year Warranty', 'Net Metering Support', 'EMI Options Available']
    },
    {
      icon: Building2,
      title: 'Commercial Solutions',
      description: 'Power your business with sustainable energy. Achieve energy independence and improve your bottom line.',
      features: ['ROI Analysis', 'Tax Benefits', 'Minimal Downtime', 'Corporate ESG Goals']
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Large-scale solar installations for manufacturing and industrial facilities. Reduce operational costs significantly.',
      features: ['High Capacity Systems', 'Load Management', 'Remote Monitoring', 'Predictive Maintenance']
    }
  ];

  const process = [
    { step: '01', title: 'Site Assessment', desc: 'Free evaluation of your property' },
    { step: '02', title: 'Custom Design', desc: 'Tailored solar solution for your needs' },
    { step: '03', title: 'Installation', desc: 'Professional setup by certified team' },
    { step: '04', title: 'Monitoring', desc: 'Ongoing support and maintenance' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            End-to-end solar solutions tailored to your specific requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/10 shadow-sm"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Our Installation <span className="text-orange-500">Process</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-orange-500"></div>
                )}

                <div className="relative text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <Wrench className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-blue-900 font-semibold mb-2">Expert Installation</h4>
            <p className="text-gray-500 text-sm">Certified technicians with years of experience</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-blue-900 font-semibold mb-2">Performance Monitoring</h4>
            <p className="text-gray-500 text-sm">Real-time tracking of your solar system</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h4 className="text-blue-900 font-semibold mb-2">25-Year Warranty</h4>
            <p className="text-gray-500 text-sm">Long-term protection for your investment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
