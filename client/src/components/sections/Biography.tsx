import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, GraduationCap, Briefcase, Landmark, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Biography = () => {
  const expertise = [
    "Technology Research",
    "Venture Capital",
    "Startup Incubation",
    "Business Strategy",
    "Technology Investment",
    "Tech Entrepreneurship"
  ];

  const education = [
    "B.Sc, POSTECH (Korea)",
    "B.Com, University of Victoria (Canada)",
  ];
  
  const professionalExperience = [
    {
      role: "CEO & Founder",
      company: "MAD Ventures",
      period: "2002 - Present",
      description: "Leading sector agnostic startup incubator based in Victoria, BC, Canada."
    },
    {
      role: "Venture Capitalist",
      company: "Hanmi Technology Investment",
      period: "Prior to MAD Ventures",
      description: "Evaluated technology investments and managed portfolio companies."
    },
    {
      role: "Instructor",
      company: "Korean Venture Capital Institute",
      period: "",
      description: "Taught various topics in entrepreneurship and startup development."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Biography</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden accent-top">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">Thomas Ahn</h3>
                  <Badge variant="outline" className="ml-3">CEO & Founder</Badge>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Thomas is the founder and CEO of MAD Ventures, Inc. and directs the overall vision and operation of the company. He is an active entrepreneur, an expert in technology research and also in nurturing technology start-ups.
                </p>
                <p className="text-gray-600 mb-6">
                  Thomas has successfully incubated several IT companies in Korea including Mobile Culture, iCity and Acrotech. Prior to MAD Ventures, he was a venture capitalist with Hanmi Technology Investment and has taught various topics in entrepreneurship at the Korean Venture Capital Institute.
                </p>
                <p className="text-gray-600 mb-8">
                  He holds a B.Sc degree from POSTECH in Korea and a B.Com degree from the University of Victoria in Canada.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  Professional Experience
                </h4>
                
                <div className="space-y-4 mb-6">
                  {professionalExperience.map((experience, index) => (
                    <div key={index} className="pl-4 border-l-2 border-gray-200">
                      <div className="flex justify-between">
                        <h5 className="font-medium">{experience.role}</h5>
                        {experience.period && (
                          <span className="text-sm text-gray-500">{experience.period}</span>
                        )}
                      </div>
                      <p className="text-gray-700">{experience.company}</p>
                      <p className="text-sm text-gray-600 mt-1">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/5 space-y-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((item, index) => (
                      <Badge key={index} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    Education
                  </h4>
                  <ul className="space-y-2">
                    {education.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Successfully incubated multiple technology startups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pioneer of the I-cubation model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Established global business connections across Asia Pacific</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Biography;
