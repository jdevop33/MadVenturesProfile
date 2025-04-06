import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, GraduationCap } from "lucide-react";

const Biography = () => {
  const expertise = [
    "Technology Research",
    "Venture Capital",
    "Startup Incubation",
  ];

  const education = [
    "B.Sc, POSTECH (Korea)",
    "B.Com, University of Victoria (Canada)",
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Biography</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden accent-top">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Thomas Ahn</h3>
            <p className="text-gray-600 mb-6">
              Thomas is the founder and CEO of Mad Ventures, Inc. and directs the overall vision and operation of the company. He is an active entrepreneur, an expert in technology research and also in nurturing technology start-ups.
            </p>
            <p className="text-gray-600 mb-6">
              Thomas has successfully incubated several IT companies in Korea including Mobile Culture, iCity and Acrotech. Prior to Mad Ventures, he was a venture capitalist with Hanmi Technology Investment and has taught various topics in entrepreneurship at the Korean Venture Capital Institute.
            </p>
            <p className="text-gray-600">
              He holds a B.Sc degree from POSTECH in Korea and a B.Com degree from the University of Victoria in Canada.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="bg-gray-50 rounded-lg p-4 flex-1">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-1">
                  Expertise
                </h4>
                <ul className="mt-2 space-y-1">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex-1">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-1">
                  Education
                </h4>
                <ul className="mt-2 space-y-1">
                  {education.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-primary mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Biography;
