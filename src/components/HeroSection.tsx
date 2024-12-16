import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-[80vh] flex items-center justify-center bg-dota-dark">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/1e1d8f4e-9892-4bae-be0f-1fc066690f87.png')",
          filter: "brightness(0.4)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dota-purple/10 to-dota-dark/90" />
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
              Welcome to <span className="text-dota-purple">Dota 2</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              Join millions of players worldwide in the ultimate battle arena. Choose your hero and enter the fight for the Ancients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="w-full sm:w-auto bg-dota-purple hover:bg-dota-purple-dark text-white">
                Play Now
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-dota-purple text-dota-purple hover:bg-dota-purple hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/1e1d8f4e-9892-4bae-be0f-1fc066690f87.png"
              alt="Dota 2 Heroes"
              className="rounded-lg shadow-xl border border-dota-purple/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;