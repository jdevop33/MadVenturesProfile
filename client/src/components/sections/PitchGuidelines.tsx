import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  BrainCircuit, 
  ChevronRight, 
  FileText, 
  Presentation, 
  Puzzle, 
  Target, 
  Users
} from "lucide-react";

export default function PitchGuidelines() {
  return (
    <section id="pitch-guidelines" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Startup Pitch Guidelines
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thomas Ahn's framework for a successful investor pitch
          </p>
          <Separator className="mx-auto w-16 bg-primary" />
        </div>

        <Tabs defaultValue="thomas" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="thomas">Thomas's Framework</TabsTrigger>
            <TabsTrigger value="kawasaki">Guy Kawasaki</TabsTrigger>
            <TabsTrigger value="skm">SKMurphy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="thomas" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md accent-top">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                    The Problem
                  </CardTitle>
                  <CardDescription>What customers are facing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What is the problem your customers face?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Why is this problem important?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Why act on it now?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Why is it getting worse?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md accent-top">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Puzzle className="w-5 h-5 mr-2 text-green-500" />
                    The Solution
                  </CardTitle>
                  <CardDescription>What you're providing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What is your solution?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What exactly are you providing?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>How does it solve the problem?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What unique value does it deliver?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md accent-top">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    The Team
                  </CardTitle>
                  <CardDescription>Who will execute</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Who are you and your team?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Why are you the right team to solve this problem?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What relevant experience do you have?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>How are your skills complementary?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md accent-top">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BrainCircuit className="w-5 h-5 mr-2 text-purple-500" />
                    The Unfair Advantage
                  </CardTitle>
                  <CardDescription>What can't be easily copied</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What's unique about your business?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>What can't be easily copied or bought?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Domain expertise, personal authority?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>Existing customers, proprietary technology?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium mb-2 text-gray-900">Thomas's Pitch Structure:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                <li><span className="font-medium">Start with a hook</span> - Capture your audience's attention</li>
                <li><span className="font-medium">Cover the four key aspects</span> - Problem, Solution, Team, Unfair Advantage</li>
                <li><span className="font-medium">End with a bang</span> - Leave investors interested and wanting more</li>
                <li><span className="font-medium">Keep it short</span> - Be concise while covering all key elements</li>
              </ol>
              <p className="mt-4 text-gray-600 italic">Thomas's example: "We are a micro venture capital and we give money."</p>
            </div>
          </TabsContent>
          
          <TabsContent value="kawasaki" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Presentation className="w-5 h-5 mr-2 text-primary" />
                  Guy Kawasaki's 10-Slide Pitch Deck
                </CardTitle>
                <CardDescription>From "The Art of the Start" - Recommended by Thomas Ahn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">1. Title</p>
                    <p className="text-gray-600 text-sm">Company name, your name and title, contact information</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">2. Problem/Opportunity</p>
                    <p className="text-gray-600 text-sm">Describe the pain that you're alleviating or the opportunity</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">3. Value Proposition</p>
                    <p className="text-gray-600 text-sm">Explain the value of your solution</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">4. Underlying Magic</p>
                    <p className="text-gray-600 text-sm">Describe the technology, secret sauce, or magic behind your product</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">5. Business Model</p>
                    <p className="text-gray-600 text-sm">Explain how you make money</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">6. Go-to-Market Plan</p>
                    <p className="text-gray-600 text-sm">Explain how you'll reach your customer</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">7. Competitive Analysis</p>
                    <p className="text-gray-600 text-sm">Provide a complete view of the competitive landscape</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">8. Management Team</p>
                    <p className="text-gray-600 text-sm">Describe the key players and their relevant experience</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">9. Financial Projections and Key Metrics</p>
                    <p className="text-gray-600 text-sm">Provide a 3-year forecast and the key metrics you track</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">10. Current Status, Timeline, Use of Funds</p>
                    <p className="text-gray-600 text-sm">Explain your current status, what you've accomplished, and how you'll use the money</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skm" className="mt-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  SKMurphy Investment Presentation Format
                </CardTitle>
                <CardDescription>8-10 slides for a 5-6 minute pitch followed by Q&A</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">1. Summary / Elevator pitch</p>
                    <p className="text-gray-600 text-sm">Brief overview of your business proposition</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">2. Problem / Need</p>
                    <p className="text-gray-600 text-sm">What problem are you solving for customers?</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">3. Your Solution / Value Proposition</p>
                    <p className="text-gray-600 text-sm">How your product solves the problem</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">4. Secret Sauce / Unfair Advantage</p>
                    <p className="text-gray-600 text-sm">What makes your solution unique and defensible</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">5. Market / Business Model</p>
                    <p className="text-gray-600 text-sm">How you make money and market size</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">6. Go To Market Plan</p>
                    <p className="text-gray-600 text-sm">Customer acquisition/sales model/distribution channels</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">7. Competition / Alternatives</p>
                    <p className="text-gray-600 text-sm">Current alternatives to your solution</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">8. Team</p>
                    <p className="text-gray-600 text-sm">Who will execute and why they're qualified</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">9. Financial Projections and Key Metrics</p>
                    <p className="text-gray-600 text-sm">Impact of funds on business/value created</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">10. Traction / Results / Timeline</p>
                    <p className="text-gray-600 text-sm">Progress to date and key milestones for fund use</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Elevator pitch format:</span>{" "}
                    "We solve [problem] by providing [advantage], to help [target] accomplish [target's goal]. 
                    We make money by charging [customers] to get [benefit]."
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}