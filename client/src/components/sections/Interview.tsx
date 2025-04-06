import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Video, Youtube } from "lucide-react";

export default function Interview() {
  return (
    <section id="interview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Interview with Thomas Ahn
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch Thomas discuss investor pitches and what makes startups successful
          </p>
          <Separator className="mx-auto w-16 bg-primary" />
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden bg-white shadow-md">
          <CardHeader className="pb-0">
            <CardTitle className="flex items-center">
              <Video className="w-5 h-5 mr-2 text-primary" />
              Thomas Ahn on Startup Success
            </CardTitle>
            <CardDescription>Key insights for technology entrepreneurs and investors</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="vimeo" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="vimeo">Vimeo Interview</TabsTrigger>
                <TabsTrigger value="youtube">YouTube Talk</TabsTrigger>
              </TabsList>
              <TabsContent value="vimeo">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe 
                    src="https://player.vimeo.com/video/529097511?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                    title="Thomas Ahn on Investor Pitches"
                  ></iframe>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium">Thomas on The Perfect Investor Pitch</p>
                  <p>Learn about the four key aspects every technology startup pitch should address: Problem, Solution, Team, and Unfair Advantage.</p>
                </div>
              </TabsContent>
              <TabsContent value="youtube">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/wYlZ2tLKbEk?si=i9JoEdfiqnYwjnni" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium">Thomas Ahn's Extended Interview</p>
                  <p>A deeper discussion on building successful technology companies and MAD Ventures' investment approach.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={() => window.open("https://youtu.be/wYlZ2tLKbEk?si=i9JoEdfiqnYwjnni", "_blank")}
            >
              <Youtube className="w-4 h-4" /> Watch on YouTube
            </Button>
            <Button 
              variant="link" 
              className="text-primary flex items-center gap-1"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Connect with Thomas <ArrowUpRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}