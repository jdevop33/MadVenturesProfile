import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, DollarSign, Globe } from "lucide-react";

const Company = () => {
  const focusAreas = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Research & Development",
      description: "Supporting innovative technology solutions and providing resources for growth and development.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Venture Capital",
      description: "Providing strategic funding to early-stage companies with high growth potential.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Connections",
      description: "Facilitating business opportunities between Canada and the Asia Pacific region.",
    },
  ];

  return (
    <section id="company" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">MAD Ventures</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering a breakthrough model of startup investment to Western Canada
          </p>
        </div>

        <Card className="overflow-hidden accent-top">
          <CardContent className="p-8">
            <p className="text-gray-600 mb-6">
              MAD Ventures, Inc., is pioneering a breakthrough model of startup investment to Western Canada. Through proper leveraging of Internet technologies, we developed a system to incubate early-stage innovators without the need for the startup companies to physically relocate. This minimizes downtime and business interruption, which have been traditional issues in incubation. We call our process "I-cubation."
            </p>
            <p className="text-gray-600">
              I-cubation, as defined by MAD Ventures, is more than just providing money and management expertise to growing companies. We have extensive business connections around the world and, in particular, have a keen interest in helping Canadian businesses secure business opportunities in the Asia Pacific region. By ensuring the right mix of R&D, Venture Capital, and business development, MAD Venture's I-cubation process ensures promising innovators have the best chance of realizing their visions.
            </p>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {focusAreas.map((area, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="text-primary mb-3">
                      {area.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{area.title}</h4>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Company;
