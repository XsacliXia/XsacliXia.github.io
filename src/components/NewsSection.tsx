import { Card, CardContent } from "@/components/ui/card";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Latest Updates",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Tournament News",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Community Events",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-dota-darker">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-dota-dark/50 border-dota-purple/20 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-dota-purple mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;