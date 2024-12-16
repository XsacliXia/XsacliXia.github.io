const OptionsGrid = () => {
  const options = [
    { 
      title: "Heroes", 
      description: "Choose your champion",
      image: "/lovable-uploads/4628af8a-0d18-447e-b125-9c5bdf1be78f.png"
    },
    { 
      title: "Items", 
      description: "Browse the shop",
      image: "/lovable-uploads/f02348f5-aefa-46ef-9c75-b927cdb99333.png"
    },
    { 
      title: "Battle Pass", 
      description: "Season rewards",
      image: "/lovable-uploads/d87edbbf-765b-451e-bcaf-8f37d3603b81.png"
    },
    { 
      title: "Tournaments", 
      description: "Competitive scene",
      image: "/lovable-uploads/89d66702-8090-4a4c-93f9-0194e7b6a0ad.png"
    },
    { 
      title: "Community", 
      description: "Join the discussion",
      image: "/lovable-uploads/1e1d8f4e-9892-4bae-be0f-1fc066690f87.png"
    },
    { 
      title: "Learn", 
      description: "Game guides",
      image: "/lovable-uploads/4628af8a-0d18-447e-b125-9c5bdf1be78f.png"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-dota-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-dota-darker/50 border border-dota-purple/20 rounded-lg p-3 md:p-4 hover:border-dota-purple transition-colors cursor-pointer backdrop-blur-sm"
            >
              <div className="aspect-square mb-3 md:mb-4 rounded-lg overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{option.title}</h3>
              <p className="text-xs md:text-sm text-gray-400">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptionsGrid;