import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, FileText, Podcast, ExternalLink, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const MediaHighlights = () => {
  // Load Facebook SDK
  useEffect(() => {
    // Only add the SDK if it's not already present
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Add fb-root div if not present
      if (!document.getElementById("fb-root")) {
        const fbRoot = document.createElement("div");
        fbRoot.id = "fb-root";
        document.body.insertBefore(fbRoot, document.body.firstChild);
      }

      return () => {
        // Cleanup if needed
        if (document.getElementById("facebook-jssdk")) {
          document.body.removeChild(document.getElementById("facebook-jssdk")!);
        }
      };
    }
  }, []);

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
    {
      type: "Article",
      icon: <FileText className="h-16 w-16" />,
      title: "Make Boosting Your Self Confidence A New Year's Resolution",
      description: "Thomas Ahn featured in a Michelle McIntyre article about entrepreneurship and confidence as a key factor for startup success in 2021.",
      link: "https://michellermcintyre.wordpress.com/tag/thomas-ahn/",
    },
    {
      type: "Podcast",
      icon: <Podcast className="h-16 w-16" />,
      title: "Mad Ventures, Venture Capital to Change the World",
      description: "May 2024 interview with Thomas Ahn by Lincoln Stoller PhD, discussing 22 years of venture capital experience and how MAD Ventures is changing the world.",
      link: "https://mindstrengthbalance.substack.com/p/mad-ventures-venture-capital-to-change",
    },
    {
      type: "Facebook",
      icon: <Facebook className="h-16 w-16" />,
      title: "Baby Dragon Canada Interview",
      description: "Interview featuring Thomas Ahn discussing venture capital and entrepreneurship in Canada.",
      isFacebookEmbed: true,
      embedUrl: "https://www.facebook.com/babydragoncanada/posts/pfbid0iNZQUDXVCZERxK7V4t6Bf7BjXj5FAhLAzQeRDZ3eta9ppKoFyeqzovoZZZQAWG15l",
    },
  ];

  return (
    <section id="media" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Media Highlights</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Regular media items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mediaItems.filter(item => !item.isFacebookEmbed).map((item, index) => (
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
                {item.link && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full" 
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {item.type === "Podcast" ? "Listen on Substack" : "Read Article"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facebook embedded content */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center mb-6">Featured Social Media</h3>
          <div className="max-w-2xl mx-auto">
            {mediaItems.filter(item => item.isFacebookEmbed).map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-2">
                    {item.type} Feature
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="flex justify-center">
                    <div 
                      className="fb-post" 
                      data-href={item.embedUrl} 
                      data-width="500"
                      data-show-text="true"
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHighlights;
