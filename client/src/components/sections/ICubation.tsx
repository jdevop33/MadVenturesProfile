import { Zap, Globe, TrendingUp } from "lucide-react";

const ICubation = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "Evaluation of the startup's technology, market potential, and team capabilities.",
    },
    {
      step: 2,
      title: "Resource Allocation",
      description: "Strategic funding and resources provided based on specific needs.",
    },
    {
      step: 3,
      title: "Mentorship & Guidance",
      description: "Ongoing support from industry experts and experienced entrepreneurs.",
    },
    {
      step: 4,
      title: "Global Market Access",
      description: "Facilitation of international business connections, particularly in Asia Pacific.",
    },
    {
      step: 5,
      title: "Scaling & Growth",
      description: "Strategic planning and support for sustainable business expansion.",
    },
  ];

  const badges = [
    {
      text: "Innovative",
      icon: <Zap className="h-4 w-4 mr-1" />,
    },
    {
      text: "Global",
      icon: <Globe className="h-4 w-4 mr-1" />,
    },
    {
      text: "Efficient",
      icon: <TrendingUp className="h-4 w-4 mr-1" />,
    },
  ];

  return (
    <section id="icubation" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">I-Cubation Process</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary approach to startup incubation over the Internet
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl shadow-md overflow-hidden p-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">What is I-Cubation?</h3>
                <p className="text-gray-600 mb-4">
                  I-Cubator is a word coined by Mad Ventures that describes the incubation process of high-tech companies over the Internet.
                </p>
                <p className="text-gray-600 mb-4">
                  Unlike traditional incubation methods, I-cubation allows startups to receive the benefits of incubation without the need to physically relocate.
                </p>
                <div className="mt-6">
                  {badges.map((badge, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 ml-2 first:ml-0">
                      {badge.icon}
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">The I-Cubation Process</h3>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="bg-white rounded-lg shadow-sm p-4 flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICubation;
