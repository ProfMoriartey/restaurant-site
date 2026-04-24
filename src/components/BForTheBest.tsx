import FlipCard from "./FlipCard"

const menuItems = [
  { title: "BURGERS", description: "All buns and patties are as fresh as it gets!" },
  { title: "HOT DOGS", description: "Mouthful original hot dogs!" },
  { title: "CHICKEN WINGS", description: "All wings are served with carrot, celery, french fries & ranch or blue sauce!" },
  { title: "SALADS", description: "Homemade & Fresh Salads" },
  { title: "BEST DUO", description: "Perfect couple Burger & Beer" },
  { title: "MILKSHAKES", description: "Original Shakes!" },
  { title: "DRINKS", description: "Soft & Alcoholic" },
  { title: "DESSERTS", description: "Fresh & Homemade" }
]

export default function BForTheBest() {
  return (
    <section id="best" className="w-full bg-amber-400">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center uppercase">
          B For The Best
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <FlipCard 
              key={index} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}