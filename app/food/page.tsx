import { foodArchives } from '@/lib/data';
import { IntelReport } from '@/components/IntelReport';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Food Archives - The Taj United Club',
  description: 'Explore the culinary treasures and dining experiences at The Taj United Club',
};

export default function FoodPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20 pb-12">
        {/* Header Section */}
        <div className="bg-charcoal border-b-4 border-chili-red py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-3">
            CULINARY ARCHIVES
          </h1>
          <p className="text-saffron font-serif italic max-w-2xl mx-auto">
            Discover the exceptional dining venues and food destinations available to our members
          </p>
          <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
        </div>

        {/* Food Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodArchives.map((food, index) => (
              <IntelReport
                key={food.id}
                {...food}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center py-8 text-cream-dark font-serif italic text-sm">
          <p>Note: Some venues may be restricted based on your membership clearance level.</p>
        </div>
      </div>
      <ClearanceSelector />
    </>
  );
}
