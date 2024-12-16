const FeaturedContent = () => {
  const features = [
    { title: "Latest Updates", description: "Patch 7.34e" },
    { title: "Pro Circuit", description: "Watch Live Matches" },
    { title: "Battle Pass", description: "New Rewards Available" },
    { title: "Community", description: "Join Discord" },
  ];

  return (
    <div className="bg-dota-darker py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dota-dark/50 backdrop-blur-sm border border-dota-purple/20 rounded-lg p-6 hover:border-dota-purple transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;