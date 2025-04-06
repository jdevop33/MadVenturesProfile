import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, FileText } from "lucide-react";

const MediaHighlights = () => {
  const mediaItems = [
    {
      type: "News",
      icon: <Video className="h-16 w-16" />,
      title: "Thomas Ahn Demos Segway HT",
      description: "Thomas Ahn, CEO of MAD Ventures Inc., demos the Segway HT to the New VI News in Victoria, Canada",
    },
    {
      type: "Event",
      icon: <Users className="h-16 w-16" />,
      title: "Investment Forum in Seattle",
      description: "Mad Ventures, Inc. participates in the early stage Investment Forum in Seattle.",
    },
    {
      type: "Partnership",
      icon: <FileText className="h-16 w-16" />,
      title: "Contract with KPMG",
      description: "Thomas Ahn, CEO of Mad Ventures, Inc. Signs a contract with Sang-Kiet Ly from KPMG.",
    },
  ];

  return (
    <section id="media" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Media Highlights</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {item.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  {item.type}
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaHighlights;
