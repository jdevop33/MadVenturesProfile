import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="pattern-bg absolute inset-0 opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-12 md:py-20 lg:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              <span className="block">Thomas Ahn</span>
              <span className="block text-primary">Founder & CEO</span>
            </h1>
            <p className="mt-4 max-w-md text-xl text-gray-500">
              Pioneering a breakthrough model of startup investment to Western Canada through I-cubation.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button asChild size="lg" className="font-medium">
                <a href="#company">Learn More</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-80 w-80 bg-gradient-to-br from-primary-100 to-primary-200">
              <div className="absolute inset-0 flex items-center justify-center text-primary-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-white p-3 text-center">
                Thomas Ahn, CEO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
