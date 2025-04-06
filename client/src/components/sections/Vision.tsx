import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Lightbulb, Star } from "lucide-react";

const Vision = () => {
  const principles = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      text: "Being professional"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      text: "Having fun"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      text: "Being brilliant"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      text: "Did we mention having fun"
    }
  ];

  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision & Mission</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden shadow-md border-t-4 border-primary">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-lg text-gray-700">
                To put Victoria on the global technology map.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-md border-t-4 border-primary">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-lg text-gray-700">
                To help create $100 Million technology companies on Vancouver Island.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 overflow-hidden shadow-md">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">MAD Ventures' Principles and Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4 flex items-center shadow-sm hover:shadow transition-shadow"
                >
                  <div className="mr-3">{principle.icon}</div>
                  <span className="text-gray-700 font-medium">{principle.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Vision;