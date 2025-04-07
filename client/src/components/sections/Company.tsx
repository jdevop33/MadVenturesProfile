import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, DollarSign, Globe, Calendar, Building, Target, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  
  const companyStats = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      label: "Founded",
      value: "2002",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      label: "Headquarters",
      value: "Victoria, Canada",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      label: "Investment Focus",
      value: "Sector Agnostic",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      label: "Classification",
      value: "Accelerator & Incubator",
    },
  ];
  
  const investmentSectors = ["Enterprise Applications", "High Tech", "HealthTech"];

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

        <Card className="overflow-hidden accent-top mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              <div className="lg:w-2/3">
                <p className="text-gray-600 mb-6">
                  MAD Ventures, Inc., is pioneering a breakthrough model of startup investment to Western Canada. Through proper leveraging of Internet technologies, we developed a system to incubate early-stage innovators without the need for the startup companies to physically relocate. This minimizes downtime and business interruption, which have been traditional issues in incubation. We call our process "I-cubation."
                </p>
                <p className="text-gray-600">
                  I-cubation, as defined by MAD Ventures, is more than just providing money and management expertise to growing companies. We have extensive business connections around the world and, in particular, have a keen interest in helping Canadian businesses secure business opportunities in the Asia Pacific region. By ensuring the right mix of R&D, Venture Capital, and business development, MAD Venture's I-cubation process ensures promising innovators have the best chance of realizing their visions.
                </p>
              </div>

              <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Company Profile</h3>
                <div className="space-y-4">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3">{stat.icon}</div>
                      <div>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className="font-medium">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Sectors</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {investmentSectors.map((sector, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1.5">
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>

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
        
        <Card className="overflow-hidden accent-top">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Investments</h3>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-semibold text-lg">Innerspace</h4>
                  <p className="text-gray-600 text-sm">Virtual reality-based training systems for the life science industry</p>
                </div>
                <Badge>Series A</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-sm text-gray-600">Location: Austria</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-600">Investment Date: Feb 2024</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-600">Amount: $6.17M</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Company;
