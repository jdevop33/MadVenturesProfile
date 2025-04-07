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
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96 w-96">
              <img 
                src="/images/thomas-ahn.png" 
                alt="Thomas Ahn, CEO of MAD Ventures" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white p-3 text-center backdrop-blur-sm">
                Thomas Ahn, CEO of MAD Ventures
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
